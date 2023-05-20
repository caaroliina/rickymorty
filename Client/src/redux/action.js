import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-type"
import axios from "axios";

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try{
            await axios.post(endpoint, character).then(({ data }) => {
                return dispatch({
                    type: ADD_FAV,
                    payload: data,
                });
            });
        } catch (error){
            return {error: error.message}
        }
    };
};

export const removeFav = (id) => {
    try {
        const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
        return (dispatch) => {
            axios.delete(endpoint).then(({ data }) => {
            return dispatch({
                type: 'REMOVE_FAV',
                payload: data,
            });
            });
        };
    } catch (error) {
        return {error: error.message}
    }
};

export const filterCards = (gender) =>{
    return{
        type:  FILTER,
        payload: gender,
    }
}

export const orderCards = (order) =>{
    return {
        type: ORDER,
        payload: order,
    }
}
