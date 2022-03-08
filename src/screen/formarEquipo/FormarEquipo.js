import React, { useEffect, useState } from "react";
import {
    FlatList,
    View,
    Text,
    Image,
    Button,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { eliminarEquipo, guardarEquipo } from "../../store/actions/equipos.action";

import {POKEMONS} from '../../utils/data/dataPokemons'
import PokemonItem from "../PokemonItem/PokemonItem";
import Alerta from "./Alerta/Alerta";
import {styles} from './styles'


const FormarEquipo =({navigation})=>{
    const [tope, setTope] = useState(false)
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const {equipo} = state.equipos;
    


    const renderDetallePokemon=(item)=>{

        equipo.length <5
        ?
        navigation.navigate('DetallePokemon',
        {
            item: item
        })  
        : 
        setTope(true)
    }

    const confirmarAlerta =()=>{
        setTope(false)
    }

    
    const eliminarTodos =()=>{
        dispatch(eliminarEquipo())
    }
    
    const GuardarTodos=(eq)=>{
        equipo.length === 5
        ?
        dispatch(guardarEquipo(eq))
        :
        console.warn('Debe ingresar 5 personajes para poder guardarlo')
    }
    
    const renderPokemons =({item})=>{
       return  <PokemonItem item={item} renderDetallePokemon={renderDetallePokemon} />
    }
   

    return(
        <View style={styles.contenedor}>
            {
                tope
                ?
                <Alerta confirmarAlerta={confirmarAlerta}  mensaje='El Equipo no puede superar la cantidad de 5 Pokemones, para poder agregar un pokemon debe eliminar uno de la lista'/>
                :
                <FlatList
                    style= {styles.flatList}
                    data={POKEMONS}
                    keyExtractor={item => item.id}
                    renderItem={renderPokemons}
                    numColumns={2}
                />
            }
            <View style={styles.contenedorFooter}>
                <Text style={styles.text}>Tu Equipo</Text>
                <View style={styles.contenedorBloke}>
                    {
                        equipo[0]
                        ?
                        <View style={styles.blokePositivo}>
                            <Image style={styles.image} source={{uri: equipo[0].image}} />
                        </View>
                        :
                        <View style={styles.bloke}>
                            <Text style={styles.text}>-</Text>
                        </View>
                    }
                    {
                        equipo[1]
                        ?
                        <View style={styles.blokePositivo}>
                            <Image style={styles.image} source={{uri: equipo[1].image}} />
                        </View>
                        :
                        <View style={styles.bloke}>
                            <Text style={styles.text}>-</Text>
                        </View>
                    }
                    {
                        equipo[2]
                        ?
                        <View style={styles.blokePositivo}>
                            <Image style={styles.image} source={{uri: equipo[2].image}} />
                        </View>
                        :
                        <View style={styles.bloke}>
                            <Text style={styles.text}>-</Text>
                        </View>
                    }
                    {
                        equipo[3]
                        ?
                        <View style={styles.blokePositivo}>
                            <Image style={styles.image} source={{uri: equipo[3].image}} />
                        </View>
                        :
                        <View style={styles.bloke}>
                            <Text style={styles.text}>-</Text>
                        </View>
                    }
                    {
                        equipo[4]
                        ?
                        <View style={styles.blokePositivo}>
                            <Image style={styles.image} source={{uri: equipo[4].image}} />
                        </View>
                        :
                        <View style={styles.bloke}>
                            <Text style={styles.text}>-</Text>
                        </View>
                    }
                    
                    
                
                </View> 
                <View style={styles.button}>
                    <Button onPress={()=> eliminarTodos()}  title="Eliminar Equipo" />
                    <Button onPress={()=> GuardarTodos(equipo)} title="Guardar Equipo" />
                </View>
            </View>   
        </View>
        
    )
}

export default FormarEquipo;