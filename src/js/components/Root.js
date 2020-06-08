import React, { Component } from "react";
import ReactDOM from "react-dom";

import Slider from './Slider/Slider.js';
import scandiweb from '../../../src/js/components/Slider/images/scandiweb.png'

const styles = {
    container: {
        background: "rgb(235, 101, 13)",
        color: "white",
        fontSize: 50,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 400,
        margin: 50,
    }
}
class Root extends Component {
    render() {
        return (
            <div style={{ overflowY: "hidden" }}>
                <Slider
                    data={[
                        <div style={styles.container} >
                            Scandiweb.com
                        <img style={{
                                width: "fit-content",
                            }} src={scandiweb} />
                        </div>,
                        <div style={styles.container} >
                            Powered by
                            <img style={{
                                width: 200,
                                height: 100,
                            }} src={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"} />
                        </div>,
                        <div style={styles.container}>
                            Made by Rūdolfs Torsters
                        </div>,
                        <div style={styles.container}> 
                           Thank You!
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



