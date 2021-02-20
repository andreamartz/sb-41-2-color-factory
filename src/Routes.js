import React from "react";
import { Switch, Route } from "react-router-dom";
import ColorList from "./ColorList";
import FilterColorPage from "./FilterColorPage";
import ColorAdd from "./ColorAdd";

function Routes({ colors }) {
  return (
    <Switch>
      <Route exact path="/colors/new"><ColorAdd /></Route>
      <Route exact path="/colors/:color"><FilterColorPage colors={colors}/></Route>
      <Route exact path="/colors"><ColorList colors={colors}/></Route>
    </Switch>
  )
}

export default Routes;