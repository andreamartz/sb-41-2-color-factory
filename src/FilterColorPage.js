import React from "react";
import { useParams } from "react-router-dom";
import ColorPage from "./ColorPage";

function FilterColorPage({ colors }) {
  const { color } = useParams();
  const [ colorToShow ] = colors.filter(c => c.name === color);
  console.log("COLORTOSHOW: ", colorToShow);
  
  if (colorToShow) {
    return (
      <>
        <ColorPage color={colorToShow}/>
      </>
    )
  } else {
    return (
      <>
        <p>That is not a thing</p>
      </>
    )
  }
}

export default FilterColorPage;