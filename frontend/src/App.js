import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Register from "./components/register";
import Login from "./components/login";
import User from "./components/user";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/user" component={User} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
