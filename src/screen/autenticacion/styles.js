import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212529'
    },
    conteinerForm: {
        width: width * 0.65,
        height: height / 1.8,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000000',
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    fromTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    botonFormulario:{
        textAlign: 'center',
        marginBottom: 15
    },
    label: {
        fontSize: 12,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    input:{
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        color: '#333',
        marginBottom: 15
    }
})