import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Checkbox, Form, Header } from "semantic-ui-react";
// import { withRouter } from 'react-router-dom'
// import "./Main.scss";
class AdministrationEdit extends Component {
  render() {
    const options = [
      { key: "m", text: "Администратор", value: "admin" },
      { key: "f", text: "Пользователь", value: "user" }
    ];
    return (
      <Form>
        <Header floated={"left"} as="h4">
          Учетная запись: user1@yandex.ru
        </Header>
        <Form.Input className="text-left" label="Пароль: " type="password" />
        <Form.Select className="text-left" fluid label="Роль: " options={options} />
        <Button type="submit">Сохранить</Button>
      </Form>
    );
  }
}
export default AdministrationEdit;
