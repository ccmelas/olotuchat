import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    imageContainer: {
        flex: 2,
        flexDirection: 'column-reverse',
        alignItems: 'center'
    },

    image: {
        height: 100,
        width: 100,
        marginBottom: 20,
        borderRadius: 50
    },

    textContainer: {
        flex: 2,
        alignItems: 'center'
    },

    name: {
        fontSize: 20,
        fontWeight: "800",
    },

    username: {
        fontSize: 16,
        fontWeight: "500"
    },

    jobTitle: {
        fontSize: 14,
        fontStyle: "italic"
    }
});

export default styles;