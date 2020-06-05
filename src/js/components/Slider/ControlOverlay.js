import React, { Component } from "react";

import arrow from "./images/arrow.png"

const ARROW_SIZE = 50;

export default class ControlOverlay extends Component {
    render() {
        return (
            <div>
                <div>
                    <img style={styles.leftArrowImg} src={arrow} />
                    <img style={styles.rightArrowImg} src={arrow} />
                </div>
            </div>
        )
    }
}

const styles = {
    leftArrowImg: {
        width: ARROW_SIZE,
        height: ARROW_SIZE,
        top: 250 - (ARROW_SIZE / 2),
        left: 20,
        position: "absolute",
        cursor: "pointer"
    },
    rightArrowImg: {
        width: ARROW_SIZE,
        height: ARROW_SIZE,
        top: 250 - (ARROW_SIZE / 2),
        right: 20,
        position: "absolute",
        cursor: "pointer",
        transform: "rotateY(180deg)"
    }
}
