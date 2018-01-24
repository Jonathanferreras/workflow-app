import React, { Component } from 'react';

class WorkflowTracker extends Component {
  constructor(){
    super();

    this.state= { data: [] };
  }

  render(){
    var Style = {
      textAlign: "center"
    };

    return(
      <div style={Style}>
        <h1>Workflow</h1>
        <p>____________</p>
        <label>Status</label>
        <ul className="list-group">
          <li className="list-group-item active">User Submission</li>
          <li className="list-group-item disabled">Manager Approval</li>
          <li className="list-group-item disabled">Business Owner Approval</li>
        </ul>
      </div>
    );
  }
}

export default WorkflowTracker;
