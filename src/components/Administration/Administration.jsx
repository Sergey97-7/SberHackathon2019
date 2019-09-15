import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
// import { withRouter } from 'react-router-dom'
import "./Administration.scss";
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
import AdministrationEdit from "./AdminitrationEdit";
class Administration extends Component {
  render() {
    console.log("pro", this.props);
    return (
      <div className="administration">
        {/* <div> */}
          <Header className="text-left" size="medium">Поиск</Header>
          <div className="test" >
            <Input className="input-search" action="Поиск"  placeholder="Поиск..." />
            <Button className="button-add-user"  primary>Добавить</Button>
          </div>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Menu floated="right" pagination>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron left" />
                    </Menu.Item>
                    <Menu.Item as="a">1</Menu.Item>
                    <Menu.Item as="a">2</Menu.Item>
                    <Menu.Item as="a">3</Menu.Item>
                    <Menu.Item as="a">4</Menu.Item>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron right" />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        {/* </Container> */}

        {/* <Route path="/administration/edit" component={AdministrationEdit} /> */}
      </div>
    );
  }
}
export default Administration;
