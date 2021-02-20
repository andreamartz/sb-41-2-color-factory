import React from "react";
import { Link } from "react-router-dom";

function ColorList({ colors }) {
  const links = colors.map(color => <li><Link to={`/colors/${color}`}>{color}</Link></li>);

  return (
    <ul>
      {links}
    </ul>
  )
}

export default ColorList;