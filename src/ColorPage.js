import React from "react";


function ColorPage( { color }) {
  console.log("COLOR: ", color);
  return (
    <p>The color is: {color}</p>
  )
}

export default ColorPage;