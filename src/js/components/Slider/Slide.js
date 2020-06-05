import React, {Component} from "react"

export default class Slide extends Component {
    render(){
        return (
            <div style={{
                width:"100vw",
                height: 500,
                background: "lightgray"
            }}>
                {this.props.children}
            </div>
        )
    }
}