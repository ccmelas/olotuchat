import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = 150;

const styles = EStyleSheet.create({
    $largeImageSize: imageWidth,
    $smallImageSize: imageWidth / 2,

    container: {
        flex: 2,
        justifyContent: 'flex-end', 
        alignItems: 'center'
    },

    image: {
        width: '$largeImageSize', 
        height: '$largeImageSize'
    }
});

export default styles;