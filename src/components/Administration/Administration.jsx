import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
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
import { changeAdminSearchInput } from "../../actions/administrationAction";
class Administration extends Component {
  redirect = e => {
    // console.log("PROOOOPRRRSSROUTER", this.props)
    console.log("PROOOOPRRRSSROUTERe", e.currentTarget.getAttribute("email"));
    console.log("PROOOOPRRRSSROUTERf", e.currentTarget);
    // console.log("PROOOOPRRRSSROUTER", user)
    // window.location.assign("/administration/edit");
    if (e.currentTarget.getAttribute("name") === "edit") {
      this.props.history.push(
        `/administration/edit/user/${e.currentTarget.getAttribute("email")}`
      );
    } else if (e.currentTarget.getAttribute("name") === "create") {
      this.props.history.push("/administration/create");
    }
  };

  render() {
    const { admin, changeAdminSearchInput, user, config } = this.props;
    // const roleAlias = {
    //   0: "user",
    //   1: "administator"
    // };
    console.log("prOOOOO", this.props.user.userList);
    return (
      <div className="administration">
        {/* <div> */}
        <Header className="text-left" size="medium">
          Пользователи
        </Header>
        <div className="test">
          <Input
            value={admin.userSearchInputValue}
            onChange={changeAdminSearchInput}
            className="input-search"
            action="Поиск"
            placeholder="Поиск..."
          />
          <Button
            className="button-add-user"
            primary
            name="create"
            onClick={this.redirect}
          >
            Добавить
          </Button>
        </div>
        {user.error.hasErrored ? (
          <div>Error: {user.error.msg.message}</div>
        ) : user.isLoading ? (
          <div>Loading(class loader)</div>
        ) : (
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Имя</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Роль</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {/* {user.error.hasErrored && !user.isLoading && "TEST"} */}

              {user.userList.length !== 0
                ? user.userList.map(user => {
                    return (
                      <Table.Row
                        key={user.id}
                        email={user.email}
                        name="edit"
                        onClick={this.redirect}
                      >
                        <Table.Cell>{user.name}</Table.Cell>
                        <Table.Cell>{user.email}</Table.Cell>
                        <Table.Cell>{config.roles[user.role]}</Table.Cell>
                      </Table.Row>
                    );
                  })
                : null}
              {/* <Table.Row>
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
            </Table.Row> */}
            </Table.Body>

            {/* <Table.Footer>
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
            </Table.Footer> */}
          </Table>
        )}
        {/* </Container> */}

        {/* <Route path="/administration/edit" component={AdministrationEdit} /> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("state", state);
  return {
    admin: state.administration,
    user: state.user,
    config: state.app.appConfig
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeAdminSearchInput: e =>
      dispatch(changeAdminSearchInput(e.target.value))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Administration);
