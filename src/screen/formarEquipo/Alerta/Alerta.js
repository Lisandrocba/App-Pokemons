import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import {styles} from './styles';

const Alerta =({confirmarAlerta, mensaje})=>{
    return(
        <View style={styles.contenedor}>
            <Text style={styles.texto}>
                {mensaje}
            </Text>

            <Button onPress={()=>confirmarAlerta()} title='Aceptar'/>
        </View>
    )
}

export default Alerta;