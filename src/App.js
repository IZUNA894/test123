import React, { Component } from "react";
import A from "./a.js";
import B from "./b.js";
export default class a extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 5,
    };
  }

  setValue = (value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div className="App">
        <A setValue={this.setValue} />
        <B value={this.state.value} />
      </div>
    );
  }
}
