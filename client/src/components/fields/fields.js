import React, { Component } from 'react';

import User            from './user';
import Manager         from './manager';
import BusinessOwner   from './businessOwner';

class Fields extends Component {
   passPropsToParent = (props) => {
     this.props.recievePropsFromChild(props);
   }

  render(){
    var props = {
      stage:this.props.stage,
      recievePropsFromChild:this.passPropsToParent
    }

    let components = {}

    const user = <div><User {...props}/></div>
    const manager = <div>{ user }<Manager {...props}/></div>
    const businessOwner = <div>{ manager }<BusinessOwner {...props}/></div>

    components['user'] = user;
    components['manager'] = manager;
    components['businessOwner'] = businessOwner;

    return(
      <div>
        { components[this.props.stage] }
      </div>
    );
  }
}

export default Fields;
