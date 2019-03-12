import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utilities/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

//import logo from "./logo.svg";
import "./App.css";

// Global Components / Pages imports
//TODO export to an include directive or mixin

// Partials
import Nav from "./components/partials/Nav";
import Footer from "./components/partials/Footer";

// Auth
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

// HomePage
import HomePage from "./components/Pages/HomePage";

//SuperUser
import Dashboard from "./components/Pages/Dashboard";

//check nd set jwt token
if (localStorage.jwtToken) {
  //TODO set to secure cookie
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Nav />
            <div className="">
              <Route exact path="/" component={HomePage} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
            </div>

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
