import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ColorList from "./ColorList";
import FilterColorPage from "./FilterColorPage";
import ColorAdd from "./ColorAdd";

function Routes() {
  const INITIAL_COLORS = [
    {name: "red", value: "#ff0000"},
    {name: "green", value: "#00ff00"},
    {name: "blue", value: "#0000ff"}
  ];
  const [colors, setColors] = useState(INITIAL_COLORS);

  function addColor(colorName, colorValue) {
    const color = { name: colorName, value: colorValue };
    console.log("new color from addColor: ", color);
    setColors([color, ...colors]);
    console.log("colors from addColor: ", colors);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors/new"><ColorAdd addColor={addColor}/></Route>
        <Route exact path="/colors/:color"><FilterColorPage colors={colors}/></Route>
        <Route exact path="/colors"><ColorList colors={colors}/></Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;