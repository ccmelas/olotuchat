import { auth, database } from "./../config/firebase";

//Register the user using email and password
export function register(data, callback) {
    const { email, password } = data;
    auth.createUserWithEmailAndPassword(email, password)
        .then((user) => callback(true, user, null))
        .catch((error) => callback(false, null, error));
}

//Create the user object in realtime database
export const createUser = (user, callback) => {
    database.ref('users').child(user.uid).update({ ...user })
        .then(() => callback(true, null, null))
        .catch((error) => callback(false, null, {message: error}));
}

//Sign the user in with their email and password
export const login = (data, callback) => {
    const { email, password } = data;
    auth.signInWithEmailAndPassword(email, password)
        .then((user) => getUser(user, callback))
        .catch((error) => callback(false, null, error));
}

//Get the user object from the realtime database
export const getUser = (user, callback) => {
    database.ref('users').child(user.uid).once('value')
        .then(function(snapshot) {
            const exists = (snapshot.val() !== null);
            
            //if the user exist in the DB, replace the user variable with the returned snapshot
            if (exists) user = snapshot.val();

            const data = { exists, user }
            callback(true, data, null);
        })
        .catch(error => callback(false, null, error));
}

export const getUsers = (callback) => {
    database.ref('users')
            .once('value')
            .then((snapshot) => {
                callback(true, snapshot.val(), null);
            })
            .catch((error) => console.log(error));
}

//Send Password Reset Email
export function resetPassword(data, callback) {
    const { email } = data;
    auth.sendPasswordResetEmail(email)
        .then((user) => callback(true, null, null))
        .catch((error) => callback(false, null, error));
}

export function signOut (callback) {
    auth.signOut()
        .then(() => {
            if (callback) callback(true, null, null)
        })
        .catch((error) => {
            if (callback) callback(false, null, error)
        });
}

//Create a message object in realtime database
export const startConversation = (message) => {
    database.ref(`chats`)
            .push({
                user_one_id: message.sender, 
                user_two_id: message.receiver,
            })
            .then(response => {
                let responseArray = response.toString().split('/');
                let chatId = responseArray[responseArray.length - 1];
                database.ref(`chats/${chatId}/messages`).push(message)
                        .then((response) => {
                            database.ref(`users/${message.sender}/chats`).update({
                                [chatId]: message.receiver
                            });
                            database.ref(`users/${message.receiver}/chats`).update({
                                [chatId]: message.sender
                            });
                        }).catch(error => console.log('First message error: ', error));
            })
            .catch(error => console.log('First message error: ', error));

};

export const sendMessage = (chatId, message, callback) => {
    database.ref(`chats/${chatId}/messages`).push(message)
        .then((response) => {
            console.log(response);
            callback(true, null, null);
        })
        .catch((error) => {
            callback(false, null, {message: error})
        });
}

export const chatSubscription = (user, callback) => {
    database.ref(`users/${user.uid}/chats`)
            .on('value', (snapshot) => {
                callback(snapshot.val());
            });
}

export const chatMessageSubscription = (chatId, callback) => {
    database.ref(`chats/${chatId}/messages`)
            .on('value', (snapshot) => {
                callback(snapshot.val());
            });
}