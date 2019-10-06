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
import { changeModalAlert } from "../../actions/modalAction";
class ModalAlert extends PureComponent {
  state = {
    timer: null
  };
  timer = null;
  // componentDidMount() {
  //   clearTimeout(this.timer);
  //   console.log("TIMER", this.props.timer);
  //   this.timer = setTimeout(
  //     () => {
  //       console.log("changeModalAlert2", this.props.timer);
  //       this.props.changeModalAlert(false, "", 0, "")
  //     } ,
  //     this.props.timer
  //   );
  // }
  componentDidUpdate() {
    clearTimeout(this.timer);
    console.log("TIMER", this.props.timer);
    this.timer = setTimeout(() => {
      console.log("changeModalAlert2", this.props.timer);
      this.props.changeModalAlert(false, "", 0, "");
    }, 2000);
  }
  // componentDidUpdate() {
  //   //TODO infinite call
  //   console.log("INFINITE UPDATE", this.props);
  //   clearTimeout(this.timer);
  //   this.timer = setTimeout(
  //     () => this.props.changeModalAlert(false, "", 0, ""),
  //     this.props.timer
  //   );
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
    changeModalAlert2: (bool, msg, timer, importance) =>
      dispatch(changeModalAlert(bool, msg, timer, importance))
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
