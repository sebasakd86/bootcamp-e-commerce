import HomePage from "./pages/homepage/home.component";
import './App.css'

import { Route, Switch } from 'react-router-dom';
import ShopPage from "./pages/shoppage/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-out/sign-in-out.component";

function App() {
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
