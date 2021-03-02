import HomePage from "./pages/homepage/home.component";
import './App.css'

import { Route, Switch } from 'react-router-dom';
import ShopPage from "./pages/shoppage/shop.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>    
  );
}

export default App;
