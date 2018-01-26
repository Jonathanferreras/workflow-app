import React, { Component } from 'react';

import Navbar from './navbar';
import Table from './table';

class Admin extends Component {

  render(){
    const Style = {}
    return(
      <div style={ Style } className="container">
        <Navbar />
        <Table />
      </div>
    );
  }
}

export default Admin;
