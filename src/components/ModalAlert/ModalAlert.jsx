import React, { PureComponent, Component } from "react";
import { Message } from "semantic-ui-react";
import "./ModalAlert.scss";
import {
  infoModal,
  warningModal,
  successModal,
  negativeModal
} from "../../constants/constants";
import { changeModalAlert } from "../../actions/modalAction";
class ModalAlert extends Component {
  state = {
    timer: null,
    isOpen: false
  };
  timer = null;
  componentDidMount() {
    // clearTimeout(this.timer);
    console.log("TIMER", this.props.timer);
    // this.timer = setTimeout(() => {
    //   console.log("changeModalAlert2", this.props.timer);
    //   this.props.changeModalAlert(false, "", 0, "");
    // }, 2000);
  }
  // componentDidUpdate() {
  //   //TODO infinite call
  //   console.log("INFINITE UPDATE", this.props);
  //   // clearTimeout(this.timer);
  //   this.timer = setTimeout(
  //     () => this.props.changeModalAlert(false, "", 0, ""),
  //     this.props.timer
  //   );
  // }
  // componentWillUnmount() {
  //   clearTimeout(this.timer);
  //   this.props.changeModalAlert(false, "", 0, "");
  // }
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
const mapStateToProps = state => {
  console.log("state", state);
  return {
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeModalAlert2: (bool, msg, time, importance) =>
      dispatch(changeModalAlert(bool, msg, time, importance))
  };
};
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ModalAlert);
export default ModalAlert;
