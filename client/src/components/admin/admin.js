import React, { Component } from 'react'

import Navbar from './navbar'
import Table from './table'

export default class Admin extends Component {
  constructor(){
    super()

    this.state = {
      forms: '',
      newForms: '',
      count: 0,
      key: 1,
      state: false
    }
  }
  componentWillMount(){
    const state = this.state.state
    this.getAllForms(state)
  }

  componentDidMount(){
    const state = !(this.state.state)
    setInterval(() => {
      this.getAllForms(state)
    }, 10000)
  }

  getAllForms = async (state) => {
    const options = {
      method: 'POST',
      headers: new Headers({ "Content-Type": "application/json" }),
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({action: 'SEND_ALL_FORM_DATA'})
   }
    if(state){
      await fetch('/api', options)
      .then(res => { return res.json() })
      .then(data => {
        if(data.error){
          this.setState({error404: true})
        }
        else {
          if(data.FORMS.length > this.state.forms.FORMS.length)
            this.setState({newForms: data})
        }
      })
    }
    else {
      await fetch('/api', options)
      .then(res => { return res.json() })
      .then(data => {
        if(data.error){
          this.setState({error404: true})
        }
        else {
          this.setState({forms: data})
        }
      })
    }
  }

  handleDeleteForm = (uid) => {
    const formid = uid
    const options = {
      method: 'POST',
      headers: new Headers({ "Content-Type": "application/json" }),
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({ uid: formid, action: 'DELETE_FORM_DATA' })
   }

   fetch('/api', options)
   alert("form deleted!")
  }

  handleRemoveEntry = (props) => {
    this.setState({ forms: props, newForms: '' })
  }

  handleUpdateForms = (props) => {
    alert('updating')
    this.getAllForms()
  }

  render(){
    const Style = {
      WebkitBoxShadow: "0px 10px 5px 4px rgba(0,0,0,0.05)",
      MozBoxShadow: "0px 10px 5px 4px rgba(0,0,0,0.05)",
      boxShadow: "0px 10px 5px 4px rgba(0,0,0,0.05)",
      padding: "0",

    }

    var props = {
      forms: this.state.forms,
      newForms: this.state.newForms,
      deleteForm: this.handleDeleteForm,
      removeEntry: this.handleRemoveEntry,
      updateForms: this.handleUpdateForms,
    }

    return(
      <div key={this.state.key} style={ Style } className="container">
        <Navbar {...props } />
        <Table {...props } />
      </div>
    )
  }
}
