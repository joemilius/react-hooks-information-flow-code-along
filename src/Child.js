import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";



function Child(props) {

  function handleClick(){
    const newColor = getRandomColor()
    props.changeColor(newColor)
  }

  return (
  <div 
  className="child" 
  style={{ backgroundColor: props.color }} 
  onClick={handleClick} />
  )
}

export default Child;
