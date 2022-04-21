import React from "react";
import axios from "axios";
import Home from "./routes/Home"
import {HashRouter, Route} from "react-router-dom";
//componentm를 하나이상 불러와야할때 {}로 감싸주어야함
import About from "./routes/About"
import Navigation from "./components/Navigation";

import "./App.css";

//동적 data uses class & state
function App() {
  return(
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  )
}

export default App;
