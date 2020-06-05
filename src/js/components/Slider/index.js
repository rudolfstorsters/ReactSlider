import React, {Component} from "react"

import ControlOverlay from "./ControlOverlay.js"
import Slide from "./Slide.js" 

export default class Slider extends Component {
    render(){
        return (
            <div style ={{
                overflow: "hidden",
                 position:"relative", 
                 width: "100vw", 
                 height: 500
            }}>
                <ControlOverlay/>
                <div style={{
                    display: "flex",
                    flexDirection:"row",
                    width: "fit-content" 
                }}>
                    <Slide>My Slider component. YAY!</Slide>
                    <Slide>Another Slider component. YAY!</Slide>
                </div>
            </div>
        )
    }
}