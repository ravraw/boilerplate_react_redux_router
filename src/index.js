import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

//
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//

const rootReducer = combineReducers();
const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);
//

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
