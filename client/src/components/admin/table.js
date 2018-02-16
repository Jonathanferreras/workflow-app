import React, { Component } from 'react';

import TableEntries from './tableEntries';

export default class Table extends Component {
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
            <th style={Style.th}>NAME</th>
            <th style={Style.th}>REQUEST</th>
            <th style={Style.th}>STATUS</th>
            <th style={Style.th}>APPROVED_BY</th>
            <th style={Style.th}>DENIED_BY</th>
            <th style={Style.th}>COMMENTS</th>
          {/*  <th style={Style.th}>DATE</th> */}
            <th style={Style.th}>REMOVE</th>
          </tr>
        </thead>
        <TableEntries {...this.props }/>
      </table>
    );
  }
}
