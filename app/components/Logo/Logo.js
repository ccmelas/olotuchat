import React, { Component } from 'react';
import {View, Image, Keyboard, Animated, Platform} from 'react-native';
import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
    constructor(props) {
        super(props);
        this.imageWidth = new Animated.Value(styles.$largeImageSize);
    }

    componentDidMount() {
        const name = Platform.OS === 'ios' ? 'Will' : 'Did';
        this.keyboardShowListener = Keyboard.addListener(`keyboard${name}Show`, this.keyboardShow);
        this.keyboardHideListener = Keyboard.addListener(`keyboard${name}Hide`, this.keyboardHide);
    }

    componentWillUnmount() {
        this.keyboardShowListener.remove();
        this.keyboardHideListener.remove();
    }

    keyboardShow = () => {
        Animated.parallel([
            Animated.timing(this.imageWidth, {
                toValue: styles.$smallImageSize,
                duration: ANIMATION_DURATION
            })
        ]).start();
    }

    keyboardHide = () => {
        Animated.parallel([
            Animated.timing(this.imageWidth, {
                toValue: styles.$largeImageSize,
                duration: ANIMATION_DURATION
            })
        ]).start();
    }

    render() {
        const imageStyles = [
            styles.image,
            {width: this.imageWidth},
        ];

        return (
            <View style={styles.container}>
                <Animated.Image 
                    style={imageStyles} 
                    source={require('./images/logo.png')} 
                    resizeMode="contain"
                />
            </View>
        );
    }
}

export default Logo;