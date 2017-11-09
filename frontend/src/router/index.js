import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    browserHistory
} from "react-router-dom";

import App from "../components/app";
import Resume from "../components/resume/index";

/*设置基础的url路径*/

const myRouter = () => (
    <Router history = { browserHistory }>
        <div>
            <Route exact path="/" component={ App } />
            <Route exact path="/resume" component={Resume} />
            <Route path="/about" component={ About } />
        </div>
    </Router>
);


const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

export default myRouter;