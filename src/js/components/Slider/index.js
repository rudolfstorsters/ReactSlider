import React, {Component} from "react"

import Slide from "./Slide.js" 

export default class Slider extends Component {
    render(){
        return (
            <div style={{
                display: "flex",
                flexDirection:"row",
                width: "fit-content"
            }}>
                <Slide>
                    My Slider component. YAY!
                </Slide>
                <Slide>
                  Another Slider component. YAY!
                </Slide>
            </div>
        )
    }
}