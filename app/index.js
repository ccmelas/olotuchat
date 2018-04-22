import React from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import { AlertProvider } from './components/Alert';

import Navigator from './config/routes';
import store from './config/store';

EStyleSheet.build({
    $primaryYellow: '#f5c76b',
    $white: '#fff'
});

export default () => (
    <Provider store={store}>
        <AlertProvider>
            <Navigator/>
        </AlertProvider>
    </Provider>
);