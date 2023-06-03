import { StyleSheet } from 'react-native'
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 60,
        fontWeight: '900',
        bottom: 100,
        color: '#0054FF',
    },
    description: {
        fontSize: 26,
        fontWeight: '400',
        bottom: 40,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,        
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC',
    },
    button: {
        top: 20,
        width: '30%',
        backgroundColor: '#0054FF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    link: {
        top: 40, 
        fontSize: 20,
        color: '#0054FF',
        textDecorationLine: 'underline'
    }
});
 
export default styles