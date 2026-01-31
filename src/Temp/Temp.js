import React, { Component } from "react";
import "./Temp.css";
export default class Temp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 5,
    };
  }
  addTemp() {
    this.setState((preTemp) => {
      return { temp: preTemp.temp + 1 };
    });
  }
  removeTemp() {
    this.setState((preTemp) => {
      return { temp: preTemp.temp - 1 };
    });
  }

  render() {
    return (
      <div className="app-container">
        <div className={`temperature-display-container ${this.state.temp >= 10 ? "hot" : "cold"}`}>
          <div className="temperature-display">{this.state.temp}°C</div>
          {/* <div className="temperature-display">10 ° ℃</div> */}
        </div>
        <div className="button-container">
          <button onClick={this.addTemp.bind(this)}>+</button>
          <button onClick={this.removeTemp.bind(this)}>-</button>
        </div>
      </div>
    );
  }
}
