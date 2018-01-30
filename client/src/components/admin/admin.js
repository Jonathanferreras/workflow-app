import React, { Component } from 'react';

import Navbar from './navbar';
import Table from './table';

class Admin extends Component {
  constructor(){
    super();

    this.state = {
      forms: '',
      newForms: '',
      count: 0,
      key: 1
    }
  }
  componentWillMount(){
    this.getAllForms();
  }

  getAllForms = async () => {
    const options = {
      method: 'POST',
      headers: new Headers(),
      mode: 'cors',
      cache: 'default',
   }

    await fetch('/api/getAllForms', options)
    .then(res => { return res.json() })
    .then(data => {
      if(data.error){
        this.setState({error404: true})
      }
      else {
        this.setState({forms: data});
      }
    });
  }

  resetForm = () => {
    this.setState({key: -(this.state.key)});
   }

  render(){
    const Style = {
      "WebkitBoxShadow": "0px 10px 5px 4px rgba(0,0,0,0.05)",
      "MozBoxShadow": "0px 10px 5px 4px rgba(0,0,0,0.05)",
      "boxShadow": "0px 10px 5px 4px rgba(0,0,0,0.05)",
      padding: "0"
    }

    var props = {
      forms: this.state.forms
    }
    return(
      <div key={this.state.key} style={ Style } className="container">
        <Navbar {...props } />
        <Table {...props } />
      </div>
    );
  }
}

export default Admin;
