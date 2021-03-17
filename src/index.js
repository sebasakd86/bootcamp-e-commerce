import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//To access the upper state
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import { BrowserRouter } from "react-router-dom";
import CartProvider from "./providers/cart/cart.provider";

ReactDOM.render(
    <Provider store={store}>
        <CartProvider>
            <React.StrictMode>
                <BrowserRouter>
                    <PersistGate loading={null} persistor={persistor}>
                        <App />
                    </PersistGate>
                </BrowserRouter>
            </React.StrictMode>
        </CartProvider>
    </Provider>,
    document.getElementById("root")
);
