import React from "react";
import Renderpagesecond from "./Renderpagesecond";
import Renderpagethird from "./Renderpagethird";
import Renderpageforth from "./Renderpageforth";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function Renderpagefirst() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Renderpagesecond} />
        <Route path="/2" component={Renderpagethird} />
        <Route path="/3" component={Renderpageforth} />
      </Switch>
    </BrowserRouter>
  );
}
export default Renderpagefirst;
