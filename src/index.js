
import React from "react";
import { ReactDOM } from "react";

// Create a new component. this component should produce
// some HTML
const App = function () {
    return <div>Hi!</div>;
}

// Take this component's generated HTML and put it 
// on the page (in the DOM)

ReactDOM.render(<App/>)   