import React from 'react';
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


function App() {
  return (
    <Router>
      <div className="App">
      <Header></Header>
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
  );
}

export default App;
