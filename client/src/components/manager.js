import React, { Component } from 'react';

class Manager extends Component {
  constructor(props){
    super(props);

    this.state= { stage: this.props.stage };
  }

  render(){
    var Style = {
      label: {
        paddingLeft: "1em"
      }
    }

    if(this.state.stage === 'manager') {
      return(
        <div>
          <div className="col-xs-12"><br />
            <h3>Select an option</h3>
            <div className="form-check">
              <input id="approve"
                     type="radio"
                     name="option"
                     defaultValue="yes"
                     defaultChecked
                     className="form-check-input" />
              <label style={Style.label} htmlFor="approve" className="form-check-label">Approve</label>
            </div>
            <div className="form-check">
              <input id="deny" type="radio"
                     name="option"
                     defaultValue="no"
                     className="form-check-input" />
              <label style={Style.label} htmlFor="deny" className="form-check-label">Deny</label>
              <textarea id="comment" rows={3} name="comment" className="form-control" defaultValue={""} />
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

export default Manager;
