import React, { Component } from "react";

export default class c extends Component {
  render() {
    console.log("C rednder function called", this.props.value);
    return (
      <div style={{ height: "50x", width: "50px", border: "2px solid red" }}>
        <h2> COmponent C</h2>
        <p>this is c here....</p>
        <p>{this.props.value}</p>
      </div>
    );
  }
}
