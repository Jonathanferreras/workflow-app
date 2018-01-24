import React, { Component } from 'react';

import User            from './user';
import Manager         from './manager';
import BusinessOwner   from './businessOwner';

class Fields extends Component {
  constructor(props) {
    super(props);

    this.state = { stage: this.props.stage };
   }

   handleOnChange = (data) => {
     this.props.onHandleChange(data);
   }

  render(){
    let components = {}

    const user = <div><User stage={ this.state.stage } onHandleChange={this.handleOnChange}/></div>
    const manager = <div>{ user }<Manager stage={ this.state.stage } onHandleChange={this.handleOnChange}/></div>
    const businessOwner = <div>{ manager }<BusinessOwner stage={ this.state.stage } onHandleChange={this.handleOnChange}/></div>

    components['user'] = user;
    components['manager'] = manager;
    components['businessOwner'] = businessOwner;

    return(
      <div>
        { components[this.state.stage] }
      </div>
    );
  }
}

export default Fields;
