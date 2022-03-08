import React from 'react';
import {
    View,
    Text,
    Image,
    Button
} from 'react-native';
import { useDispatch } from 'react-redux';
import { agregarPokemon } from '../../store/actions/equipos.action';
import {styles} from './styles';

const DetallePokemon =({route, navigation})=>{
    const dispatch = useDispatch()

    const item = route.params.item;

    const agregarAlEquipo =(id )=>{
        dispatch(agregarPokemon(id));
        navigation.navigate('FormarEquipo')
    }

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: item.image}} />
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.contenedorText}>
                <Text style={styles.text}>Ataque: {item.ataque}</Text>
                <Text style={styles.text}>Defensa: {item.defensa}</Text>
            </View>
            <View style={{marginBottom: 40}}>
                <Button onPress={()=>agregarAlEquipo(item.id)} title='Agregar' color='#577590' />
            </View>
        </View>
    )
}

export default DetallePokemon;