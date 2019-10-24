import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, Header, Input } from "semantic-ui-react";
import { createCurrentUser } from "../../actions/userActions";
import { userListFetch } from "../../actions/userActions";
import { changeModalAlert } from "../../actions/modalAction";
import {
  warningModal,
  negativeModal,
  infoModal,
  successModal
} from "../../constants/constants";
class AdministrationCreate extends Component {
  state = {
    name: "",
    email: "",
    pwd: "",
    pwdConfirm: "",
    role: "0"
  };
  timer = null;
  setTimer = time => {
    clearTimeout(this.timer);
    this.timer = setTimeout(
      () => this.props.changeModalAlert(false, "", 0, infoModal),
      time
    );
  };
  createUser = () => {
    const { pwd, pwdConfirm, role, name, email } = this.state;
    let body = {};
    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      pwd.trim() !== "" &&
      pwdConfirm.trim() !== ""
    ) {
      const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (pattern.test(String(email).toLowerCase())) {
        if (pwd.trim() === pwdConfirm.trim()) {
          body = {
            name: name.trim(),
            hash: pwd.trim(),
            email: email.trim()
          };
          const fetchDataPost = async () => {
            try {
              const rawResponse = await fetch(
                `${this.props.app.appConfig.mainUrl}/rest/users`,
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(body)
                }
              );
              const res = await rawResponse.json();
              if (res.hasOwnProperty("error")) {
                this.props.changeModalAlert(
                  true,
                  `${res.status} : ${res.error}`,
                  0,
                  negativeModal
                );
                this.setTimer(2000);
              } else {
                this.props.userListFetch(
                  `${this.props.app.appConfig.mainUrl}/rest/users`
                );
                this.props.changeModalAlert(
                  true,
                  "Пользователь успешно создан!",
                  0,
                  successModal
                );
                this.setTimer(2000);
              }
            } catch (e) {
              this.props.changeModalAlert(true, e.toString(), 0, negativeModal);
              this.setTimer(2000);
            }
          };
          fetchDataPost();
        } else {
          this.props.changeModalAlert(
            true,
            "Пароли не совпадают!",
            0,
            warningModal
          );
          this.setTimer(2000);
          console.log("Пароли не совпадают!");
        }
      } else {
        this.props.changeModalAlert(
          true,
          "Введите корректный email!",
          0,
          warningModal
        );
        this.setTimer(2000);
        console.log("Введите корректный email!");
      }
    } else {
      this.props.changeModalAlert(true, "Заполните все поля!", 0, warningModal);
      this.setTimer(2000);
      console.log("Заполните все поля!");
    }
  };
  inputHandler = e => {
    this.setState({ [e.target.getAttribute(["name"])]: e.target.value });
  };
  roleHandler = (e, { value }) => {
    this.setState({ role: value });
  };
  redirect = e => {
    if (e.currentTarget.getAttribute("name") === "administration") {
      this.props.history.push(`/administration`);
    } else if (e.currentTarget.getAttribute("name") === "create") {
      this.props.history.push("/administration/create");
    }
  };
  render() {
    const { roleAlias } = this.props;
    const { pwd, pwdConfirm, role, name, email } = this.state;
    const options = Object.keys(roleAlias).map(opt => {
      return {
        key: opt,
        value: opt,
        text: roleAlias[opt]
      };
    });
    return (
      <Form className="administration-create text-left">
        <Form.Group className="administration-create-header">
          <Header floated={"left"} as="h4" className="segment-custom-media" >
            Создание нового пользователя
          </Header>
          <Button
            className="button-add-user desktop-btn-back"
            primary
            name="administration"
            onClick={this.redirect}
          >
            Назад
          </Button>
        </Form.Group>

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

        {/* <Form.Select
          className="text-left"
          fluid
          label="Роль: "
          options={options}
          value={role}
          onChange={this.roleHandler}
        /> */}
        <div className="administration-create-btns-container">
        <Button onClick={this.createUser} type="submit">
          Добавить
        </Button>
        <Button
            className="button-add-user mobile-btn-back"
            primary
            name="administration"
            onClick={this.redirect}
          >
            Назад
          </Button>
          </div>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    roleAlias: state.app.appConfig.roles,
    app: state.app
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createCurrentUser: user => dispatch(createCurrentUser(user)),
    userListFetch: url => dispatch(userListFetch(url)),
    changeModalAlert: (bool, msg, time, importance) =>
      dispatch(changeModalAlert(bool, msg, time, importance))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdministrationCreate);
