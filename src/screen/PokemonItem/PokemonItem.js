import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import DetallePokemon from '../detallePokemon/DetallePokemon';
import {styles} from './styles'

const PokemonItem =({item, renderDetallePokemon})=>{

    return(
        <TouchableOpacity onPress={()=> renderDetallePokemon(item)} style={styles.contenedor}>
            <Image style={styles.image} source={{uri: item.image}} />
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
        )
}

export default PokemonItem;