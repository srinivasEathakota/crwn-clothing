import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/Sign-in-and-Sign-UpPage/Sign-in-and-Sign-Up.componnet';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';

import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubScribeFromAuth = null

  componentDidMount() {
    this.unsubScribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })

  }

  componentWillUnmount() {
    this.unsubScribeFromAuth();
  }

  render() {
    return (
      <div>

        <Router>
          <Header currentUser = {this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUpPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;