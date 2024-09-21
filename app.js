import React from "react";
import ReactDOM from "react-dom/client";
//#React Element----------------------------------------------------------------
//JSX - HTML like - XML like syntax
//JSX - (transpiled beforev it reaches the JS) - PARCEL - BABEL

//-------------------------------------------------------------------------------
const title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React👀 Using JSX😎
  </h1>
);

//#React Functional  Component

const data = 1000;

const HeadingComponent = () => (
  <div id="container">
    {title()}
    <h2>{console.log("kya bolti public")} </h2>
    <h1 className="heading">Namaste React Functional Component👌</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
