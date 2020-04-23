import React, { Component } from "react";
import "./application.css";
import Response from "../response/response";
import { NavigateNext } from "@material-ui/icons";
import NoButton from "../buttons/noButton";

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
        <NoButton />
      </div>
    );
  }
}

export default Applications;
