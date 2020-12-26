import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import Header from './Components/Header';
import Home from './Pages/Home'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
            <Route path="/checkout">
                <Header />
            <Checkout />
          </Route>
            <Route path="/login">
              <Login />
            </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
