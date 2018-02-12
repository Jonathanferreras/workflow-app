import React, { Component } from 'react';

class TableEntries extends Component {

  render(){
    const forms = this.props.forms
    const formList = []

    var handleDelete = (id, index) => {
      if(index !== -1)
        forms.splice(index, 1)

      this.props.deleteForm(id);
      this.props.removeEntry(forms)
    }

    if(forms.length > 0){
      forms.forEach(function(form, index){
        var bscid = <td key={(index + 1).toString()}>{form['form']['bscid']}</td>
        var name = <td key={(index + 2).toString()}>{form['form']['firstName'] +' '+ form['form']['lastName']}</td>
        var request = <td key={(index + 3).toString()}>{form['form']['request']}</td>
        var stage = <td key={(index + 4).toString()}>{form['form']['stage']} submitted</td>
        var ts = <td key={(index + 5).toString()}>{form['form']['date']}</td>
        var deleteBtn = <td key={(index + 6).toString()}><button value={form['id'], index} onClick={(e) => handleDelete(form['id'], index)} className="btn btn-danger" type="button">X</button></td>

        formList.push(<tr key={(index).toString()}>{bscid}{name}{request}{stage}{ts}{deleteBtn}</tr>)
      });
      return(
        <tbody>
          { formList }
        </tbody>
      );
    }
    else {
      return(
        <tfoot>
          <tr>
            <td colSpan="4">No forms have been submitted.</td>
          </tr>
        </tfoot>
      );
    }
  }
}

export default TableEntries;
