import React, { Component } from "react";
import "./response.css";

class Response extends Component {
  constructor() {
    super();
    this.answers = []; //do a fetch to populate (backend)
    this.loadQuestionsAndAnswers = this.loadQuestionsAndAnswers.bind(this);
  }
  render() {
    return (
      <div className="response-container">{this.loadQuestionsAndAnswers()}</div>
    );
  }
  loadQuestionsAndAnswers() {
    const array = [];
    let questions = [
      "Name",
      "Email",
      "Year",
      "Phone Number",
      "Which of these classes have you completed or are you currently taking",
      "Which of these languages do you know? (Java, Python, HTML/CSS)",
      "Why do you want to join ANova? How do you personally resonate with ANova's mission statement? (250 words max)",
      "Tell us about your most memorable teaching or mentorship experience. (150 words max)",
      "What does addressing systemic issues and inequality in education look like to you? (150 words max)",
      "What are your other commitments this semester (classes, extracurriculars, work, etc.)? Do you plan to join any other clubs or organizations?",
      "Please indicate ALL your site teaching availabilities.",
      "Can you attend Orientation on Friday 2/7 from 6 PM - 8 PM?",
      "Can you attend Retreat from 2/7 - 2/9?",
      "Can you attend General Meetings on Thursdays 7 PM - 8 PM?",
    ];
    for (let i = 0; i < questions.length; i++) {
      array.push(<div className="response-question">{questions[i]}</div>);
      array.push(<div className="response-answer">SAMPLE ANSWER</div>);
    }
    return array;
  }
}
export default Response;
