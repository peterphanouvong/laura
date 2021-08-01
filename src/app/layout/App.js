import React from "react";
import { Switch, Route } from "react-router-dom";

import { Faces } from "../pages/Faces";
import { Gallery } from "../pages/Gallery/Gallery";
import { Home } from "../pages/Home/Home";
import { Navbar } from "./Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/faces" component={Faces} />
        <Route exact path="/gallery" component={Gallery} />
      </Switch>
    </>
  );
}

export default App;
