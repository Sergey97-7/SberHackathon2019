import React, { Component } from "react";
import { connect } from "react-redux";
import "./Administration.scss";
import { Button, Header, Input, Table, Icon, Search } from "semantic-ui-react";
import { changeAdminSearchInput } from "../../actions/administrationAction";
import { userListFetch } from "../../actions/userActions";
import { changeModalAlert } from "../../actions/modalAction";
import {
  negativeModal,
  infoModal,
  successModal
} from "../../constants/constants";
class Administration extends Component {
  timer = null;
  setTimer = time => {
    clearTimeout(this.timer);
    this.timer = setTimeout(
      () => this.props.changeModalAlert(false, "", 0, infoModal),
      time
    );
  };
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
    const { admin, user } = this.props;
    const filteredUsers = user.userList.filter(user => {
      if (admin.userSearchInputValue.trim() === "") {
        return true;
      } else {
        return (
          user.name
            .toLowerCase()
            .includes(admin.userSearchInputValue.trim().toLowerCase()) ||
          user.email
            .toLowerCase()
            .includes(admin.userSearchInputValue.toLowerCase().trim())
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
          // onClick={this.redirect}
        >
          <Table.Cell width={6}>{user.name}</Table.Cell>
          <Table.Cell width={16} className="last-cell">
            {user.email}
            <Icon
              name="delete"
              userid={user.id}
              size="large"
              className="pointer"
              onClick={(event, { userid }) => {
                event.stopPropagation();
                this.deleteUser(event, userid);
              }}
            />
          </Table.Cell>
        </Table.Row>
      );
    });
  };

  deleteUser = (event, userId) => {
    event.stopPropagation();
    const fetchDeleteUser = async () => {
      try {
        const rawResponse = await fetch(
          `${this.props.app.appConfig.mainUrl}/rest/users/${userId}`,
          {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
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
            "Пользователь успешно удален!",
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
    fetchDeleteUser();
  };
  render() {
    const { admin, changeAdminSearchInput, user } = this.props;
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
  return {
    admin: state.administration,
    user: state.user,
    config: state.app.appConfig,
    app: state.app
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userListFetch: url => dispatch(userListFetch(url)),
    changeAdminSearchInput: e =>
      dispatch(changeAdminSearchInput(e.target.value)),
    changeModalAlert: (bool, msg, time, importance) =>
      dispatch(changeModalAlert(bool, msg, time, importance))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Administration);
