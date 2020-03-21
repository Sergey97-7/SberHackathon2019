import React, { Component } from "react";
import { Message } from "semantic-ui-react";
import "./ModalAlert.scss";
import {
  infoModal,
  warningModal,
  successModal,
  negativeModal
} from "../../constants/constants";
class ModalAlert extends Component {
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
export default ModalAlert;
