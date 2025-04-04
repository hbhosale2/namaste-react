import React from "react";
import ReactDOM from "react-dom/client";

// Create Single Element by using React.createElement()
// const heading = React.createElement("h1", {}, "Hello React from React app");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// Create Nested Elements using React.createElement()
const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "This is Hari Bhosale"),
        React.createElement("h2", {}, "I'm h2 tag")
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {}, "I'm h1 tag"), 
        React.createElement("h2", {}, "I'm h2 tag")
    ])
]);

console.log(parent); // Object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

