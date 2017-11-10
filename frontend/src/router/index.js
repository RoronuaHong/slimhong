import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    browserHistory
} from "react-router-dom";

import NoMatch from "../components/404";
import App from "../components/app";
import Resume from "../components/resume/index";

/*判断浏览器是否支持HTML5浏览器*/
const supportsHistory = "pushState" in window.location;

/*设置基础的url路径*/

/*配置路由*/
const router = [

];

const myRouter = () => (
    <Router
        history = { browserHistory }
        forceRefresh={ !supportsHistory }
        keyLength={ 12 }
    >
        <div>
            <Switch>
                <Route exact path="/" component={ App } />
                <Route exact path="/resume" component={ Resume } />
                <Route component={ NoMatch } />
            </Switch>
        </div>
    </Router>
);

export default myRouter;