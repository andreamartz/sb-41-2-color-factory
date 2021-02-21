/**
 * ColorAdd displays a form that allows a user to add a color.
 * The color will then appear in the ColorList component.
 * Remember to use useHistory to redirect after form submission.
 */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function ColorAdd({ addColor }) {
  const INITIAL_STATE = { colorName: "black", colorValue: "#000000"};
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault(evt);
    const { colorName, colorValue } = formData;
    addColor(colorName, colorValue);
    setFormData(INITIAL_STATE);
    history.push("/colors");
    
  };
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(fData => ({...fData, [name]: value }));
  };

  return (
    <>
      <h1>Add a color</h1>
      <form className="ColorAdd" onSubmit={handleSubmit}>
        <label htmlFor="colorName">Name of color</label>
        <input 
          onChange={handleChange} 
          type="text" 
          id="colorName" 
          name="colorName" 
          placeholder="color name" 
          value={formData.colorName}
        />
        <label htmlFor="colorValue">Select a color value</label>
        <input 
          onChange={handleChange} 
          type="color" 
          id="colorValue" 
          name="colorValue" 
          placeholder="color hex code" 
          value={formData.colorValue}
        />
        <button>Add</button>
      </form>
      <button><Link to="/colors">Home</Link></button>
    </>
  )
}

export default ColorAdd;