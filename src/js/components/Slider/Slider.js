import React, { Component } from "react"

import ControlOverlay from "./ControlOverlay.js"
import Slide from "./Slide.js"
import Indicator from "./Indicator.js"

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
    onIndicatorClick = (indicatorIndex) => {
        this.goToSlide(indicatorIndex)
    }
    renderItem = (item, index) => {
        return (
            <Slide key={index}>
                {item}
            </Slide>
        )
    }
    renderIndicator = (v, index) => {
        const isActive = this.state.slideIndex == index
        return (
            <Indicator
                key={index}
                isActive={isActive}
            >
            </Indicator>
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
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center"
                }}>
                    {this.props.data.map(this.renderIndicator)}
                </div>
                <ControlOverlay
                    isLeftArrowVisible={this.state.slideIndex != 0}
                    isRightArrowVisible={this.state.slideIndex != this.props.data.length - 1}
                    onLeftArrowClick={this.onLeftArrowClick}
                    onRightArrowClick={this.onRightArrowClick}
                />
            </>
        )
    }
}
