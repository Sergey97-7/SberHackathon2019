import React, { Component } from "react";
import { connect } from "react-redux";
import "./Administration.scss";
import { Button, Header, Input, Table, Icon, Search } from "semantic-ui-react";
import { changeAdminSearchInput } from "../../actions/administrationAction";
// import { userListFetch } from "../../actions/userActions";

class Administration extends Component {
  // componentDidMount() {
  //   this.props.userListFetch("/rest/users");
  // }
  redirect = e => {
    if (e.currentTarget.getAttribute("name") === "edit") {
      this.props.history.push(
        `/administration/edit/user/${e.currentTarget.getAttribute("email")}`
      );
    } else if (e.currentTarget.getAttribute("name") === "create") {
      this.props.history.push("/administration/create");
    }
  };
  getUsers = () => {
    const { admin, user, config } = this.props;
    const filteredUsers = user.userList.filter(user => {
      if (admin.userSearchInputValue.trim() === "") {
        return true;
      } else {
        return (
          user.name.includes(admin.userSearchInputValue.trim()) ||
          user.email.includes(admin.userSearchInputValue.trim())
        );
      }
    });
    if (filteredUsers.length === 0)
      return (
        <tr className="user-filter-not-found">
          <td colSpan="2">Пользователи не найдены =(</td>
        </tr>
      );
    return filteredUsers.map(user => {
      return (
        <Table.Row
          key={user.id}
          email={user.email}
          name="edit"
          onClick={this.redirect}
        >
          <Table.Cell>{user.name}</Table.Cell>
          {/* <Icon name="pencil alternate"/> */}
          <Table.Cell className="last-cell">
            {user.email}
            <Icon
              name="delete"
              size="large"
              onClick={event => {
                event.stopPropagation();
                console.log("click");
              }}
            />
          </Table.Cell>
        </Table.Row>
      );
    });
  };
  deleteUser = (event) => {
    event.stopPropagation();

  }
  render() {
    const { admin, changeAdminSearchInput, user, config } = this.props;
    return (
      <div className="administration">
        <Header className="text-left" size="medium">
          Пользователи
        </Header>
        <div className="administration-search">
          <Input
            value={admin.userSearchInputValue}
            onChange={changeAdminSearchInput}
            className="input-search"
            // action="Поиск"
            icon={<Icon name="search" inverted circular link />}
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
          <div>Загрузка...</div>
        ) : (
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Имя</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {user.userList !== null && user.userList.length !== 0
                ? this.getUsers()
                : null}
            </Table.Body>
          </Table>
        )}
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
    // userListFetch: url => dispatch(userListFetch(url)),
    changeAdminSearchInput: e =>
      dispatch(changeAdminSearchInput(e.target.value))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Administration);
