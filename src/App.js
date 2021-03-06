import HomePage from "./pages/homepage/home.component";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/shoppage/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-out/sign-in-out.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import {
    auth,
    createUserProfileDocument,
    addCollectionAndDocuments,
} from "./firebase/firebase.utils";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, selectCurrentUser } from "./redux/ducks/userDucks";
import { selectCollectionsForPreview } from "./redux/ducks/shopDucks";

function App() {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const collectionsArray = useSelector(selectCollectionsForPreview);

    let unsubscribeOnUnmount = useRef(null);
    useEffect(() => {
        unsubscribeOnUnmount.current = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userRef = await createUserProfileDocument(user, {});
                userRef.onSnapshot((snapshot) => {
                    // console.log('APP','About to dispatch, setCurrentUser');
                    dispatch(
                        setCurrentUser({
                            id: snapshot.id,
                            ...snapshot.data(),
                        })
                    );
                    if (collectionsArray.length === -100) {
                        //so it wont execute and i wont delete the data seed
                        addCollectionAndDocuments(
                            "collections",
                            collectionsArray.map(({ title, items }) => ({
                                title,
                                items,
                            }))
                        );
                    }
                });
            } else {
                dispatch(setCurrentUser());
            }
        });
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
