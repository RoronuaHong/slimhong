import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import "isomorphic-fetch";

import NoMatch from "../components/PageNotFound";
import App from "../components/App";
import Resume from "../components/resume/index";

/*判断浏览器是否支持HTML5浏览器*/
const supportsHistory = "pushState" in window.location;

/*设置基础的url路径*/

/*定义API的接口*/
const api = "http://192.168.0.107:7713/";
const version = "v1/";

/*配置路由*/
const router = [

];

const myRouter = ({ store }) => (
    <Router
        forceRefresh={ !supportsHistory }
        keyLength={ 12 }
    >
        <div>
            <Switch>
                <Route exact path="/index" component={ App } />
                <Route exact path="/resume/:user" component={ Resume } />
                <Redirect from="/" to="/index" />
                <Route component={ NoMatch } />
            </Switch>
        </div>
    </Router>
);

export default myRouter;