import React, { Component } from 'react';

import User            from './user';
import Approver        from './approver';

class Fields extends Component {
   passPropsToParent = (props) => {
     this.props.recievePropsFromChild(props);
   }

  render(){
    let components = []

    const user = <div><User {...this.props}/></div>
    const approver = <div>{ user }<Approver {...this.props}/></div>

    components[0] = user;
    components[1] = approver;

    return(
      <div>
        { components[this.props.stage] }
      </div>
    );
  }
}

export default Fields;
