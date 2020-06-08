import React, { Component } from "react"

import ControlOverlay from "./ControlOverlay.js"
import Slide from "./Slide.js"
import Indicator from "./Indicator.js"

export default class Slider extends Component {
    state = {
        slideIndex: 0
    }
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
    renderIndicator = (v, index) => {
        const isActive = this.state.slideIndex == index
        return (
            <Indicator
                key={index}
                isActive={isActive}
                onIndicatorClick={this.onIndicatorClick(index)}
            >
            </Indicator>
        )
    }
    onIndicatorClick = (slideIndex) => () => {
        this.goToSlide(slideIndex);
    }
    onScroll = () => {
        const newIndex = Math.round(this.scrollView.scrollLeft / window.innerWidth);
        if (newIndex !== this.state.slideIndex) {
            this.setState({
                slideIndex: newIndex
            })
        }
    }
    render() {
        return (
            <>
                <div style={styles.root}
                >
                    <div style={styles.scrollContainer}
                        onScroll={this.onScroll}
                        ref={(el) => { this.scrollView = el }}
                    >
                        <div style={styles.content}
                        >
                            {this.props.data.map(this.renderItem)}
                        </div>
                    </div>
                </div>
                <div style={styles.indicator}>
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
const styles = {
    root: {
        position: "relative",
        width: "100vw",
    },
    scrollContainer: {
        overflow: "scroll",
        overscrollBehaviorX: "none",
        scrollBehavior: "smooth",
        height: 500,
        scrollSnapType: "x mandatory",
        scrollSnapDestination: "0 0",
        scrollSnapPointsX: "repeat(100vw)"
    },
    content: {
        display: "flex",
        flexDirection: "row",
        width: "fit-content",
    },
    indicator:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
}
}
