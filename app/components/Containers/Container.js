import React, {Component} from 'react';
import { View, StatusBar } from 'react-native';

import styles from './styles';

class MainContainer extends Component {
    render() {
        const {children} = this.props;

        return (
            <View style={styles.container}>
                <StatusBar translucent={false} barStyle="light-content"/>
                {children}
            </View>
        );
    }
}

export default MainContainer;