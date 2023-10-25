import React from "react";
import ReactDOM from "react-dom";



const parent = React.createElement("h1",{id:"parent"},"h1 form react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);