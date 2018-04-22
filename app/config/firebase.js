import * as firebase from "firebase";

// Initialize Firebase
console.ignoredYellowBox = [ 'Setting a timer' ];
try {
    const config = {
        apiKey: "AIzaSyCejqgw5ID_51uTx_02C2h2re6a-TCMsuQ",
        authDomain: "olotuchat.firebaseapp.com",
        databaseURL: "https://olotuchat.firebaseio.com",
        projectId: "olotuchat",
        storageBucket: "olotuchat.appspot.com",
        messagingSenderId: "822730067331"
    };

    firebase.initializeApp(config);
} catch(e) {

}

export const database = firebase.database();
export const auth = firebase.auth();
export default firebase;