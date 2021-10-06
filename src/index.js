import React, { createFactory } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

let initial = [
  { id: 0, name: "예쁜 신발", quan: 2 },
  { id: 1, name: "귀여운 신발", quan: 3 },
];

//수정하는 방법을 정해서 코드 짜기

let reducer = (state = initial, act) => {
  if (act.type === "Add") {
    let copy = [...state];
    copy[0].quan++;

    return copy;
  } else if (act.type === "Minus") {
    let copy = [...state];
    copy[0].quan--;
    return copy;
  } else {
    return state;
  }
};

let store = createStore(combineReducers({ reducer }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
