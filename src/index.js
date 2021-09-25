//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
// changes
import React from "react";
import ReactDom from "react-dom";

const customStyle = {
  color: "red",
  border: "10px 20px",
  fontSize: "20px"
};

ReactDom.render(
  <div>
    <h1 style={customStyle}>Hello</h1>
  </div>,
  document.getElementById("root")
);
