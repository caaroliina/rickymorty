import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-type"

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state = initialState, { type, payload })=>{
    switch (type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload],
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(character => character.id !== payload)
            }
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
                ? allfavsort((a, b)=> a.id - b.id) 
                : allfav.sort((a, b)=> b.id - a.id),
            }
        default:
            return {...state}
    }
}

export default reducer