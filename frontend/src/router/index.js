import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { Provider } from "react-redux";

import NoMatch from "../components/PageNotFound";
import App from "../components/App";
import Resume from "../components/resume/index";

/*判断浏览器是否支持HTML5浏览器*/
const supportsHistory = "pushState" in window.location;

/*设置基础的url路径*/

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
                <Route exact path="/resume" component={ Resume } />
                <Redirect from="/" to="/index" />
                <Route component={ NoMatch } />
            </Switch>
        </div>
    </Router>
);

export default myRouter;