import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-type"

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state = initialState, { type, payload })=>{
    switch (type){
        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload };
        case REMOVE_FAV:
            return { ...state, myFavorites: payload };
        case FILTER:
            const allCharactersFilter = state.allCharacters.filter(character => character.gender === payload)
            return{
                ...state,
                myFavorites: payload === 'allCharacters'
                ? [...state.allCharacters]
                : allCharactersFilter,
            }
        case ORDER:
            const allfav = [...state.allCharacters]
            return {
                ...state,
                myFavorites:  payload === 'A' 
                ? allfav.sort((a, b)=> a.id - b.id) 
                : allfav.sort((a, b)=> b.id - a.id),
            }
        default:
            return {...state}
    }
}

export default reducer