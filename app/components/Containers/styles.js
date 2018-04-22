import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$primaryYellow'
    },

    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '$primaryYellow'
    }
});

export default styles;