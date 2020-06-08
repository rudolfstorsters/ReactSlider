import React, { Component } from "react";

export default class Indicator extends Component {
  onIndicatorClick = () => {
    this.props.onIndicatorClick()
  }
  render() {
    return (
      <div >
        <div style={{
          width: 30,
          top: "50%",
          width: "fit-content",
        }}
        >
          <div onClick={this.props.onIndicatorClick}
            style={{
              cursor: "pointer",
              height: 15,
              width: 15,
              margin: 2,
              backgroundColor: this.props.isActive ? "black" : "grey",
              borderRadius: 50,
              bottom: 30,
              position: "relative",
            }} >
          </div>
        </div>
      </div>
    )
  }
}
