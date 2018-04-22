import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        flex: 3,
        width: '100%',
        alignItems: 'center',
    },

    formGroup: {
        width: '90%',
        marginBottom: 30
    },

    label: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    input: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: '#000',
        borderRadius: 10,
        color: '$white'
    },

    formButton: {
        width: '40%',
        marginTop: 20,
        backgroundColor: '#000',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10
    },

    loader: {
        width: '40%',
        marginTop: 20,
        alignItems: 'center',
        paddingVertical: 10,
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default styles;