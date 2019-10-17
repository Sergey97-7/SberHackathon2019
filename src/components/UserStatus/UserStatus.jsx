import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, Header } from "semantic-ui-react";
import "./UserStatus.scss";
import {
  userStatusFetch,
  userStatusFormInputChange
} from "../../actions/statusAction";
import moment from "moment";
import { changeModalAlert } from "../../actions/modalAction";
import { warningModal, negativeModal } from "../../constants/constants";
class UserStatus extends Component {
  btnUserStatusHandler = e => {
    const { email, periodFrom, periodTo } = this.props.statusForm;
    let body = {
      email,
      startTime: moment(periodFrom)
        .utcOffset("GTM -00:00")
        .format("DD-MM-YYYY HH:mm:ss"),
      endTime: moment(periodTo)
        .utcOffset("GTM -00:00")
        .format("DD-MM-YYYY HH:mm:ss")
    };
    if (
      email.trim() !== "" &&
      periodFrom.trim() !== "" &&
      periodTo.trim() !== ""
    ) {
      // this.props.userStatusFetch("/rest/user/status", "POST", body);
      this.props.userStatusFetch("/rest/measurements").then(data => {
        if (this.props.statusError.hasErrored) {
          this.props.changeModalAlert(
            true,
            `${
              this.props.statusError.status ? this.props.statusError.status : ""
            }: ${this.props.statusError.msg.toString()}`,
            2000,
            negativeModal
          );
        } else if (data.status === 204 || data.value.length === 0) {
          this.props.changeModalAlert(
            true,
            "Статусы не найдены",
            2000,
            warningModal
          );
        } else {
          this.props.history.push("/status/current-user");
        }
      });
    } else {
      this.props.changeModalAlert(
        true,
        "Заполните все поля!",
        4000,
        warningModal
      );
    }
  };
  render() {
    const { email, periodFrom, periodTo } = this.props.statusForm;
    const { userStatusFormInputChange } = this.props;
    return (
      <div className="status">
        <Header className="text-left" size="medium">
          Поиск
        </Header>
        <Form>
          <Form.Input
            name="email"
            value={email}
            onChange={userStatusFormInputChange}
            label="Email: "
            type="email"
          />
          <Form.Input
            name="periodFrom"
            value={periodFrom}
            onChange={userStatusFormInputChange}
            label="Период с:"
            type="datetime-local"
          />
          <Form.Input
            name="periodTo"
            value={periodTo}
            onChange={userStatusFormInputChange}
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

const mapStateToProps = state => {
  return {
    admin: state.administration,
    user: state.user,
    roleAlias: state.app.appConfig.roles,
    statusForm: state.statusForm,
    statusError: state.status.error
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
