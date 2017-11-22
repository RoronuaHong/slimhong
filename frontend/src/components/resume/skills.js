import React, { Component } from "react";
import List from "./list";

class SkillList extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    render() {
        var arrs = [0, 1, 2, 3, 4];

        return (
            <ul className="skilllist">
                {
                    arrs.map((value, key) => {
                        return (
                            <li
                            key={key}
                            >
                                value
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default SkillList;
