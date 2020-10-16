import React, { Component } from "react";
import C from "./c";

export default class b extends Component {
  render() {
    console.log("B render function called", this.props.value);
    return (
      <div
        style={{
          minHeight: "100px",
          minWidth: "100px",
          border: "2px solid red",
        }}
      >
        <h2> COmponent B </h2>
        <p>rendering b here....</p>
        <C value={this.props.value} />
      </div>
    );
  }
}
