import "./buttons.css";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CheckButton extends Component {
  render() {
    return (
      <>
        <button className="round-btn center-btn space-btn">
          <FontAwesomeIcon icon="check" />
        </button>
      </>
    );
  }
}
export default CheckButton;
