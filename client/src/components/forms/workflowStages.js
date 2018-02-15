import React, { Component } from 'react';

class WorkflowStages extends Component {
  constructor(props){
    super(props);

    this.state= { stage: this.props.stage };
  }

  render(){
    let listItems = [];
    listItems.push({'stage':'user', 'title': 'User Submission'});
    listItems.push({'stage':'manager', 'title':'Manager Approval'});
    listItems.push({'stage':'businessOwner', 'title': 'BusinessOwner Approval'});

    let result = [];
    for (var i = 0; i < listItems.length; i++){
      if(listItems[i]['stage'] === this.state.stage){
        result.push(<li key={i.toString()} className="list-group-item active">{ listItems[i]['title'] }</li>)
      } else {
        result.push(<li key={i.toString()} className="list-group-item disabled">{ listItems[i]['title'] }</li>)
      }
    }

    return(
      <div>
        { result }
      </div>
    );
  }
}

export default WorkflowStages;
