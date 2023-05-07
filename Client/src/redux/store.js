import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// esta linea es para conectar la pp con la extension de REDUX DEVTOOLS del navegador

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
    //esta linea sirve para hacer peticiones a un api
)

export default store;