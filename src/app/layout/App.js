import React from "react";
import { Switch, Route } from "react-router-dom";

import { Faces } from "../pages/Faces";
import { Home } from "../pages/Home/Home";
import { Navbar } from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/faces" component={Faces} />
      </Switch>
    </div>
  );
}

export default App;
