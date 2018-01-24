import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Form from './components/form/form';

class App extends Component {
  render(){
    const home = () => {
      return <Form stage='user'/>
    }
    const returnStage = ({ match }) => {
      return <Form stage={ match.params.stage } />
    }

    return(
      <div>
        <Route exact path="/" component={ home }/>
        <Route path="/:stage" component={ returnStage }/>
      </div>
    );
  }
}

export default App;
