import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, Header} from "semantic-ui-react";
import { changeCurrentUser } from "../../actions/userActions";
class AdministrationEdit extends Component {
  currentUser = this.props.user.userList.find(
    user => user.email === this.props.match.params.user
  );
  state = {
    name: "",
    pwd: "",
    pwdConfirm: "",
    role: String(this.currentUser.role)
  };
  inputHandler = e => {
    console.log("ATTT", e.target.getAttribute(["name"]));
    this.setState({ [e.target.getAttribute(["name"])]: e.target.value });
  };
  roleHandler = (e, { value }) => {
    this.setState({ role: value });
  };
  changeUserParams = () => {
    const { pwd, pwdConfirm, role, name } = this.state;
    let body = { hash: null, role: null, name: null, email: null, uuid: "" };
    if (
      (pwd.trim() !== "" && pwd.trim() === pwdConfirm.trim()) ||
      role.trim() !== String(this.currentUser.role) ||
      name.trim() !== ""
    ) {
      if (pwd.trim() !== "" && pwd.trim() === pwdConfirm.trim()) {
        body.hash = pwd.trim();
      }
      if (role.trim() !== String(this.currentUser.role)) {
        body.role = role.trim();
      }
      if (name.trim() !== "") {
        body.name = name;
      }
      const fetchDataPut = async () => {
        const rawResponse = await fetch(`${this.props.app.appConfig.mainUrl}/rest/users/${this.currentUser.id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ body })
        });
        const res = await rawResponse.json();
        if (res.value.hasOwnProperty("id")) {
          this.props.changeCurrentUser(res.value);
        } else {
        }
      };
      fetchDataPut();
    } else {
      console.log("Заполните хотя бы 1 поле!");
    }
  };
  render() {
    const { roleAlias, match, user } = this.props;
    const { pwd, pwdConfirm, role, name } = this.state;
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
    return (
      <Form>
        <Header floated={"left"} as="h4">
          Учетная запись: {match.params.user}
        </Header>
        <Header floated={"left"} as="h4">
          Имя: {this.currentUser.name}
        </Header>
        <Form.Input
          name="name"
          value={name}
          onChange={this.inputHandler}
          className="text-left"
          label="Имя: "
          type="text"
        />
        <Form.Input
          name="pwd"
          value={pwd}
          onChange={this.inputHandler}
          className="text-left"
          label="Пароль: "
          type="password"
        />
        <Form.Input
          name="pwdConfirm"
          value={pwdConfirm}
          onChange={this.inputHandler}
          className="text-left"
          label="Повтор пароля: "
          type="password"
        />
        {/* <Form.Select
          onChange={this.roleHandler}
          className="text-left"
          value={role}
          fluid
          label="Роль: "
          options={options}
        /> */}
        <Button onClick={this.changeUserParams} type="submit">
          Сохранить
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    admin: state.administration,
    user: state.user,
    roleAlias: state.app.appConfig.roles,
    app: state.app
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeCurrentUser: user => dispatch(changeCurrentUser(user))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdministrationEdit);
