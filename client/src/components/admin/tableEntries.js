import React, { Component } from 'react';

export default class TableEntries extends Component {

  render(){
    const allForms = this.props.forms
    const forms = allForms.FORMS
    const formList = []

    var handleDelete = (uid, index) => {
      if(index !== -1)
        forms.splice(index, 1)

      this.props.deleteForm(uid);
      this.props.removeEntry(allForms)
    }

    if(Array.isArray(forms)){
      if(forms.length > 0){
        var status = {}
        status[101] = 'pending'
        status[103] = 'approved'
        status[104] = 'denied'

        forms.forEach(function(form, index){

          var bscid = <td key={(index + 1).toString()}>{form['BSCID']}</td>
          var name = <td key={(index + 2).toString()}>{form['FIRST_NAME'] +' '+ form['LAST_NAME']}</td>
          var request = <td key={(index + 3).toString()}>{form['REQUEST']}</td>
          var status_code = <td key={(index + 4).toString()}>{ status[Number(form['STATUS'])] } </td>
          var approved_by = <td key={(index + 5).toString()}>{ form['APPROVED_BY'] } </td>
          var denied_by = <td key={(index + 6).toString()}>{ form['DENIED_BY'] } </td>
          var comments = <td key={(index + 7).toString()}>{ form['COMMENTS'] } </td>
          // var ts = <td key={(index + 8).toString()}>{form['TIME_STAMP']}</td>
          var deleteBtn = <td key={(index + 9).toString()}><button value={form['UID'], index} onClick={(e) => handleDelete(form['UID'], index)} className="btn btn-danger" type="button">X</button></td>

          formList.push(
            <tr key={(index).toString()}>
              { bscid }
              { name }
              { request }
              { status_code }
              { approved_by }
              { denied_by }
              { comments }
            {/*  { ts } */}
              { deleteBtn }
            </tr>)
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
