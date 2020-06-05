import React, {Component} from "react"

import ControlOverlay from "./ControlOverlay.js"
import Slide from "./Slide.js" 

export default class Slider extends Component {
    onLeftArrowClick = () =>{
        console.log("left")
    } 
    onRightArrowClick = () =>{
        console.log("right")
    }
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
                <ControlOverlay 
                    onLeftArrowClick={this.onLeftArrowClick} 
                    onRightArrowClick={this.onRightArrowClick}
                    />
            </div>
        )
    }
}