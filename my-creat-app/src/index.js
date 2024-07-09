import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {MyComponent, Greeting, MyButton, ConditionalRendering} from './private/jsx.js'
import MyClassComponent from './private/componentExample/componentClassExample.js';
import reportWebVitals from './reportWebVitals';
import ParentComponent from './private/componentExample/componentParentPropsExample.js';
import MyButtonProps from './private/componentExample/buttonParent.js';
import BlogApp from './page/BlogApp.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <MyComponent />
    <Greeting name="Allen" />
    <MyButton />
    <ConditionalRendering isLoggedIn="true"/>
    <MyClassComponent />
    <ParentComponent />
    <MyButtonProps />
    <BlogApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
