import React, {Component} from "react"

import ControlOverlay from "./ControlOverlay.js"
import Slide from "./Slide.js" 

export default class Slider extends Component {
    renderItem = (item, index) => {
        return(
         <Slide key={index}>
            {item}
         </Slide>
        )
    }
    render(){
        return (
            <div style ={{
                overflow: "hidden",
                 position:"relative", 
                 width: "100vw", 
                 height: 500
            }}>
                <div style={{
                    display: "flex",
                    flexDirection:"row",
                    width: "fit-content" 
                }}>
                    {this.props.data.map(this.renderItem)}
                    
                </div>
                <ControlOverlay/>
            </div>
        )
    }
}