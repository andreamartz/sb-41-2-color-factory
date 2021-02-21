import React from "react";
import { useParams, useHistory } from "react-router-dom";
import ColorPage from "./ColorPage";

function FilterColorPage({ colors }) {
  const history = useHistory();
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
    history.push("/colors");
    return null;
  }
}

export default FilterColorPage;