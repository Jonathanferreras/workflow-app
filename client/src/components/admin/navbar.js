import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props){
    super(props);

    this.state = {
      newSubmissions: 0,
      submissions: 0
    }
  }

  componentWillReceiveProps(nextProps){
    const formsLen = nextProps.forms.FORMS.length
    const newForms = nextProps.newForms.FORMS

    if(Array.isArray(newForms)){
      console.log(newForms.length)
      if(newForms.length > this.state.submissions){
        const newFormsLen = (newForms.length - formsLen)
        this.setState({newSubmissions: newFormsLen})
      }
    }

    this.setState({submissions: formsLen})
  }

  handleClick = () => {
    this.props.updateForms()
  }

  render(){
    const Style = {
      nav: {
        backgroundColor: "#54a0ff",
        color: "white",
        overflow: "hidden",
        paddingTop: "1em"
      },
      title: {
        float: "left"
      },
      newSubmissions: {
        backgroundColor: "#ff6b6b",
        height: "2em",
        width: "2em",
        textAlign: "center",
        display: "inline-block",
        float: "right",
        borderRadius: "25px",
        border: "0.5px solid #576574"
      },
      newSubmissionsText: {
        fontSize: "0.7em"
      },
      refresh: {
        float: "right",
        color: "black"
      },
      refreshBtn: {
        backgroundColor: "#54a0ff",
      },
      search: {
        float:"right"
      },
      submissions: {
        color: 'black',
        paddingLeft: '0.8em',
        fontSize: '1.5em'
      }
    }

    return(
      <div style={ Style.nav }>
        <nav className="navbar">
          <h1 style={ Style.title }>Admin</h1>
          <div style={ Style.newSubmissions }>
            <span style={ Style.newSubmissionsText }>
              { this.state.newSubmissions }
            </span>
          </div>
          <div style={ Style.refresh } >
            <button className="btn" style={ Style.refreshBtn } onClick={this.handleClick} >
              <span>Refresh &nbsp;</span>
              <i className="fa fa-refresh"></i>
            </button>
          </div>
          {/*
          <div style={ Style.search }>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          </div>
          */}
        </nav>
        <div style={ Style.submissions }>
          <span>Submissions: { this.state.submissions } </span>
        </div>
      </div>
    );
  }
}

export default Navbar;
