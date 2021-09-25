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

ReactDom.render(
  <div>
    <h1 className="heading">Hello</h1>
    <img
      className="food-image"
      src="https://www.rd.com/wp-content/uploads/2021/04/GettyImages-476744133-scaled.jpg?resize=768,511"
    ></img>
    <img
      className="food-image"
      src="https://www.investopedia.com/thmb/lqOcGlE7PI6vLMzhn5EDdO0HvYk=/1337x1003/smart/filters:no_upscale()/GettyImages-1054017850-7ef42af7b8044d7a86cfb2bff8641e1d.jpg"
    ></img>
    <img
      className="food-image"
      src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9uZXl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    ></img>
  </div>,
  document.getElementById("root")
);
