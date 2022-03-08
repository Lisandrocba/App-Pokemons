import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'


import AuthReducer from './reducers/auth.reducer';
import equipoRedicer from './reducers/equipos.reducer';

const RootReducer = combineReducers({
    auth: AuthReducer,
    equipos: equipoRedicer
})

export default createStore(RootReducer, applyMiddleware(thunk));