import React, { Component } from 'react';

import User            from './user';
import Manager         from './manager';
import BusinessOwner   from './businessOwner';

class Fields extends Component {
   passPropsToParent = (props) => {
     this.props.recievePropsFromChild(props);
   }

  render(){
    let components = {}

    const user = <div><User {...this.props}/></div>
    const manager = <div>{ user }<Manager {...this.props}/></div>
    const businessOwner = <div>{ manager }<BusinessOwner {...this.props}/></div>

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
