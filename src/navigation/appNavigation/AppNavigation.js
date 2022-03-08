import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Autenticacion from '../../screen/autenticacion/Autenticacion';
import { useSelector } from 'react-redux';
import AppHome from '../appHome/AppHome';

const AppNavigation =()=>{
    const isAuth = useSelector(state => state.auth.userId)

    return(
        <NavigationContainer>
            {/* {isAuth ? <AppHome /> : <Autenticacion />} */}
            <AppHome />
        </NavigationContainer>
        )
}

export default AppNavigation;