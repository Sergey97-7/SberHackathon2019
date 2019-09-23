import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Checkbox, Form, Header, Input } from "semantic-ui-react";
// import { withRouter } from 'react-router-dom'
// import "./Main.scss";
class AdministrationCreate extends Component {
  state = {
    name: "",
    email: "",
    pwd: "",
    pwdConfirm: "",
    role: "0"
  };
  inputHandler = e => {
    this.setState({ [e.target.getAttribute(["name"])]: e.target.value });
  };
  roleHandler = (e, { value }) => {
    this.setState({ role: value });
  };
  render() {
    const { roleAlias, match, user } = this.props;
    console.log("this.react.state: ", this.state);
    const { pwd, pwdConfirm, role, name, email } = this.state;
    const options = Object.keys(roleAlias).map(opt => {
      return {
        key: opt,
        value: opt,
        text: roleAlias[opt]
      };
    });
    // const options = [
    //   { key: "m", text: "Администратор", value: "admin" },
    //   { key: "f", text: "Пользователь", value: "user" }
    // ];
    return (
      <Form className="text-left">
        <Header floated={"left"} as="h4">
          Создание нового пользователя
        </Header>
        <Form.Field required>
          <label>Имя</label>
          <Input value={name} onChange={this.inputHandler} name="name" />
        </Form.Field>
        <Form.Field required>
          <label>Email</label>
          <Input value={email} onChange={this.inputHandler} name="email" />
        </Form.Field>

        <Form.Field required>
          <label>Пароль</label>
          <Input
            type="password"
            value={pwd}
            onChange={this.inputHandler}
            name="pwd"
          />
        </Form.Field>

        <Form.Field required>
          <label>Повторный ввод пароля</label>
          <Input
            type="password"
            value={pwdConfirm}
            onChange={this.inputHandler}
            name="pwdConfirm"
          />
        </Form.Field>

        <Form.Select
          className="text-left"
          fluid
          label="Роль: "
          options={options}
          value={role}
          onChange={this.roleHandler}
        />
        <Button type="submit">Сохранить</Button>
      </Form>
    );
  }
}
// export default AdministrationCreate;
const mapStateToProps = state => {
  console.log("state", state);
  return {
    // admin: state.administration,
    // user: state.user,
    roleAlias: state.app.appConfig.roles
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // changeCurrentUser: user => dispatch(changeCurrentUser(user))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdministrationCreate);
