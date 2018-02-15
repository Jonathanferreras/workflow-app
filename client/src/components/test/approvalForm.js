import React, { Component } from 'react';

export default class ApprovalForm extends Component {
  constructor(props){
    super(props)

    this.state= {
      option: 0,
      comment: ''
    }
  }

  passPropsToParent = (event) => {
    //stores comment data in state
    if (event.target.id === 'comment'){
      const state = this.state;
      state[event.target.id] = event.target.value

      this.setState(state);
    }
    //stores option choice to state
    else {
      const state = this.state;
      state[event.target.name] = event.target.value;

      this.setState(state);
    }

    //passes data back to form component
    this.props.recievePropsFromChild(this.state);
  }

  render(){
    if (this.props.status_code === 102 ) {
      var Style = { label: { paddingLeft: "1em" } }

      let result = [];

      //toggle comment box based on option
      if(this.state.option <= 1)
        result.push(<div key={"0"}></div>);
      else{
        result.push(<br key={"0"}/>)
        result.push(<label key={"1"} style={ Style.label } htmlFor="comment" className="form-check-label">Comment:</label>);
        result.push(<textarea key={"2"} id="comment" rows={3} name="comment" className="form-control" value={ this.state.comment } />);
      }

      return(
        <div>
          <div className="col-xs-12" onChange={ this.passPropsToParent }><br />
            <h3>Select an option</h3>
            <div className="form-check" >
              <input id="approve" type="radio" name="option" defaultValue={ 1 } className="form-check-input" defaultChecked />
              <label style={ Style.label } htmlFor="approve" className="form-check-label">Approve</label>
            </div>
            <div className="form-check" >
              <input id="deny" type="radio" name="option" defaultValue={ 2 } className="form-check-input" />
              <label style={ Style.label } htmlFor="deny" className="form-check-label">Deny</label>
              { result }
            </div>
            <br />
          </div>
        </div>
      )
    }
    else{
      return(<div />)
    }
  }
}
