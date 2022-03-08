import {StyleSheet, Dimensions} from 'react-native';


const {height} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchable: {
        width: '90%',
        height: height /4,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        elevation: 10,
    },
    Text:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: 'ShipporiAntiqueB1'
    }
})