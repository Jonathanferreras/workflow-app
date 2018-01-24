import React, { Component } from 'react';

import WorkflowTracker from './workflowTracker';
import Fields          from '../fields/fields';
import SubmitButton    from './submitButton';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = { stage: this.props.stage };
   }

   handleOnChange = (data) => {
     console.log(data);
   }



  render(){
    return(
      <div className="container">
        <div className="table-row row">
          <div className="col-xs-8 col-md-8">
            <div className="form-row">
              <form method="post">
                <div className="col-xs-12">
                  <h1>Form</h1>
                  <p>Fill out all fields.</p>
                </div>
                <Fields stage={ this.props.stage } onHandleChange={this.handleOnChange}/>
                <SubmitButton />
              </form>
            </div>
          </div>
          <div className="col-xs-4 col-md-4">
            <WorkflowTracker stage={ this.state.stage }/>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
