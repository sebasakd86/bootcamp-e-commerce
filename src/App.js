import HomePage from "./pages/homepage/home.component";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shoppage/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-out/sign-in-out.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useRef, useEffect, useState } from "react";

import CurrentUserContext from "./context/currentUser/current-user.context";
import { CollectionProvider } from "./providers/collection/collection.provider";

function App() {
    const [currentUser, setCurrentUser] = useState({});
    let unsubscribeOnUnmount = useRef(null);
    useEffect(() => {
        unsubscribeOnUnmount.current = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userRef = await createUserProfileDocument(user, {});
                userRef.onSnapshot((snapshot) => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data(),
                    });
                });
            } else {
                setCurrentUser({});
            }
        });
    }, []);
    return (
        <div>
            <CurrentUserContext.Provider value={currentUser}>
                <Header />
            </CurrentUserContext.Provider>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <CollectionProvider>
                    <Route path='/shop' component={ShopPage} />
                </CollectionProvider>
                <Route exact path='/checkout' component={CheckoutPage} />
                <Route
                    exact
                    path='/signin'
                    render={() =>
                        currentUser ? (
                            <Redirect to='/' />
                        ) : (
                            <SignInAndSignUpPage />
                        )
                    }
                />
            </Switch>
        </div>
    );
}

export default App;
