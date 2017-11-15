import React, { Component } from "react";
import {
    Grid,
    Row,
    Col
} from "react-bootstrap";
import Profile from "./profile";
import Skills from "./skills";

import "../../scss/resume";

class Resume extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={ 12 } md={ 6 }>
                        <Profile />
                    </Col>
                    <Col xs={ 6 } md={ 6 }>
                        <Skills />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Resume;