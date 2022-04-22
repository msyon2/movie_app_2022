import React from "react";
import {HashRouter, Route} from "react-router-dom";
//componentm를 하나이상 불러와야할때 {}로 감싸주어야함

import Home from "./routes/Home"
import About from "./routes/About"
import Detail from "./routes/Detail"
import Navigation from "./components/Navigation";


import "./App.css";

//동적 data uses class & state
function App() {
  return(
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  )
}

export default App;
