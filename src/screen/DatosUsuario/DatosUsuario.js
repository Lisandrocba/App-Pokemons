import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    PermissionsAndroid,
    Platform
} from 'react-native';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import {launchCamera} from 'react-native-image-picker';
import Locations from './locations/Locations';


const DatosUsuario =()=>{
    const [piker, setPicker] = useState();
    const IS_IOS = Platform.OS === 'ios'

    const verifyPermission = async()=>{
        const options = {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64 : false
        }

        let granted;

        if(IS_IOS){
            granted = await request(PERMISSIONS.IOS.CAMERA);
        }else{
            granted = await request(PERMISSIONS.ANDROID.CAMERA);
        }

        if(granted === RESULTS.GRANTED){
            launchCamera(options, (res)=>{
                if(!res.didCancel && !res.error){
                    setPicker(res.assets[0])
                }
            })
        }else{
            console.warn('premiso denegado')
        }
        
    }

    

    return(
        <View style={styles.container}>
            <Text>Foto de perfil</Text>
            <View style={styles.previo}>
                {
                !piker
                ? 
                <Text>No hay ninguna imagen Guardada</Text> 
                : 
                <Image style={styles.imagen} source={{ uri: piker.uri }} />
                }
            </View>
            <Button title='Tomar Foto' onPress={()=> verifyPermission()}/>
            <Locations />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    previo: {
        width: '50%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 100
    },
    imagen: {
        width: '100%',
        height: '100%',
        borderRadius: 100
    }
})

export default DatosUsuario;