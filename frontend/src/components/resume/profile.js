import React, { classname } from "react";
import ReactDOM from "react-dom";

/*引用头像更改*/
class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            hover: false,
            blogName: "SlimHong's Blog"
        }

        this.autoRotate = this.autoRotate.bind(this);
        this.stopRotate = this.stopRotate.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    //自动旋转
    autoRotate() {
        this.timer = setInterval(() => {
            this.setState({
                hover: !this.state.hover
            })
        }, 3000);
    }

    //停止旋转
    stopRotate() {
        clearInterval(this.timer);
    }

    componentDidMount() {
        this.autoRotate();
    }

    onMouseEnter() {
        this.stopRotate();
    }

    onMouseLeave() {
        this.autoRotate();
    }

    render() {
        const rotateStyle = {
            transform: this.state.hover ? "rotateY(0deg)" : "rotateY(540deg)"
        };

        const unrotateStyle = {
            transform: this.state.hover ? "rotateY(540deg)" : "rotateY(0deg)"
        }

        return (
            <div
                className="profilebox"
                onMouseEnter={ this.onMouseEnter }
                onMouseLeave={ this.onMouseLeave }
            >
                <div
                    className="slimimg"
                    style={ rotateStyle }
                >
                    <img src="../../images/slims.png" alt=""/>
                </div>
                <div
                    className="enterblog"
                    style={ unrotateStyle }
                >
                    { this.state.blogName }
                </div>
            </div>
        );
    }
};

export default Profile;