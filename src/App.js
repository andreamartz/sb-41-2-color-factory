import React from "react";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  const colors = ["green", "blue", "purple"];
  return (
    <div className="App">
      <BrowserRouter>
        <Routes colors={colors}/>      
      </BrowserRouter>
    </div>
  );
}

export default App;
