import React from "react";
import ReactDOM from "react-dom";
import MyRouter from "./router/index";
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

if(window.location.port != 7777) {
    const registration = runtime.register();
}

ReactDOM.render(
    <MyRouter />,
    document.querySelector("#root")
);