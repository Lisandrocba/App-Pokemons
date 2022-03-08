export const AGREGAR_POKEMON = 'AGREGAR_POKEMON';
export const ELIMINAR_EQUIPO = 'ELIMINAR_EQUIPO';
export const GUARDAR_EQUIPO = 'GUARDAR_EQUIPO';

export const agregarPokemon =(id)=>({type: AGREGAR_POKEMON, payload: id})

export const eliminarEquipo=()=> ({type: ELIMINAR_EQUIPO})

export const guardarEquipo=(equipo)=> ({type: GUARDAR_EQUIPO, payload: equipo})