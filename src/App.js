import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/Login';
import Profile from './pages/Profile';
import Scenery from './pages/Scenery';
import ShoppingCart from './pages/ShoppingCart';
import SceneryWarriors from './pages/WarriorsOnnaMusha';
import SceneryMiddleAges from './pages/MiddleAges';
import SceneryInvertedDream from './pages/InvertedDream';
import SceneryRemoveBadMemory from './pages/RemoveBadMemory';
import Calendar from './pages/Calendar';
import Checkout from './components/Checkout';
import CartShopping from './components/CartShopping';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/scenery" component={ Scenery } />
        <Route exact path="/scenery/warriorsonnamusha" component={ SceneryWarriors } />
        <Route exact path="/scenery/middleages" component={ SceneryMiddleAges } />
        <Route exact path="/scenery/inverteddream" component={ SceneryInvertedDream } />
        <Route exact path="/scenery/removebadmemory" component={ SceneryRemoveBadMemory } />
        <Route exact path="/shoppingcart" component={ ShoppingCart } />
        <Route exact path="/signup" component={ SignUp } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/calendar" component={ Calendar } />
        <Route exact path="/cartshopping" component={ CartShopping } />
        <Route path="/Checkout" component={ Checkout } />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
