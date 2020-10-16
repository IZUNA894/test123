import React, { Component } from "react";

export default class a extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = (e) => {
    e.preventDefault();
    this.props.setValue(10);
  };
  render() {
    return (
      <div
        style={{
          minHeight: "100px",
          minWidth: "100px",
          border: "2px solid red",
        }}
      >
        <h2> COmponent A </h2>
        <button onClick={this.handleClick}> Update Me </button>
      </div>
    );
  }
}
