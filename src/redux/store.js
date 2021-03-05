import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import userReducer from './ducks/userDucks';
import cartReducer from './ducks/cartDucks'

//Por cada duck, se agrega al reducer
//Deberia ser lo unico que cambia del store
// const rootReducer = combineReducers({user: userReducer, productos: productReducer})
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})
//Para habilitar Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

const middlewares = [thunk, logger];

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
    return store;
}
