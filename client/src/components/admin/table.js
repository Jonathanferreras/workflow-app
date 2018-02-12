import React, { Component } from 'react';

import TableEntries from './tableEntries';

class Table extends Component {
  receivePropsFromChild(childProps){
    this.passPropsToParent(childProps)
  }

  handledeleteForm(formid){
    this.deleteForm(formid)
  }
  render(){
    const Style = {
      table: {
        textAlign: "center"
      },
      th: {
        textAlign: "center"
      }
    }
    return(
      <table style={ Style.table } className="table">
        <thead className="thead-inverse">
          <tr>
            <th style={Style.th}>BSCID</th>
            <th style={Style.th}>Name</th>
            <th style={Style.th}>Request</th>
            <th style={Style.th}>Stage</th>
            <th style={Style.th}>Date</th>
            <th style={Style.th}>Remove</th>
          </tr>
        </thead>
        <TableEntries {...this.props }/>
      </table>
    );
  }
}

export default Table;
