import React from "react";
import ReactDOM from "react-dom";


const heading = React.createElement("h1",{ id : "title" }, "foodieCat");

const heading2 = React.createElement("h2",{ id : "title" }, "foodieCat2");

const container = React.createElement("div" ,{ id : "container" , hello : "world" } , [heading , heading2] );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
