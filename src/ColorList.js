import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

function ColorList({ colors }) {
  const links = colors.map(color => <li className="ColorList-li"><Link to={`/colors/${color.name}`}>{color.name}</Link></li>);
  return (
    <div className="ColorList">
      <h1>Welcome to the Color Factory!</h1>  
      <Link to="/colors/new"><button>Add a color</button></Link>
      <p>Please select a color.</p>
      <ul className="ColorList-ul" id="ColorList-ul">
        {links}
      </ul>
    </div>
  );
}

export default ColorList;