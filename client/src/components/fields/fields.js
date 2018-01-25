import React, { Component } from 'react';

import User            from './user';
import Manager         from './manager';
import BusinessOwner   from './businessOwner';

class Fields extends Component {
  constructor(props) {
    super(props);

    this.state = { stage: this.props.stage };
   }

   passPropsToParent = (props) => {
     this.props.recievePropsFromChild(props);
   }

  render(){
    let components = {}

    const user = <div><User stage={ this.state.stage } recievePropsFromChild={ this.passPropsToParent }/></div>
    const manager = <div>{ user }<Manager stage={ this.state.stage } recievePropsFromChild={ this.passPropsToParent }/></div>
    const businessOwner = <div>{ manager }<BusinessOwner stage={ this.state.stage } recievePropsFromChild={ this.passPropsToParent }/></div>

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
