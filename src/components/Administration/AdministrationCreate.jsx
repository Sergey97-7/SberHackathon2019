import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Checkbox, Form, Header, Input } from "semantic-ui-react";
// import { withRouter } from 'react-router-dom'
// import "./Main.scss";
class AdministrationCreate extends Component {
  render() {
    const options = [
      { key: "m", text: "Администратор", value: "admin" },
      { key: "f", text: "Пользователь", value: "user" }
    ];
    return (
      <Form className="text-left">
        <Header floated={"left"} as="h4">
          Создание нового пользователя
        </Header>
        <Form>
          <Form.Field required>
            <label>Логин</label>
            <Input/>
          </Form.Field>
        </Form>
        <Form>
          <Form.Field required>
            <label>Пароль</label>
            <Input type="password" />
          </Form.Field>
        </Form>
        <Form>
          <Form.Field required>
            <label>Повторный ввод пароля</label>
            <Input type="password" />
          </Form.Field>
        </Form>
        <Form.Select
          className="text-left"
          fluid
          label="Роль: "
          options={options}
        />
        <Button type="submit">Сохранить</Button>
      </Form>
    );
  }
}
export default AdministrationCreate;
