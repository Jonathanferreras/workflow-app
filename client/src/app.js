import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Form from './components/form/form';

class App extends Component {
  constructor(){
    super();
  }

  render(){
    const home = () => {
      return <Form stage='user'/>
    }
    const returnJSX = ({ match }) => {
      return <Form stage={ match.params.stage }/>
    }

    return(
      <div>
        <Route exact path="/" component={ home }/>
        <Route path="/:stage" component={ returnJSX }/>
      </div>
    );
  }
}

export default App;
