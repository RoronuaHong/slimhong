import React, { Component } from "react";

class SkillList extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <ul className="skilllist">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Library</li>
                <li>Others</li>
            </ul>
        );
    }
}

export default SkillList;
