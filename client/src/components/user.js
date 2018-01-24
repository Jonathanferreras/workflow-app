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

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  render(){
    const { bscid, email, firstName, lastName, managerEmail, request } = this.state;

    if(this.state.stage === 'user'){
      return(
        <div>
          <div className="col-xs-12">
            <h1>Form</h1>
            <p>Fill out all fields.</p>
          </div>
          <div className="form-group col-xs-6">
            <label htmlFor="bscid">BSC ID</label>
            <input id="bscid"
                   type="text"
                   name="bscid"
                   value={bscid}
                   className="form-control"
                   onChange={this.onChange}
                   />
          </div>
          <div className="form-group col-xs-6">
            <label htmlFor="email">Email</label>
            <input id="email"
                   type="text"
                   name="email"
                   value={email}
                   className="form-control"
                   onChange={this.onChange} />
          </div>
          <div className="form-group col-xs-6">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName"
                   type="text"
                   name="firstName"
                   value={firstName}
                   className="form-control"
                   onChange={this.onChange} />
          </div>
          <div className="form-group col-xs-6">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName"
                   type="text"
                   name="lastName"
                   value={lastName}
                   className="form-control"
                   onChange={this.onChange} />
          </div>
          <div className="form-group col-xs-12">
            <label htmlFor="managerEmail">Manager Email</label>
            <input id="managerEmail"
                   type="text"
                   name="managerEmail"
                   value={managerEmail}
                   className="form-control"
                   onChange={this.onChange} />
          </div>
          <div className="form-group col-xs-12">
            <label htmlFor="request">Request</label>
            <textarea id="request"
                      rows={3}
                      name="request"
                      value={request}
                      className="form-control"
                      defaultValue={""}
                      onChange={this.onChange} />
          </div>
        </div>
      );
    } else {
      return(<div><h1>User Filler</h1></div>);
    }
  }
}

export default User;
