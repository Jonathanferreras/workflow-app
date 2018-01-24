import React, { Component } from 'react';

class SubmitButton extends Component {

  render(){

    return(
      <div className="form-group col-xs-12">
        <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
      </div>
    );
  }
}

export default SubmitButton;
