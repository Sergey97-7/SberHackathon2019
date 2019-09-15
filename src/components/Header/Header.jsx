import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
// import { withRouter } from 'react-router-dom'
import "./Header.scss";
class Header extends Component {
  render() {
    console.log("pro", this.props);
    return (
      <div className="header">
        Открытая страница
      </div>
    );
  }
}
export default Header;
