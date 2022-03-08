import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window')

export const styles = StyleSheet.create({
    contenedor:{
       flex:1,
    },
    contenedorBloke: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '30%'
        
    },
    bloke: {
        flex: 1,
        backgroundColor: '#adb5bd',
        margin: 2,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    blokePositivo:{
        flex: 1,
        backgroundColor: '#b9fbc0',
        margin: 2,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 50,
    },
    flatList:{
        height: '40%'
    },
    image:{
        width: 50,
        height: 50
    },contenedorFooter:{
        flex: 1,
        backgroundColor: '#577590',
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        padding: 5
    },
    button:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 15
    }
})