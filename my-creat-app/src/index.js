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
import Counter from './private/componentExample/useState.js';
import RaccConditionCounter from './private/componentExample/raceCondition.js';
import ButtonComponent from './private/componentExample/sendParamentEvent.js';
import MySelect from './private/componentExample/CombineSelect.js';
import ExampleComponent from './private/componentExample/keyExample.js';
import Example from './private/componentExample/useEffectExample.js';
// import DataFetching from './private/componentExample/useEffectExample2.js';
import EventListener from './private/componentExample/useEffectExample3.js';
import GlobalProvider from './private/hookExample/useContext.js';
import ChildComponent from './private/hookExample/useContext2.js';

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
    <Counter />
    <RaccConditionCounter />
    <ButtonComponent />
    <MySelect />
    <ExampleComponent />
    <Example />
    <EventListener />
    <GlobalProvider>
      <ChildComponent />
    </GlobalProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
