import React, { Component } from "react";
import "./application.css";

class Applications extends Component {
  //   constructor() {
  //     super();
  //   }

  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="header-application">Application 1/150</div>
          <div className="header-stats">apps left: 43</div>
          <div className="header-stats">yeses left: 43</div>
        </div>
        <div className="form"></div>
      </div>
    );
  }
}

export default Applications;
