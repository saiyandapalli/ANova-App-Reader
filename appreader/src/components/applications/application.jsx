import React, { Component } from "react";
import "./application.css";
import "../../global.js";

class Applications extends Component {
  constructor() {
    super();
    // TODO: retrieve all apps that the user still needs to review 
    this.state = {
      error: null,
      isLoaded: false,
      userDecisions: [],
      allApplications: [],
      remainingApps: [],
      numYeses: null,
      reviewerName: "test", // TODO: keep track of the current user
    }
  }
  
  // shuffles remaining apps
  shuffle(array) {
    array.sort(() => Math.random() - .5);
    return array;
  }

  getRemainingApps(){
    const decisionNames = this.state.userDecisions.map(r => r.fields['Applicant Name']);
    return this.state.allApplications.filter(r => !decisionNames.includes(r.fields['Name']));
  }

  getNumYeses() {
    return this.state.numYeses;
  }

  airtableVoteHandler(applicantName, reviewerName, vote, flag, comments, id) {
    fetch(global.DECISIONS_URL, {
      body: "{\"records\": [{\"fields\": {\"Applicant Name\": \""+applicantName+"\",\"Reviewer Name\": \""+reviewerName+"\",\"Interview\": \""+vote+"\",\"Flag\": \""+flag+"\",\"Comments\": \""+comments+"\", \"ID\": \""+id+"\"}}]}",
      headers: {
        Authorization: "Bearer " + global.AIRTABLE_KEY,
        "Content-Type": "application/json"
      },
      method: "POST"
    });

    fetch(global.DECISIONS_URL + "?filterByFormula=%7BReviewer%20Name%7D%20%3D%20%20%22"+reviewerName+"%22&view=Grid%20view", {
      headers: {
        Authorization: "Bearer " + global.AIRTABLE_KEY
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            userDecisions: result.records,
          });
        }, 
        (error) => {
          this.setState({
            error,
          });
        }
      );
    
    fetch(global.APPLICATIONS_URL + "?view=Grid%20view", {
      headers: {
        Authorization: "Bearer " + global.AIRTABLE_KEY
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState((state) => {return {
            isLoaded: true,
            allApplications: this.shuffle(result.records),
            numYeses: global.NUM_YES - state.userDecisions.filter(r => r.fields['Interview'] === "Yes").length,
          }});
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  componentDidMount() {
    
    const reviewerName = this.state.reviewerName;

    fetch(global.DECISIONS_URL + "?filterByFormula=%7BReviewer%20Name%7D%20%3D%20%20%22"+{reviewerName}+"%22&view=Grid%20view", {
      headers: {
        Authorization: "Bearer " + global.AIRTABLE_KEY
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            userDecisions: result.records,
          });
        }, 
        (error) => {
          this.setState({
            error,
          });
        }
      );
    
    fetch(global.APPLICATIONS_URL + "?view=Grid%20view", {
      headers: {
        Authorization: "Bearer " + global.AIRTABLE_KEY
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState((state) => {return {
            isLoaded: true,
            allApplications: this.shuffle(result.records)
          }});
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );  

      this.setState({
        numYeses: global.NUM_YES - this.state.userDecisions.filter(r => r.fields['Interview'] === "Yes")
      })
  }

  formatFieldResponse(entry) {
    // convert [a,b,c] to "a, b, c" if necessary
    // for multi select questions like "Which programming languages do you know?"
    return (typeof(entry) !== "string") ? Array.from(entry).join(", ") : entry;
  }

  render() {

    const error = this.state.error;
    const isLoaded = this.state.isLoaded;
    if (error) {
      return <div>Error: {error.message}</div>
    }
    if (!isLoaded) {
      return <div>Loading...</div>
    }

    const remainingApps = this.getRemainingApps()
    console.log(remainingApps);
    
    const current = remainingApps[0];
    const fields = current.fields;
    const id = current.id;

    // change the values inside fields[...] if corresponding field names change
    const applicantName = fields["Name"];
    const reviewerName = this.state.reviewerName;

    const currentApp = Object.keys(fields).map((k) => {
      const fieldResponse = this.formatFieldResponse(fields[k]);
      return (
        <div className="app-line" key={k}>
          <p>{k}<br />{fieldResponse}</p>
        </div>
      );
    });

    const appsLeft = remainingApps.length;
    const numYeses = this.getNumYeses();

    console.log(numYeses)

    // TODO: read these from the actual fields
    const flag = "No";
    const comments = "";

    const body = "{\"records\": [{\"fields\": {\"Applicant Name\": \""+applicantName+"\",\"Reviewer Name\": \""+reviewerName+"\", \"Interview\": \"No\", \"Flag\": \""+flag+"\", \"Comments\": \""+comments+"\", \"ID\": \""+id+"\"}}]}";
    console.log(body);

    return (
      <div className="container">
        <div className="header">
          <div className="header-application">Application</div>
          <div className="header-stats">apps left: {appsLeft}</div>
          <div className="header-stats">yeses left: {numYeses}</div>
        </div>

        <div className="app-section">
          <div className="form">{currentApp}</div>
          <div className="app-options">
            <textarea id="comments-textbox" className="comments-textbox" name="app" defaultValue="Comments"></textarea>
            <div className="flag">
              <input id="flag-checkbox" className="flag-checkbox" type="checkbox"></input>
              <label htmlFor="flag-checkbox">Flag</label>
            </div>
          </div>
        </div>

        <div className="vote">
          <button className="no-button" onClick={() => 
            this.airtableVoteHandler(applicantName, reviewerName, "No", flag, comments, id)}>No</button>
          <button className="no-button" onClick={() => 
            window.location.reload()}>Skip</button>
          <button className="no-button" onClick={() => 
            this.airtableVoteHandler(applicantName, reviewerName, "Yes", flag, comments, id)}>Yes</button>
        </div>
      </div>
    );
  }
}

export default Applications;
