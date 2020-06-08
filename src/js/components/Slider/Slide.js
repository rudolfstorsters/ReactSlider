import React, {Component} from "react"

export default class Slide extends Component {
    render(){
        return (
            <div style={{
                width:"100vw",
                height: 500,
                background: "rgb(235, 101, 13)"
            }}>
                {this.props.children}
            </div>
        )
    }
}