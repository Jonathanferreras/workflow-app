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
      request: '',
      stage: this.props.stage
     };
  }

  passPropsToParent = (event) => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    
    this.setState(state)
    this.props.recievePropsFromChild(this.state);
  }

  render(){
    const { bscid, email, firstName, lastName, managerEmail, request } = this.state;

    if(this.state.stage === 'user'){
      return(
        <div>
          <div className="form-group col-xs-6">
            <label htmlFor="bscid">BSC ID</label>
            <input id="bscid" type="text" name="bscid" value={bscid} className="form-control" onChange={ this.passPropsToParent }/>
          </div>
          <div className="form-group col-xs-6">
            <label htmlFor="email">Email</label>
            <input id="email" type="text" name="email" value={email} className="form-control" onChange={ this.passPropsToParent }/>
          </div>
          <div className="form-group col-xs-6">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" name="firstName" value={firstName} className="form-control" onChange={ this.passPropsToParent }/>
          </div>
          <div className="form-group col-xs-6">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text" name="lastName" value={lastName} className="form-control" onChange={ this.passPropsToParent }/>
          </div>
          <div className="form-group col-xs-12">
            <label htmlFor="managerEmail">Manager Email</label>
            <input id="managerEmail" type="text" name="managerEmail" value={managerEmail} className="form-control" onChange={ this.passPropsToParent }/>
          </div>
          <div className="form-group col-xs-12">
            <label htmlFor="request">Request</label>
            <textarea id="request" rows={3} name="request" value={request} className="form-control" defaultValue={""} onChange={ this.passPropsToParent }/>
          </div>
        </div>
      );
    } else {
      return(
        <div>
          <div className="form-group col-xs-6">
            <label htmlFor="bscid">BSC ID</label><br />
            <input id="bscid" type="text" readOnly defaultValue={bscid} className="form-control" />
          </div>
          <div className="form-group col-xs-6">
            <label htmlFor="name">Name</label><br />
            <input id="name" type="text" readOnly defaultValue={firstName+' '+lastName} className="form-control" />
          </div>
          <div className="form-group col-xs-12">
            <label htmlFor="request">Request</label><br />
            <textarea id="request" rows={3} readOnly className="form-control" defaultValue={request} />
          </div>
        </div>
      );
    }
  }
}

export default User;
