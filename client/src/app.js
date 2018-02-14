import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Form  from './components/form/form';
import Admin from './components/admin/admin';

class App extends Component {
  render(){
    const home = () => {
      return <Form stage={ 0 }/>
    }
    const returnStage = ({ match }) => {
      return <Form stage={ Number(match.params.stage) } userId={ match.params.userId } />
    }

    const admin = () => {
      return <Admin />
    }

    return(
      <div>
        <Route exact path="/" component={ home }/>
        <Route path="/:stage/user=:userId" component={ returnStage }/>
        <Route path="/admin" component={ admin }/>
      </div>
    );
  }
}

export default App;
