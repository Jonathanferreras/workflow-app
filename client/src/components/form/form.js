import React, { Component } from 'react';

import WorkflowTracker from './workflowTracker';
import SubmitButton    from './submitButton';

import User            from '../user';
import Manager         from '../manager';
import BusinessOwner   from '../businessOwner';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = { stage: this.props.stage };
   }

  render(){
    console.log(this.state.stage)
    let components = {}

    const user = <div><User stage={ this.state.stage }/></div>
    const manager = <div>{ user }<Manager stage={ this.state.stage }/></div>
    const businessOwner = <div>{ manager }<BusinessOwner stage={ this.state.stage }/></div>

    components['user'] = user;
    components['manager'] = manager;
    components['businessOwner'] = businessOwner;

    return(
      <div className="container">
        <div className="table-row row">
          <div className="col-xs-8 col-md-8">
            <div className="form-row">
              <form method="post">
                { components[this.state.stage] }
                <SubmitButton />
              </form>
            </div>
          </div>
          <div className="col-xs-4 col-md-4">
            <WorkflowTracker />
          </div>
        </div>
      </div>
    );
  }
}

export default Form;