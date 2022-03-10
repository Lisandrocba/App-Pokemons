import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { MAPS_KEY } from '../../../utils/data/maps';

const Locations =()=>{
    const [piked, setPiked] = useState()

    const obtenerUbicacion =()=>{
        Geolocation.getCurrentPosition(info=>{
            console.warn(info);
            const {latitude, longitude} = info.coords;
            const location = {
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
            setPiked(location)

        },
        error =>{
            console.warn(error);
            Alert.alert('error al buscar la locacion'
            [{text: 'okey'}]
            )
        },
        {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 10000,
            forceRecuestLocation: true,
            showLocationDialog: true
        }
        )
    }

    console.warn(piked)
    const mapPreviewUrl = piked ? `https://maps.googleapis.com/maps/api/staticmap?center=${piked.latitude},${piked.longitude}&size=600x300&maptype=roadmap
    &markers=color:blue%7Clabel:S%7C${piked.latitude},${piked.longitude}&key=${MAPS_KEY}`
    :
    '';

    return(
        <View style={styles.container}>
            <View style={styles.previo}>
                {
                    !piked
                    ? 
                    <Text>Esperando ubicacion...</Text> 
                    : 
                    <Image style={styles.image} source={{uri: mapPreviewUrl}}/>
                    }
            </View>
            <Button title='Obtener ubicacion' onPress={obtenerUbicacion} />
        </View>
        )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    previo: {
        width: 200,
        height: 200,
        marginBottom: 10,
        marginTop:10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 10
    },
    image:{
        width: '100%',
        height: '100%'
    }
})

export default Locations;