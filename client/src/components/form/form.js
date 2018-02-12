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
      pastFormData: {},
      error404: false,
      key: 1
    };

    this.init = this.state;
  }

  componentWillMount(){
    if(this.props.stage !== 'user')
      this.getForm();
  }

  getForm = async () => {
    const options = {
      method: 'POST',
      headers: new Headers({ "Content-Type": "application/json" }),
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({ id : this.props.id, action: 'getDocument' })
   }

    await fetch('/api', options)
    .then(res => { return res.json() })
    .then(data => {
      if(data.error){
        console.log(data)
        this.setState({error404: true})
      }
      else {
        this.setState({ pastFormData: data });
      }
    });
   }

  postForm = () => {
    var dt = new Date();
    var utcDate = dt.toUTCString();

    var state = this.state.formData;
    state['date'] = utcDate;
    if(this.state.stage !== 'user'){
      state['action'] = 'updateDocument'
    }
    else{
      state['action'] = 'createDocument'
    }

    state['stage'] = this.props.stage

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
    console.log(state['form'])
    console.log(props)

    function merge (a, b) {
      for(var key in props) {
        if(props.hasOwnProperty(key)) state[key] = props[key]
      }
      return state
    }

    var newFormData = merge(state['form'], props)
    this.setState({ formData: newFormData });
    console.log(this.state.newFormData)
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
      id: this.props.id,
      pastFormData: this.state.pastFormData,
      stage: this.state.stage,
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
}

export default Form;
