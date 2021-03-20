import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//To access the upper state

import { BrowserRouter } from "react-router-dom";
import CartProvider from "./providers/cart/cart.provider";
import { CurrentUserProvider } from "./providers/user/user.provider";
import { CollectionProvider } from "./providers/collection/collection.provider";

ReactDOM.render(
    <CartProvider>
        <CurrentUserProvider>
            <CollectionProvider>
                <React.StrictMode>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </React.StrictMode>
            </CollectionProvider>
        </CurrentUserProvider>
    </CartProvider>,
    document.getElementById("root")
);
