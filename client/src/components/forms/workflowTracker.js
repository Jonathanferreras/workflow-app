import React, { Component } from 'react';
import WorkflowStages from './workflowStages';

class WorkflowTracker extends Component {
  constructor(props){
    super(props);

    this.state= { stage: this.props.stage };
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
          <WorkflowStages stage={this.state.stage}/>
        </ul>
      </div>
    );
  }
}

export default WorkflowTracker;
