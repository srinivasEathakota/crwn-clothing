import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/Sign-in-and-Sign-UpPage/Sign-in-and-Sign-Up.componnet';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';


function App() {
  return (
    <div>

      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;