import React, { Component } from 'react';

import SubmissionForm from './submissionForm'
import ApprovalForm from './approvalForm'
// import WorkflowTracker from './workflowTracker';
// import Fields          from '../fields/fields';
import SubmitButton    from './submitButton'

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status_code: this.props.status_code,
      formData: {},
      pastFormData: {},
      error404: false,
      key: 1
    };

    this.init = this.state;
  }

  componentWillMount(){
    if(this.props.status_code !== 100)
      this.getForm();
  }

  getForm = async () => {
    const options = {
      method: 'POST',
      headers: new Headers({ "Content-Type": "application/json" }),
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({ guid : this.props.formId, action: 'SEND_FORM_DATA' })
   }

    await fetch('/api', options)
    .then(res => { return res.json() })
    .then(data => {
      if(data.error){
        this.setState({error404: true})
      }
      else {
        this.setState({ pastFormData: data });
      }
    });
   }

  postForm = () => {
    var dt = new Date();
    var utcDate = dt.toISOString();

    var state = this.state.formData;
    state['time_stamp'] = utcDate;
    if(this.state.status_code === 102){
      // state['action'] = 'UPDATE_FORM_DATA'
      state['status_code'] = this.state.status_code + state['option']

    }
    else{
      state['action'] = 'STORE_FORM_DATA'
      state['status_code'] = this.state.status_code + 1
    }

    state['status_code'] = this.state.status_code

    const options = {
      method: 'POST',
      headers: new Headers({ "Content-Type": "application/json" }),
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(state)
    }

    fetch('/api', options)
    .catch(err => alert("Oops an error occurred!"));
  };

  handlePropsFromChild = (props) => {
    const state = this.state.pastFormData

    function merge (a, b) {
      for(var key in props) {
        if(props.hasOwnProperty(key)) state[key] = props[key]
      }
      return state
    }

    var newFormData = merge(state['FORM'], props)
    this.setState({ formData: newFormData });
   }

  handleSubmit = (event) => {
    console.log("submitting")
    event.preventDefault();
    this.postForm();
    alert("Your form has been submitted!")
    this.resetForm();
   }

  resetForm = () => {
    this.setState({ key: -(this.state.key) });
   }

  render(){

    var props = {
      formId: this.props.formId,
      pastFormData: this.state.pastFormData,
      status_code: this.state.status_code,
      recievePropsFromChild: this.handlePropsFromChild
    }

    if(this.state.error404){
      return(<div>404, This form request is invalid</div>)
    }

    else {
      return(
        <div className="container" key={ this.state.key }>{/* Used to reset form fields */}
          <div className="table-row row">
            <div className="col-xs-8 col-md-8">
              <div className="form-row">
                <form method="post" onSubmit={ this.handleSubmit }>
                  <div className="col-xs-12">
                    <h1>Form</h1>
                    {/*<p>Fill out all fields.</p>*/}
                  </div>
                  <SubmissionForm {...props}/>
                  <ApprovalForm {...props}/>
                  <SubmitButton/>
                </form>
              </div>
            </div>
            {/*
            <div className="col-xs-4 col-md-4">
              <WorkflowTracker stage={ this.state.stage }/>
            </div>
            */}
          </div>
        </div>
      );
    }
  }
}
