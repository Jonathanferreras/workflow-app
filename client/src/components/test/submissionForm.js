import React, { Component } from 'react';

export default class SubmissionForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      bscid: '',
      email: '',
      first_name: '',
      last_name: '',
      manager_email: '',
      request: ''
    }

    this.init = this.state
  }

  componentWillReceiveProps(nextProps){
    if(this.props.status_code !== 100){
      this.setState({
        bscid: nextProps.pastFormData.FORM.BSCID,
        email: nextProps.pastFormData.FORM.EMAIL,
        first_name: nextProps.pastFormData.FORM.FIRST_NAME,
        last_name: nextProps.pastFormData.FORM.LAST_NAME,
        manager_email: nextProps.pastFormData.FORM.MANAGER_EMAIL,
        request: nextProps.pastFormData.FORM.REQUEST
      });
    }
  }

  passPropsToParent = (event) => {
    const state = this.state;
    state[event.target.name] = event.target.value

    this.setState(state)
    //passes data back to form component
    this.props.recievePropsFromChild(this.state);
  }

  render(){
    if (this.props.status_code === 100) {
      return(
        <div>
          <div className="form-group col-xs-6">
            <label htmlFor="bscid">BSC ID</label>
            <input id="bscid" type="text" name="bscid" value={ this.state.bscid } className="form-control" onChange={ this.passPropsToParent }/>
          </div>
          <div className="form-group col-xs-6">
            <label htmlFor="email">Email</label>
            <input id="email" type="text" name="email" value={ this.state.email } className="form-control" onChange={ this.passPropsToParent }/>
          </div>
          <div className="form-group col-xs-6">
            <label htmlFor="first_name">First Name</label>
            <input id="first_name" type="text" name="first_name" value={ this.state.first_name } className="form-control" onChange={ this.passPropsToParent }/>
          </div>
          <div className="form-group col-xs-6">
            <label htmlFor="last_name">Last Name</label>
            <input id="last_name" type="text" name="last_name" value={ this.state.last_name } className="form-control" onChange={ this.passPropsToParent }/>
          </div>
          <div className="form-group col-xs-12">
            <label htmlFor="manager_email">Manager Email</label>
            <input id="manager_email" type="text" name="manager_email" value={ this.state.manager_email } className="form-control" onChange={ this.passPropsToParent }/>
          </div>
          <div className="form-group col-xs-12">
            <label htmlFor="request">Request</label>
            <textarea id="request" rows={3} name="request" value={ this.state.request } className="form-control" onChange={ this.passPropsToParent }/>
          </div>
        </div>
      )
    }
    else {
      return(
        <div>
          <div className="form-group col-xs-6">
            <label htmlFor="bscid">BSC ID</label><br />
            <input id="bscid" type="text" readOnly value={ this.state.bscid } className="form-control"  />
          </div>
          <div className="form-group col-xs-6">
            <label htmlFor="name">Name</label><br />
            <input id="name" type="text" readOnly value={ this.state.first_name+' '+this.state.last_name } className="form-control" />
          </div>
          <div className="form-group col-xs-12">
            <label htmlFor="request">Request</label><br />
            <textarea id="request" rows={3} readOnly className="form-control" value={ this.state.request } />
          </div>
        </div>
      )
    }
  }
}
