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
import {
  userStatusFetch,
  userStatusFormInputChange
} from "../../actions/statusAction";
import moment from "moment";
import { changeModalAlert } from "../../actions/modalAction";
import {
  infoModal,
  warningModal,
  successModal,
  negativeModal
} from "../../constants/constants";
class UserStatus extends Component {
  getFormattedDate = date => {
    return moment(date).format("YYYY-MM-DDTHH:mm");
  };
  // initial state date
  state = {
    email: "",
    periodFrom: this.getFormattedDate(new Date()),
    periodTo: this.getFormattedDate(new Date())
  };

  inputHandler = e => {
    this.setState({ [e.target.getAttribute(["name"])]: e.target.value });
  };
  btnUserStatusHandler = e => {
    const { email, periodFrom, periodTo } = this.props.statusForm;
    let body = { email };
    if (
      email.trim() !== "" &&
      periodFrom.trim() !== "" &&
      periodTo.trim() !== ""
    ) {
      // this.props.userStatusFetch("/rest/user/status", "POST", body);
      this.props.userStatusFetch("/rest/user/status").then(data => {
        console.log("!@3123434534", data);
        if (data.hasOwnProperty("value") && data.value.length === 0) {
          this.props.changeModalAlert(
            true,
            "Статусы не найдены",
            2000,
            negativeModal
          );
        } else {
          this.props.history.push("/status/current-user");
        }
      });
    } else {
      this.props.changeModalAlert(
        true,
        "Заполните все поля!",
        2000,
        warningModal
      );
    }
  };
  render() {
    console.log("DATE", new Date().toLocaleString());
    console.log("REACT_STATE", this.props);
    // const { email, periodFrom, periodTo } = this.state;
    const { email, periodFrom, periodTo } = this.props.statusForm;
    const { userStatusFormInputChange } = this.props;

    return (
      <div className="status">
        {/* <div> */}
        <Header className="text-left" size="medium">
          Поиск
        </Header>
        {/* <Form>
           <Form.Field>
            <Input label="Номер Заявки: " placeholder="Поиск..." fluid action="Поиск" />
          </Form.Field> *
          <Form.Field>
            <Input
              label="Email: "
              placeholder="Поиск..."
              fluid
              action="Поиск"
            />
          </Form.Field>
          
        </Form> */}
        <Form>
          <Form.Input
            name="email"
            value={email}
            onChange={userStatusFormInputChange}
            className="text-left"
            label="Email: "
            type="email"
          />
          <Form.Input
            name="periodFrom"
            value={periodFrom}
            onChange={userStatusFormInputChange}
            className="text-left"
            label="Период с:"
            type="datetime-local"
          />
          <Form.Input
            name="periodTo"
            value={periodTo}
            onChange={userStatusFormInputChange}
            className="text-left"
            label="Период до:"
            type="datetime-local"
          />
          <Button onClick={this.btnUserStatusHandler} type="submit">
            Найти
          </Button>
        </Form>
      </div>
    );
  }
}
// export default UserStatus;
const mapStateToProps = state => {
  console.log("state", state);
  return {
    admin: state.administration,
    user: state.user,
    roleAlias: state.app.appConfig.roles,
    statusForm: state.statusForm
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userStatusFetch: (user, type, body) =>
      dispatch(userStatusFetch(user, type, body)),
    userStatusFormInputChange: e =>
      dispatch(
        userStatusFormInputChange(
          e.target.getAttribute(["name"]),
          e.target.value
        )
      ),
    changeModalAlert: (bool, msg, timer, importance) =>
      dispatch(changeModalAlert(bool, msg, timer, importance))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserStatus);
