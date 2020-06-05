import React, { Component } from "react";
import ReactDOM from "react-dom";

class Root extends Component {
    constructor() {
        super();

        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;
        this.setState(() => {
            return {
                value
            };
        }
        );
    }
    render() {
        return (
            <div>
                Hello React!
                <form>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }

}
export default Root;
const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Root />, wrapper) : false;

