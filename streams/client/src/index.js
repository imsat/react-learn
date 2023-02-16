import React from "react"
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from 'redux-thunk'

import App from './components/App'
import reduchers from "./reduchers";

const root = ReactDOM.createRoot(document.getElementById("root"));

const composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reduchers,
    composeEnhanchers(applyMiddleware(reduxThunk))
    );

root.render(
<Provider store={store}>
    <App />
</Provider>
);