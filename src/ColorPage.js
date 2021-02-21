import React from "react";
import { Link } from "react-router-dom";
import "./ColorPage.css";


function ColorPage( { color }) {
  console.log("COLOR: ", color);
  return (
    <div className="ColorPage" style={{ backgroundColor: color.value }}>
      <h1>This is {color.name}!</h1>
      <Link to="/colors">Home</Link>
    </div>
  )
}

export default ColorPage;