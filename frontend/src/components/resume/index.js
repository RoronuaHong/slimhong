import React, { Component } from "react";
import {
    Grid,
    Row,
    Col
} from  "react-bootstrap";
import Profile from "./profile";

import "../../scss/resume.scss";

class MyResume extends Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={ 12 } md={ 3 }>
                        <Profile />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default MyResume;
