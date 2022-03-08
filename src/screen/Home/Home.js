import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import {styles} from './styles';


const Home =({navigation})=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.navigate('FormarEquipo')} style={[styles.touchable, {backgroundColor: '#277da1'}]}>
                <Text style={styles.Text}>Formar Equipo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('MisEquipos')} style={[styles.touchable, {backgroundColor: '#f94144'}]}>
                <Text style={styles.Text}>Mis Equipos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('DatosUsuario')} style={[styles.touchable, {backgroundColor: '#90be6d'}]}>
                <Text style={styles.Text}>Perfil</Text>
            </TouchableOpacity>
        </View>
        )
}

export default Home;