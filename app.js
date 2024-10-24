import React from "react";
import ReactDOM from "react-dom/client";

// Creating elements using react 
let heading = React.createElement("h1", {id: "heading"}, "Hello World from React");
let heading2 = React.createElement("h1", {id: "heading2"}, "Hello World from React 2");



let container = React.createElement("div", {id: "container"}, [heading, heading2]);

/**
 * Creating elements using JSX
 * JSX is a tool used to create elements in react and is built by facebook. It is separate from react and is not a part of react. 
 * These elements can be created using react too. But using JSX makes it easier to create elements than using react. 
 * It is assumed that JSX is like html inside javascript. But it is not. It is html like syntax extension to javascript. 
 * Basically JSX is a syntax extension to javascript. It is not a part of javascript. It is a syntax extension to javascript. 
 * Browsers do not understand JSX. So we need to transpile it to javascript. JSX syntaxes are transpiled to javascript 
 * by babel situated as dependency to parcel. Therefore, JSX code is transformed to javascript before it is executed by JS engine and rendered onto the browser.
 * 
 * Attributes to be added to JSX elements are written in camelCase. For example, class is written as className, tabIndex in JSX. 
 */
let jsxHeading = <h1 id="heading" className="head" tabIndex="1">Hello World from JSX122</h1>;

/**
 * React Components
 * There are two types of components in react. 
 * 1. Class based components - Old way of creating components. They are created using class keyword. They are used in react version 16 and below. 
 * 2. Functional components - New way of creating components. They are created using function keyword. They are used in react version 16 and above.
 * You should very good at functional components. There is a need to learn class based components as lot of legacy good might be written in class based components. 
 */

let title = 1000;

// React functional component: A function that returns JSX. 
// Component composition: A component can be used inside another component. Example: <Title /> inside <HeadingComponent />. 
// We can also write JS expressions inside JSX. Example: {title*3} within the curly braces. 
// Similarily you can put a react element inside a react component. Example: {headingElement} within the curly braces. 
// Different ways of calling a functional component: <Title />, <Title></Title>, <Title></Title> 
let HeadingComponent = () => (<div id="container">
    <Title />
    <Title></Title>
    {Title()}
    <h1 id="heading">Hello World from React Functional Component</h1>
    <h1 id="heading2">Hello World from React Functional Component 2 </h1>
    <h3 id="heading3">{title*3}</h3>
    {headingElement}
</div>)


let Title = () => (<div id="container">
    <h1 id="heading">React Lessons 1</h1>
    <h1 id="heading2">React Lessons 2</h1>
</div>)

// React element: A javascript object that represents a DOM element. See the difference between react element and react component. 
// React element does not use a function to create an element. React functional component uses a function to create an element. 

// You can use components inside react elements. Also you can use JS expressions inside react elements. 
let headingElement = (
<h1 id="heading">Hello World using React Element  <Title />  {title*9}</h1>
)
// This is how we render a functional component to the DOM. 
// root.render(<HeadingComponent />);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
