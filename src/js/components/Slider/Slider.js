import React, { Component } from "react"

import ControlOverlay from "./ControlOverlay.js"
import Slide from "./Slide.js"

export default class Slider extends Component {
    state = {
        slideIndex: 0
    }
    goToSlide = (slideIndex) => {
        if (this.scrollView) {
            this.scrollView.scroll(window.innerWidth * slideIndex, 0)
            this.setState({
                slideIndex: slideIndex
            })
        }
    }
    onLeftArrowClick = () => {
        this.goToSlide(this.state.slideIndex - 1)
    }
    onRightArrowClick = () => {
        this.goToSlide(this.state.slideIndex + 1)

    }
    renderItem = (item, index) => {
        return (
            <Slide key={index}>
                {item}
            </Slide>
        )
    }
    render() {
        return (
            <>
                <div style={{
                    position: "relative",
                    width: "100vw",
                }}
                >
                    <div style={{
                        overflow: "scroll",
                        scrollBehavior: "smooth",
                        height: 500
                    }}
                        ref={(el) => { this.scrollView = el }}
                    >
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "fit-content",
                        }}

                        >
                            {this.props.data.map(this.renderItem)}
                        </div>
                    </div>

                </div>
                <ControlOverlay
                    onLeftArrowClick={this.onLeftArrowClick}
                    onRightArrowClick={this.onRightArrowClick}
                />
            </>
        )
    }
}