import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, Header, Divider } from "semantic-ui-react";
import "./UserStatus.scss";
// import "./UserStatus.css";
// import "./DatePicker.scss";
import "./DatePicker.css";
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
import { DatetimePicker } from "rc-datetime-picker";
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
    const { id, email, periodFrom, periodTo } = this.props.statusForm;
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
      (email.trim() !== "" || id.trim()) &&
      periodFrom.trim() !== "" &&
      periodTo.trim() !== ""
    ) {
      // const pattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (id.trim() !== "") {
        this.props
          .userStatusFetch(
             `${this.props.app.appConfig.mainUrl}/rest/measurements/${id}`
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
        if (pattern.test(String(email).toLowerCase())) {
          // this.props.userStatusFetch("/rest/user/status", "POST", body);
          this.props
            .userStatusFetch(
              this.props.app.appConfig.mainUrl + "/rest/measurements",
              "POST",
              body
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
      }
    } else {
      this.props.changeModalAlert(true, "Заполните все поля!", 0, warningModal);
      this.setTimer(2000);
    }
  };
  onChangeReqInput = e => {
    const pattern = /^\d*$/;
    
    if (pattern.test(e.target.value)) {
      this.props.userStatusFormInputChange("id", e.target.value)
    } else {
      this.props.changeModalAlert(
        true,
        'Вводите только цифры в поле "Номер заявки"!',
        0,
        warningModal
      );
      this.setTimer(2000);
    }
   
  }
  render() {
    const { id, email, periodFrom, periodTo } = this.props.statusForm;
    const { userStatusFormInputChange } = this.props;
    return (
      <div className="status">
        <Header className="text-left" size="medium">
          Поиск
        </Header>
        <Form>
          <Form.Input
            name="number"
            value={id}
            onChange={this.onChangeReqInput}
            label="Номер заявки: "
            type="text"
          />
          <Divider horizontal>Or</Divider>
          <Form.Input
            name="email"
            value={email}
            onChange={e => userStatusFormInputChange("email", e.target.value)}
            label="Email: "
            type="email"
          />
          <div className="user-status-datepicker-container">
            <div>
              <label>Период c:</label>
              <DatetimePicker
                name="periodFrom"
                moment={moment(periodFrom)}
                onChange={moment =>
                  userStatusFormInputChange(
                    "periodFrom",
                    moment.format("YYYY-MM-DDTHH:mm:ss")
                  )
                }
              />
            </div>
            <div className="user-status-datepicker-to">
              <label>Период до:</label>
              <DatetimePicker
                name="periodTo"
                moment={moment(periodTo)}
                onChange={moment =>
                  userStatusFormInputChange(
                    "periodTo",
                    moment.format("YYYY-MM-DDTHH:mm:ss")
                  )
                }
              />
            </div>
          </div>

          <Button  onClick={this.btnUserStatusHandler} type="submit" className="user-status-search-btn">
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
    userStatusFormInputChange: (type, value) =>
      dispatch(userStatusFormInputChange(type, value)),
    changeModalAlert: (bool, msg, time, importance) =>
      dispatch(changeModalAlert(bool, msg, time, importance))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserStatus);
