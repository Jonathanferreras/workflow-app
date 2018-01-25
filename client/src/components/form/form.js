import React, { Component } from 'react';

import WorkflowTracker from './workflowTracker';
import Fields          from '../fields/fields';
import SubmitButton    from './submitButton';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stage: this.props.stage,
      formData: {},
      key: 1
    };

    this.init = this.state;
   }

   callApi = async () => {
      const options = {
        method: 'POST',
        headers: new Headers({"Content-Type": "application/json"}),
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(this.state.formData)
      }

      await fetch('/api/formPost', options);
    };

   handlePropsFromChild = (props) => {
     const data = props;
     this.setState({ formData: data });
   }

   handleSubmit = (event) => {
     this.callApi()
     .catch(err => console.log(err));
     event.preventDefault();
     this.resetForm();
   }

   resetForm = () => {
     const state = this.state;

     state['key'] = -(this.state.key);
     this.setState(state);
   }

  render(){
    var props = {
      stage:this.state.stage,
      recievePropsFromChild:this.handlePropsFromChild
    }

    return(
      <div className="container" key={ this.state.key }>
        <div className="table-row row">
          <div className="col-xs-8 col-md-8">
            <div className="form-row">
              <form method="post" onSubmit={ this.handleSubmit }>
                <div className="col-xs-12">
                  <h1>Form</h1>
                  <p>Fill out all fields.</p>
                </div>
                <Fields {...props } />
                <SubmitButton/>
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
