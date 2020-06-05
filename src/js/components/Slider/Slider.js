import React, { Component } from "react"

import ControlOverlay from "./ControlOverlay.js"
import Slide from "./Slide.js"

export default class Slider extends Component {
    state = {
        slideIndex: 0

    }
   
    lastScrollPosition = 0
    goToSlide = (slideIndex) => {
        if (this.scrollView) {
            this.lastScrollPosition = window.innerWidth * slideIndex
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
    
    
    onTouchStart = () => {
        this.lastScrollPosition = this.scrollView.scrollLeft
    }
    onTouchEnd = () => {
        setTimeout(() => {
            if (this.lastScrollPosition > this.scrollView.scrollLeft) {
                this.goToSlide(this.state.slideIndex - 1)
            } else {
                this.goToSlide(this.state.slideIndex + 1)
            }
        }, 200);
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
                        overscrollBehaviorX: "none",
                        scrollBehavior: "smooth",
                        height: 500
                    }}
                        onTouchStart={this.onTouchStart}
                        onTouchEnd={this.onTouchEnd}
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