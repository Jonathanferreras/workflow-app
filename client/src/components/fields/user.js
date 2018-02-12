import React, { Component } from 'react';

class User extends Component {
  constructor(props){
    super(props);

    this.state= {
      bscid: '',
      email: '',
      firstName: '',
      lastName: '',
      managerEmail: '',
      request: ''
     };

     this.init = this.state;
  }

  componentWillReceiveProps(nextProps){
    if(this.props.stage !== 'user'){
      this.setState({
        bscid: nextProps.pastFormData.form.bscid,
        email: nextProps.pastFormData.form.email,
        firstName: nextProps.pastFormData.form.firstName,
        lastName: nextProps.pastFormData.form.lastName,
        managerEmail: nextProps.pastFormData.form.managerEmail,
        request: nextProps.pastFormData.form.request
      });
    }
  }

  passPropsToParent = (event) => {
    const state = this.state;
    state[event.target.name] = event.target.value

    this.setState(state)
    this.props.recievePropsFromChild(this.state);
  }

  render(){
    if(this.props.stage === 'user'){
      return(
        <div>
          <div className="form-group col-xs-6">
            <label htmlFor="bscid">BSC ID</label>
            <input id="bscid" type="text" name="bscid" value={ this.state.bscid }R className="form-control" onChange={ this.passPropsToParent }/>
          </div>
          <div className="form-group col-xs-6">
            <label htmlFor="email">Email</label>
            <input id="email" type="text" name="email" value={ this.state.email } className="form-control" onChange={ this.passPropsToParent }/>
          </div>
          <div className="form-group col-xs-6">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" name="firstName" value={ this.state.firstName } className="form-control" onChange={ this.passPropsToParent }/>
          </div>
          <div className="form-group col-xs-6">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text" name="lastName" value={ this.state.lastName } className="form-control" onChange={ this.passPropsToParent }/>
          </div>
          <div className="form-group col-xs-12">
            <label htmlFor="managerEmail">Manager Email</label>
            <input id="managerEmail" type="text" name="managerEmail" value={ this.state.managerEmail } className="form-control" onChange={ this.passPropsToParent }/>
          </div>
          <div className="form-group col-xs-12">
            <label htmlFor="request">Request</label>
            <textarea id="request" rows={3} name="request" value={ this.state.request } className="form-control" onChange={ this.passPropsToParent }/>
          </div>
        </div>
      );
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
            <input id="name" type="text" readOnly value={ this.state.firstName+' '+this.state.lastName } className="form-control" />
          </div>
          <div className="form-group col-xs-12">
            <label htmlFor="request">Request</label><br />
            <textarea id="request" rows={3} readOnly className="form-control" value={ this.state.request } />
          </div>
        </div>
      );
    }
  }
}

export default User;
