import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NoButton extends Component {
  render() {
    return (
      <button className="round-btn center-btn space-btn">
        <FontAwesomeIcon icon="times" />
      </button>
    );
  }
}
export default NoButton;
