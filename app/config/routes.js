import { StackNavigator, SwitchNavigator } from 'react-navigation';

import Authentication from './../screens/Authentication';
import Home from './../screens/Home';
import Profile from './../screens/Profile';
import ProfileEdit from './../screens/ProfileEdit';
import Chat from './../screens/Chat';
import Splash from './../screens/Splash';

const AppStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null
        }
    },

    Profile: {
        screen: Profile,
        navigationOptions: ({navigation}) => ({
            mode:'modal',
            headerTitle: navigation.state.params.user.username,
            headerStyle: {
                backgroundColor: '#f5c76b',
            },
        })
    },

    ProfileEdit: {
        screen: ProfileEdit,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Update Profile',
            headerStyle: {
                backgroundColor: '#f5c76b',
            },
        })
    },

    Chat: {
        screen: Chat,
        navigationOptions: {
            header: () => null
        }
    }
});

const AuthStack = StackNavigator({
    Authentication: {
        screen: Authentication,
        navigationOptions: {
            header: () => null
        }
    },
});

export default SwitchNavigator(
    {
        Splash: {
            screen: Splash,
            navigationOptions: {
                header:() => null
            }
        },
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Splash'
    }
);