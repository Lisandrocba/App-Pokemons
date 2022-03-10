import React from "react";
import {
    View,
    Text,
    Image
} from "react-native";
import { useSelector } from "react-redux";
import {styles} from './styles'

const MisEquipos =()=>{
    const state = useSelector(state => state)
    const {equipos} = state.equipos;

    return(
        <View>
            {
                equipos.map(equi =>(
                    <View style={styles.container}>
                        <Image style={{width: 60, height: 60}} source={{uri: equi[0].image}} />
                        <Image style={{width: 60, height: 60}} source={{uri: equi[1].image}} />
                        <Image style={{width: 60, height: 60}} source={{uri: equi[2].image}} />
                        <Image style={{width: 60, height: 60}} source={{uri: equi[3].image}} />
                        <Image style={{width: 60, height: 60}} source={{uri: equi[4].image}} />
                    </View>
                )
                   

                    )
            }
        </View>
    )
}

export default MisEquipos;