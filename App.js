import React from 'react';
import ReactDOM from 'react-dom';



const heading = React.createElement('h1' , {id:"heading"}, "Hello, world!");
const react = ReactDOM.createRoot(document.getElementById('react'));
react.render(heading);
