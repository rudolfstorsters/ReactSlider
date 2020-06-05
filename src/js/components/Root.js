import React, { Component } from "react";
import ReactDOM from "react-dom";

import Slider from './Slider/Slider.js';

class Root extends Component {
    render() {
        return (
            <div style={{ overflowY: "hidden" }}>
                <Slider
                    data={[
                        <div>
                            My first slide
                        </div>,
                        <div>
                            My second slide
                        </div>,
                        <div>
                            My third slide
                        </div>,
                    ]}
                />
            </div>
        );
    }

}
export default Root;
const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Root />, wrapper) : false;

