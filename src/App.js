import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase-config"
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Review from './component/Review/Review';
import Notfound from './component/Notfound/Notfound';
import ProductDetail from './component/ProductDetail/ProductDetail';
import { createContext } from 'react';
export const Usercontext = createContext();
firebase.initializeApp(firebaseConfig);

function App() {
  const provider = new firebase.auth.GoogleAuthProvider();

  

  const [signInUser, setSingnInUser] = useState({});

  const handleGoogleSignIn = () => {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      const {displayName, email} = result.user;

      const user = {
        name: displayName,
        email: email
      }
      setSingnInUser(user);
    }).catch(function(error) {
      var errorMessage = error.message;
      alert(errorMessage)      
    });
  }

  return (
    <Usercontext.Provider value={[signInUser, setSingnInUser]}>
    <Router>
      <div className="App">
      <Header></Header>
      <button onClick={handleGoogleSignIn}>Sign in</button>
      <Switch>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <Route path="/manage">
          <h1>Comming soooon...!</h1>
        </Route>
        <Route exact path="/">
          <Shop></Shop>
        </Route>
        <Route path="/product/:productKey">
          <ProductDetail></ProductDetail>
        </Route>
        <Route path="*">
          <Notfound></Notfound>
        </Route>
      </Switch>
      </div>
    </Router>

    </Usercontext.Provider>
  );
}

export default App;
