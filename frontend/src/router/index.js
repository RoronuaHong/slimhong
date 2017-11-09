import { Router, Route, hashHistory } from "react-router";
import MyResume from "./component/resume/index";

render((
    <Router history={ hashHistory }>
        <Router path="/" component={ App }>
            <MyResume></MyResume>
        </Router>
    </Router>
), document.querySelector("#root"));