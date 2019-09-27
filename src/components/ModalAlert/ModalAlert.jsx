import React, { Component } from "react";
import { Message } from "semantic-ui-react";
import { connect } from "react-redux";
import { changeModalAlert } from "../../actions/modalAction";
import "./ModalAlert.scss";
class ModalAlert extends Component {
  render() {
    const { isOpen, msg, importance } = this.props;
    return (
      isOpen && (
        <div className="modal-alert">
          <Message importance={importance}>
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
    admin: state.administration,
    user: state.user,
    roleAlias: state.app,
    statusForm: state.statusForm
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalAlert);
