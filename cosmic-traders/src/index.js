import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function renderUserName(userName) {
//   return <li>{ userName }</li>;
// }

// const userNames = ['Sat', 'Sai', 'Rtr']

// const h1 = (
//   <>
//   <h1>Hello world</h1>
//   <ul>{userNames.map(userName => renderUserName(userName))}</ul>
//   </>
// )

// root.render(
//   h1
// );

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
