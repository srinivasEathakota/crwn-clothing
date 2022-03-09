import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/Sign-in-and-Sign-UpPage/Sign-in-and-Sign-Up.componnet';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubScribeFromAuth = null

  componentDidMount() {
    this.unsubScribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //is userAuth is not NUll, Means when the user signs in ..
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({ /// set the currentUser to signed user
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            },
          },
            () => {
              console.log(this.state)

            })
        });

      }
      // When user Signs out , we need to update curren user state

      this.setState({ currentUser: userAuth })

    });

  }

  componentWillUnmount() {
    this.unsubScribeFromAuth();
  }

  render() {
    return (
      <div>

        <Router>
          <Header currentUser={this.state.currentUser} />
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