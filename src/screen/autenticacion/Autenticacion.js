import React, { useState } from 'react';
import { 
    View, 
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    Button,
    TextInput
} from 'react-native';
import { useDispatch } from 'react-redux';
import { signIn, signUp } from '../../store/actions/auth.action';
import {styles} from './styles'

const Autenticacion =()=> {
    const dispatch = useDispatch()
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleAuth =()=>{
       if(isLogin){
        dispatch(signIn(email, password))
       }else{
        dispatch(signUp(email, password))
       }

    }

    return(
        <KeyboardAvoidingView
            style={styles.container}
        >          
            <View style={styles.conteinerForm}>
                <Text style={styles.fromTitle}>{isLogin ? 'Login' : 'Registro'}</Text>
                <Text style={styles.label}>Email:</Text>
                <View>
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor='#999'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text)=> setEmail(text)}
                        value={email}
                    />
                    <Text style={styles.label}>Password:</Text>
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor='#999'
                        autoCapitalize='none'
                        secureTextEntry={true}
                        onChangeText={(text)=> setPassword(text)}
                        value={password}
                    />
                </View>
                <TouchableOpacity onPress={()=> setIsLogin(!isLogin)}>
                    <Text style={styles.botonFormulario}>{ isLogin ? '¿No tienes una cuenta? Registrate' : '¿Ya tienes una cuenta?' }</Text>
                </TouchableOpacity>
                <Button onPress={()=>{handleAuth()}} title={isLogin ? 'Ingresar' : 'Registrar'} color='#2e78b7' />
            </View>  
        </KeyboardAvoidingView>
    )
}

export default Autenticacion;