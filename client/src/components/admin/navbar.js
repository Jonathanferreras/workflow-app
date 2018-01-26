import React, { Component } from 'react';

class Navbar extends Component {
  constructor(){
    super();

    this.state = {
      notifications: "0"
    }
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
      notifications: {
        backgroundColor: "#ff6b6b",
        height: "2em",
        width: "2em",
        textAlign: "center",
        display: "inline-block",
        float: "right",
        borderRadius: "25px",
        border: "0.5px solid #576574"
      },
      text: {
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
      }
    }

    return(
      <div style={ Style.nav }>
        <nav className="navbar">
          <h1 style={ Style.title }>Admin</h1>
          <div style={ Style.notifications }>
            <span style={ Style.text }>
              { this.state.notifications }
            </span>
          </div>
          <div style={ Style.refresh } >
            <button className="btn" style={ Style.refreshBtn }>
              <span>Refresh &nbsp;</span>
              <i className="fa fa-refresh"></i>
            </button>
          </div>
          <div style={Style.search}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
