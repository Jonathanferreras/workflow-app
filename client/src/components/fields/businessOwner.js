import React, { Component } from 'react';

class BusinessOwner extends Component {
  constructor(props){
    super(props);

    this.state= { stage: this.props.stage };
  }

  render(){

    if(this.state.stage === 'businessOwner'){
      return(
        <div>
          <h1>Business Owner</h1>
        </div>
      );
    }
    else{
      return(<div>Business Filler</div>);
    }
  }
}

export default BusinessOwner;
