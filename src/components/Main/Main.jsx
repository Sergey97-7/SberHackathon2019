import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import "./Main.scss";
import { Segment } from "semantic-ui-react";
import Administration from "../Administration";
import AdministrationEdit from "../Administration/AdminitrationEdit";
import AdministrationCreate from "../Administration/AdministrationCreate";
import UserStatus from "../UserStatus/UserStatus";
import CurrentUserStatus from "../UserStatus/CurrentUserStatus";
import { userListFetch } from "../../actions/userActions";
import ModalAlert from "../ModalAlert";
import Menu from "../Menu";
import { changeModalAlert } from "../../actions/modalAction";
import { Redirect } from "react-router-dom";
class Main extends Component {
  componentDidMount() {
    this.props.userListFetch(`${this.props.app.appConfig.mainUrl}/rest/users`);
  }
  render() {
    const { importance, isOpen, msg, time } = this.props.modal;
    return (
      <>
        <Redirect to="/administration" />
        {this.props.config !== null && (
          <Segment>
            <ModalAlert
              isOpen={isOpen}
              msg={msg}
              importance={importance}
              changeModalAlert={this.props.changeModalAlert}
              time={time}
            />
            <Menu pathname={this.props.location.pathname} />
            <Segment className="main-content-segment">
              <Route exact path="/administration" component={Administration} />
              <Route
                exact
                path="/administration/edit/user/:user"
                component={AdministrationEdit}
              />
              <Route
                exact
                path="/administration/create"
                component={AdministrationCreate}
              />
              <Route exact path="/status" component={UserStatus} />
              <Route
                exact
                path="/status/current-user"
                component={CurrentUserStatus}
              />
            </Segment>
          </Segment>
        )}
      </>
    );
  }
}
const mapStateToProps = state => {
  console.log("state",state)
  return {
    admin: state.administration,
    config: state.app.appConfig,
    modal: state.modal,
    app: state.app
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userListFetch: url => dispatch(userListFetch(url)),
    changeModalAlert: (bool, msg, time, importance) =>
      dispatch(changeModalAlert(bool, msg, time, importance))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
