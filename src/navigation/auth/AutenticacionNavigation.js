import React from 'react';
import { createNativeStackNavigator } from 'react-navigation/native-stack';
import Autenticacion from '../../screen/autenticacion/Autenticacion';

const Stack = createNativeStackNavigator();

const AutenticacionNavigation =()=>{
    <Stack.Navigator
        initialRoteName='Autenticacion'
        screenOptions={{headerShow: false}}   
    >
        <Stack.Screen name='Autenticacion' component={Autenticacion} />

    </Stack.Navigator>
}

export default AutenticacionNavigation;