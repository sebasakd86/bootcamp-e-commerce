import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import userReducer from "./ducks/userDucks";
import cartReducer from "./ducks/cartDucks";

import { persistStore, persistReducer } from "redux-persist"; //to cache our store value
import storage from 'redux-persist/lib/storage' //use local storage as default
import directoryReducer from "./ducks/directoryDucks";
import shopReducer from "./ducks/shopDucks";
// import sessionStorage from 'redux-persist/lib/storage' //its somewhere else

const persistConfig = {
    key: 'root', //where we want to start persisting
    storage,
    whitelist: ['cart'] //reducers we want to store
}

//Por cada duck, se agrega al reducer
//Deberia ser lo unico que cambia del store
// const rootReducer = combineReducers({user: userReducer, productos: productReducer})
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});
// create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

//Para habilitar Redux Dev Tools
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

const middlewares = [];

if (process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
    middlewares.push(thunk);
}

const store = createStore(
    //rootReducer,
    // pass the persisted reducer instead of rootReducer to createStore
    persistedReducer, 
    composeEnhancers(applyMiddleware(...middlewares))
);
// used to create the persisted store, persistor will be used in the next step
const persistor = persistStore(store);

export { store, persistor };