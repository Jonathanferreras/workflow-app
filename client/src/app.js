import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Form  from './components/form/form';
import Admin from './components/admin/admin';

class App extends Component {
  render(){
    const home = () => {
      return <Form stage='user'/>
    }
    const returnStage = ({ match }) => {
      return <Form stage={ match.params.stage } id={ match.params.id } />
    }

    const admin = () => {
      return <Admin />
    }

    return(
      <div>
        <Route exact path="/" component={ home }/>
        <Route path="/:stage/:id" component={ returnStage }/>
        <Route path="/admin" component={ admin }/>
      </div>
    );
  }
}

export default App;
