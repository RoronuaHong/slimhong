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
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this.props.getData);
        fetch("http://192.168.0.107:7713/v1/user", {
            method: "GET",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8;"
            },
            mode: "cors"
        }).then((data) => {
            data.json().then((datas) => {
                console.log(datas[0]);
            });
        });
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={ 6 } md={ 6 }>
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