import React, { Component } from 'react';

class Approver extends Component {
  constructor(props){
    super(props);

    this.state= {
      stage: this.props.stage,
      option: '',
      comment: ''
    };
  }

  passPropsToParent = (event) => {
    const id = event.target.id;
    if (id === 'comment'){
      const state = this.state;
      state[id] = event.target.value

      this.setState(state);
    }
    else {
      const state = this.state;
      state[event.target.name] = id;

      this.setState(state);
    }

    this.props.recievePropsFromChild(this.state);
  }

  render(){
    var Style = {
      label: {
        paddingLeft: "1em"
      }
    }

    let result = [];
    if(this.state.option === '' || this.state.option === 'approve')
      result.push(<div key={"0"}></div>);
    else{
      result.push(<br key={"0"}/>)
      result.push(<label key={"1"} style={ Style.label } htmlFor="comment" className="form-check-label">Comment:</label>);
      result.push(<textarea key={"2"} id="comment" rows={3} name="comment" className="form-control" value={ this.state.comment } />);
    }

    if(this.state.stage === 1) {
      return(
        <div>
          <div className="col-xs-12" onChange={ this.passPropsToParent }><br />
            <h3>Select an option</h3>
            <div className="form-check" >
              <input id="approve" type="radio" name="option" defaultValue="yes" className="form-check-input" />
              <label style={ Style.label } htmlFor="approve" className="form-check-label">Approve</label>
            </div>
            <div className="form-check" >
              <input id="deny" type="radio" name="option" defaultValue="no" className="form-check-input" />
              <label style={ Style.label } htmlFor="deny" className="form-check-label">Deny</label>
              { result }
            </div>
            <br />
          </div>
        </div>
      );
    } else {
      return(<div>Manager Filler</div>);
    }
  }
}

export default Approver;
