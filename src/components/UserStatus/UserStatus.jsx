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
import {
  warningModal,
  negativeModal,
  infoModal
} from "../../constants/constants";
class UserStatus extends Component {
  timer = null;
  setTimer = time => {
    clearTimeout(this.timer);
    this.timer = setTimeout(
      () => this.props.changeModalAlert(false, "", 0, infoModal),
      time
    );
  };
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
      // const pattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (pattern.test(String(email).toLowerCase())) {
        // this.props.userStatusFetch("/rest/user/status", "POST", body);
        console.log(
          "url  ",
          this.props.app.appConfig.mainUrl + "/rest/measurements"
        );
        console.log("url2  ", "/rest/measurements");
        this.props
          .userStatusFetch(
            this.props.app.appConfig.mainUrl + "/rest/measurements"
          )
          .then(data => {
            if (this.props.statusError.hasErrored) {
              this.props.changeModalAlert(
                true,
                `${
                  this.props.statusError.status
                    ? this.props.statusError.status
                    : ""
                }: ${this.props.statusError.msg.toString()}`,
                0,
                negativeModal,
                this.props.modal.timer
              );
              this.setTimer(2000);
            } else if (data.status === 204 || data.value.length === 0) {
              this.props.changeModalAlert(
                true,
                "Статусы не найдены",
                0,
                warningModal
              );
              this.setTimer(2000);
            } else {
              this.props.history.push("/status/current-user");
            }
          });
      } else {
        this.props.changeModalAlert(
          true,
          "Некорректный email!",
          0,
          warningModal
        );
        this.setTimer(2000);
      }
    } else {
      this.props.changeModalAlert(true, "Заполните все поля!", 0, warningModal);
      this.setTimer(2000);
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
  console.log("state", state);
  return {
    admin: state.administration,
    user: state.user,
    statusForm: state.statusForm,
    statusError: state.status.error,
    modal: state.modal,
    app: state.app
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
    changeModalAlert: (bool, msg, time, importance) =>
      dispatch(changeModalAlert(bool, msg, time, importance))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserStatus);
