import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    chatBubbleContainer: {
        marginBottom: 8
    },

    chatBubble: {
        width: '60%',
        backgroundColor: '#e6e5e3',
        borderRadius: 13,
        paddingHorizontal: 8,
        paddingVertical: 5
    },

    message: {
        fontSize: 12,
        color: '#666',
        fontWeight: '500',
    },

    time: {
        alignSelf: 'flex-end',
        fontSize: 8,
        fontStyle: 'italic',
        paddingHorizontal: 15,
        paddingVertical: 5
    },

    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10
    },

    input: {
        width: '100%',
        backgroundColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        color: '$white'
    }
});

export default styles;