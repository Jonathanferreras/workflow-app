import React, { Component } from 'react';

class TableEntries extends Component {

  render(){
    const allForms = this.props.forms
    const forms = allForms.FORMS
    const formList = []

    var handleDelete = (guid, index) => {
      if(index !== -1)
        forms.splice(index, 1)

      this.props.deleteForm(guid);
      this.props.removeEntry(allForms)
    }

    if(Array.isArray(forms)){
      if(forms.length > 0){
        forms.forEach(function(form, index){
          var bscid = <td key={(index + 1).toString()}>{form['BSCID']}</td>
          var name = <td key={(index + 2).toString()}>{form['FIRST_NAME'] +' '+ form['LAST_NAME']}</td>
          var request = <td key={(index + 3).toString()}>{form['REQUEST']}</td>
          // var stage = <td key={(index + 4).toString()}>{form['FORMS']['stage']} submitted</td>
          var ts = <td key={(index + 5).toString()}>{form['TIME_STAMP']}</td>
          var deleteBtn = <td key={(index + 6).toString()}><button value={form['GUID'], index} onClick={(e) => handleDelete(form['GUID'], index)} className="btn btn-danger" type="button">X</button></td>

          formList.push(<tr key={(index).toString()}>{bscid}{name}{request}{ts}{deleteBtn}</tr>)
        });
        return(
          <tbody>
            { formList }
          </tbody>
        );
      }
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
