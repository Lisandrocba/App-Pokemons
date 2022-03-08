import { POKEMONS } from "../../utils/data/dataPokemons";
import { AGREGAR_POKEMON, ELIMINAR_EQUIPO, ELIMINAR_POKEMON, GUARDAR_EQUIPO } from "../actions/equipos.action"


export const initialState = {
    pokemons: POKEMONS,
    equipo: [],
    equipos:[]
}

const equipoRedicer =(state= initialState, action)=>{
    switch(action.type){
        case AGREGAR_POKEMON:{
            let nuevoItem = state.pokemons.find(
                (pokemon) => pokemon.id === action.payload)
            
            let itemRepetido = state.equipo.find(pokemon => pokemon.id === nuevoItem.id)

            if(itemRepetido){
                console.warn('El pokemon ya se encuentra en el equipo')
                return state
            } else{
                return{
                    ...state, 
                    equipo: [...state.equipo, nuevoItem]
                }
            }          
        }

        case GUARDAR_EQUIPO:{
            let nuevoEquipo = action.payload
            let random = Math.random()
            
            
            return{ ...state, equipos: [...state.equipos, nuevoEquipo]}

        }

        case ELIMINAR_EQUIPO:{
            state.equipo = []
            return state;
        }

        default: return state;

    }
}


export default equipoRedicer;