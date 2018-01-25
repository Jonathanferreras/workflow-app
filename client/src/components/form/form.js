import React, { Component } from 'react';
import axios from 'axios';

import WorkflowTracker from './workflowTracker';
import Fields          from '../fields/fields';
import SubmitButton    from './submitButton';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stage: this.props.stage,
      formData: {}
    };
   }

   handlePropsFromChild = (props) => {
     const data = props;
     this.setState({formData: data});
   }

   handleSubmit = (event) => {
     event.preventDefault();
     axios.post({
       method: 'post',
       url: '',
       data: this.state.formData,
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       }
     })
     .then( (response) => {
       alert(response);
     })
     .catch(error => {
       console.log(error.response)
     });
     console.log('posted!');
   }

  render(){
    return(
      <div className="container">
        <div className="table-row row">
          <div className="col-xs-8 col-md-8">
            <div className="form-row">
              <form method="post" onSubmit={ this.handleSubmit }>
                <div className="col-xs-12">
                  <h1>Form</h1>
                  <p>Fill out all fields.</p>
                </div>
                <Fields stage={ this.props.stage } recievePropsFromChild={ this.handlePropsFromChild }/>
                <SubmitButton submitBtnPress={ this.handleSubmitBtnPress }/>
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
