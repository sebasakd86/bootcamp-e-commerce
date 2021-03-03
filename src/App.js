import HomePage from "./pages/homepage/home.component";
import './App.css'

import { Route, Switch } from 'react-router-dom';
import ShopPage from "./pages/shoppage/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-out/sign-in-out.component";
import { auth } from './firebase/firebase.utils'
import { useRef, useEffect, useState } from "react";

function App() {
  const [estado, setEstado] = useState({currentUser: null});

  let unsubscribeOnUnmount = useRef(null);
  useEffect(() => {
    unsubscribeOnUnmount.current = auth.onAuthStateChanged(user => {
      console.log(user);
      setEstado({currentUser:user})
    });
    // return unsubscribeOnUnmount.current()
  }, []);  
  console.log(estado)
  return (    
    <div>
      <Header currentUser={estado.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>    
  );
}

export default App;
