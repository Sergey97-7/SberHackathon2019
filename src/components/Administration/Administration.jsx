import React, { Component } from "react";
import { connect } from "react-redux";
import "./Administration.scss";
import { Button, Header, Input, Table } from "semantic-ui-react";
import { changeAdminSearchInput } from "../../actions/administrationAction";
class Administration extends Component {
  redirect = e => {
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
    return (
      <div className="administration">
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
            </Table.Body>
          </Table>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
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
