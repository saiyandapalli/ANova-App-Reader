import React, { Component } from "react";
import "./application.css";
import "../buttons/buttons.css";
import Response from "../response/response";
import CheckButton from "../buttons/checkButton";
import NoButton from "../buttons/noButton";
import StarButton from "../buttons/starButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <div className="form">
          <Response />
        </div>
        <div className="footer">
          <CheckButton />
          <button className="round-btn center-btn space-btn">
            <FontAwesomeIcon icon="angle-double-right" />
          </button>
          <NoButton />
        </div>
      </div>
    );
  }
}

export default Applications;
