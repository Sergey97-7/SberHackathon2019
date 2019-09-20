import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Container,
  Input,
  Icon,
  Label,
  Menu,
  Table
} from "semantic-ui-react";
import "./UserStatus.scss";
class UserStatus extends Component {
  render() {
    console.log("pro", this.props);
    return (
      <div className="status">
        {/* <div> */}
        <Header className="text-left" size="medium">
          Поиск
        </Header>
        <Form>
          <Form.Field>
            <Input label="Номер Заявки: " placeholder="Поиск..." fluid action="Поиск" />
          </Form.Field>
          <Form.Field>
            <Input
              label="Email: "
              placeholder="Поиск..."
              fluid
              action="Поиск"
            />
          </Form.Field>
        </Form>
      </div>
    );
  }
}
export default UserStatus;
