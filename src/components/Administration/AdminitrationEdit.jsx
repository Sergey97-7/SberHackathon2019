import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Checkbox, Form, Header, Dropdown } from "semantic-ui-react";
// import { withRouter } from 'react-router-dom'
// import "./Main.scss";
class AdministrationEdit extends Component {
  state = {
    pwd: "",
    pwdConfirm: "",
    //TODO избавиться от пропсов в состоянии
    // role: String(
    //   this.props.user.userList.find(
    //     user => user.email === this.props.match.params.user
    //   ).role
    // ),
    role: ""
  };
  pwdHandler = e => {
    console.log("ATTT", e.target.getAttribute(["name"]));
    this.setState({ [e.target.getAttribute(["name"])]: e.target.value });
  };
  roleHandler = (e, { value }) => {
    this.setState({ role: value });
  };
  // pwdConfirmhandler = e => {
  //   this.setState({pwdConfirm: e.target.value})
  // }
  // roleHandler = e => {
  //   this.setState({role: e.target.value})
  // }
  render() {
    const { roleAlias, match, user } = this.props;
    const { pwd, pwdConfirm, role } = this.state;
    console.log("this", this.props.match.params.user);
    // const options = [
    //   { key: "administrator", text: "Администратор", value: "administrator" },
    //   { key: "user", text: "Пользователь", value: "user" }
    // ];
    const options = Object.keys(roleAlias).map(opt => {
      return {
        key: opt,
        value: opt,
        text: roleAlias[opt]
      };
    });
    const currentUser = user.userList.find(
      user => user.email === match.params.user
    );
    console.log("123: ", currentUser.role);
    console.log("STATE", this.state);
    // console.log("123: ", user.userList.find(user =>))
    return (
      <Form>
        <Header floated={"left"} as="h4">
          Учетная запись: {match.params.user}
        </Header>
        <Form.Input
          name="pwd"
          value={pwd}
          onChange={this.pwdHandler}
          className="text-left"
          label="Пароль: "
          type="password"
        />
        <Form.Input
          name="pwdConfirm"
          value={pwdConfirm}
          onChange={this.pwdHandler}
          className="text-left"
          label="Повтор пароля: "
          type="password"
        />
        <Form.Select
          onChange={this.roleHandler}
          className="text-left"
          defaultValue={String(currentUser.role)}
          fluid
          label="Роль: "
          options={options}
        />
        <Button type="submit">Сохранить</Button>
      </Form>
    );
  }
}
// export default AdministrationEdit;
const mapStateToProps = state => {
  console.log("state", state);
  return {
    admin: state.administration,
    user: state.user,
    roleAlias: state.app.appConfig.roles
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // changeAdminSearchInput: e =>
    // dispatch(changeAdminSearchInput(e.target.value))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdministrationEdit);
