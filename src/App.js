import HomePage from "./pages/homepage/home.component";
import './App.css'

import { Route, Switch } from 'react-router-dom';
import ShopPage from "./pages/shoppage/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-out/sign-in-out.component";
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { useRef, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { setCurrentUser } from './redux/user/userDucks';


function App() {
  const dispatch = useDispatch();
  let unsubscribeOnUnmount = useRef(null);
  useEffect(() => {
    unsubscribeOnUnmount.current = auth.onAuthStateChanged(async user => {
      if(user){
        const userRef = await createUserProfileDocument(user, {});
        userRef.onSnapshot(snapshot =>{
          // console.log('APP','About to dispatch, setCurrentUser');
          dispatch(setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          }))
        });
      }
      else{
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
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
