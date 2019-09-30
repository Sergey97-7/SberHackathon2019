import React, { PureComponent, Component } from "react";
import { Message } from "semantic-ui-react";
import { connect } from "react-redux";
// import { changeModalAlert } from "../../actions/modalAction";
import "./ModalAlert.scss";
import {
  infoModal,
  warningModal,
  successModal,
  negativeModal
} from "../../constants/constants";
class ModalAlert extends PureComponent {
  timer = null;
  componentDidUpdate() {
    //TODO infinite call
    console.log("INFINITE UPDATE", this.props);
    clearTimeout(this.timer);
    this.timer = setTimeout(
      () => this.props.changeModalAlert(false, "", 0, ""),
      this.props.timer
    );
    // let a = setTimeout(console.log("CHANGE2222", this.props), 3000);
  }
  // componentDidUpdate() {
  // console.log("propsWILL", this.props);
  // clearTimeout(this.timer);
  // }
  componentWillUnmount() {
    clearTimeout(this.timer);
    this.props.changeModalAlert(false, "", 0, "");
  }
  render() {
    const { isOpen, msg, importance } = this.props;
    return (
      isOpen && (
        <div className="modal-alert">
          <Message
            info={importance === infoModal ? true : null}
            warning={importance === warningModal ? true : null}
            success={importance === successModal ? true : null}
            negative={importance === negativeModal ? true : null}
          >
            <Message.Header>{msg}</Message.Header>
          </Message>
        </div>
      )
    );
  }
}
// export default ModalAlert;
const mapStateToProps = state => {
  console.log("state", state);
  return {
    // admin: state.administration,
    // user: state.user,
    // roleAlias: state.app,
    // statusForm: state.statusForm
  };
};
const mapDispatchToProps = dispatch => {
  return {
    //   userStatusFetch: (user, type, body) =>
    //     dispatch(userStatusFetch(user, type, body)),
    //   userStatusFormInputChange: e =>
    //     dispatch(
    //       userStatusFormInputChange(
    //         e.target.getAttribute(["name"]),
    //         e.target.value
    //       )
    //     )
  };
};
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ModalAlert);
export default ModalAlert;
