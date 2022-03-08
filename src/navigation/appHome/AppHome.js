import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DatosUsuario from '../../screen/DatosUsuario/DatosUsuario';
import DetallePokemon from '../../screen/detallePokemon/DetallePokemon';
import FormarEquipo from '../../screen/formarEquipo/FormarEquipo';
import Home from '../../screen/Home/Home';
import MisEquipos from '../../screen/misEquipos/MisEquipos';


const Stack = createNativeStackNavigator();

const AppHome =()=>{
    return(
            <Stack.Navigator 
                initialRouteName='Home'
                screenOptions={{
                   headerStyle:{ backgroundColor:'#577590' },
                   headerTitleStyle:{
                       fontWeight: 'bold',
                       fontSize: 28,
                       color: '#fff'
                   } 
                }}
                >
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='FormarEquipo' component={FormarEquipo} />
                <Stack.Screen name='DetallePokemon' component={DetallePokemon} />
                <Stack.Screen name='MisEquipos' component={MisEquipos} />
                <Stack.Screen name='DatosUsuario' component={DatosUsuario} />
            </Stack.Navigator>
    )
}

export default AppHome;