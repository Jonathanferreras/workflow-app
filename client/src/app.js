import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// import Form  from './components/form/form'
import Form from './components/test/form'
import Admin from './components/admin/admin'

export default class App extends Component {
  render(){
    const admin = () => { return <Admin /> }
    const submission_form = () => { return <Form status_code={ 100 }/> }
    const approval_form = ({ match }) => { return <Form status_code={ 102 } formId={ match.params.formId } /> }

    return(
      <div>
        <Route exact path="/" component={ submission_form }/>
        <Route path="/form=:formId" component={ approval_form }/>
        <Route path="/admin" component={ admin }/>
      </div>
    )
  }
}
