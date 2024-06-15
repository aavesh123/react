import React from "react";
import ReactDOM from "react-dom/client";

{/* <div id="parent">
    <div id="child">
        <h1></h1>
        <h2></h2>
    </div>
    <div id="child2">
        <h1></h1>
        <h2></h2>
    </div>
</div> */}

// const parent = React.createElement('div', { id: 'parent' }, [
//     React.createElement('div', { id: 'child1' }, [
//         React.createElement('h1', {}, "'I'm an h1 tag'"),
//         React.createElement('h1', {}, "'I'm an h2 tag'")
//     ]),
//     React.createElement('div', { id: 'child1' }, [
//         React.createElement('h1', {}, "'I'm an h1 tag'"),
//         React.createElement('h1', {}, "'I'm an h2 tag'")
//     ])
// ]);



// const heading = React.createElement('h1', { id: "heading" }, 'Hello World from react!');
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// React Component

const TitleComponent = () => (
    <h1 className="head" tabIndex="5">Namaste React using JSX</h1>
);

// {} these bracket can execute any javascript code
// {} jsx prevents cross site scripting
const HeadingComponent = () => (
    <div id="container">
        {<TitleComponent />}
        {<TitleComponent></TitleComponent>}
        {TitleComponent()}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent />)