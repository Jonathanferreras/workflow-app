import React, { Component } from 'react';

class TableEntries extends Component {

  handleBtnClick(formid){

  }
  render(){
    const forms = this.props.forms;
    const formList = []

    if(forms.length > 1){
      forms.forEach(function(form, index){
        var bscid = <td key={(index + 1).toString()}>{form['bscid']}</td>
        var name = <td key={(index + 2).toString()}>{form['name']}</td>
        var request = <td key={(index + 3).toString()}>{form['request']}</td>
        var deleteBtn = <td key={(index + 4).toString()}><button className="btn btn-danger" type="button" onClick={() => this.handleBtnClick(form['id'])} >X</button></td>

        formList.push(<tr key={(index).toString()}>{bscid}{name}{request}{deleteBtn}</tr>)
      });
    }

    return(
      <tbody>
        { formList }
      </tbody>
    );
  }
}

export default TableEntries;
