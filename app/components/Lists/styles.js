import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        width: 65,
        height: 65,
        borderRadius: 33
    },

    textContainer: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 20
    },

    headerText: {
        fontSize: 18,
        fontWeight: '600',
    },

    jobText: {
        fontSize: 12,
        fontStyle: 'italic'
    },

    chatBubble: {
        marginHorizontal: 10,
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;