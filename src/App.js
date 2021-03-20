import HomePage from "./pages/homepage/home.component";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shoppage/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-out/sign-in-out.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useRef, useEffect, useContext } from "react";

import { CurrentUserContext } from "./providers/user/user.provider";

function App() {
    // const x = useContext(CurrentUserContext);
    // console.log("app.js", x);
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
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
                setCurrentUser();
            }
        });
        // eslint-disable-next-line
    }, []);
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
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
