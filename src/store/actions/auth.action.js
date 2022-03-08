import { URL_AUTH } from '../../utils/data/dataBase';
import {URL_AUTH_SIGNIN} from '../../utils/data/dataBase';

export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';


export const signIn =(email, password)=>{

    return async dispatch =>{
        const response = await fetch(URL_AUTH_SIGNIN, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            })
        })

        const data = await response.json();
       
        dispatch({
            type: SIGNIN,
            token: data.idToken,
            userId: data.localId
        })
}
}

export const signUp =(email, password)=>{

    return async dispatch =>{
        const response = await fetch(URL_AUTH, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            })
        })

        const data = await response.json();

        dispatch({
            type: SIGNUP,
            token: data.idToken,
            userId: data.localId
        })
    } 

}

