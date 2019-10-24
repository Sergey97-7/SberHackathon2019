import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { changePage } from "../../actions/app";
import { userStatusDateInputChange } from "../../actions/statusAction";
import { getUnixDate } from "../../utils/tools";
import moment from "moment";
class StatusList extends Component {
  render() {
    const { user, userStatusDateInputChange, currentUserId } = this.props;

    return (
      <div className="curent-user-status-column-1">
        <Menu pointing vertical className="status-list">
          {user.map((req, i) => {
            return (
              <Menu.Item
                key={i}
                color="blue"
                name={String(getUnixDate(req.measurementTime))}
                id={req.id}
                active={req.id === currentUserId}
                onClick={userStatusDateInputChange}
              >
                {moment
                  .utc(req.measurementTime, "DD-MM-YYYY HH:mm:ss")
                  .local()
                  .format("DD-MM-YYYY, HH:mm:ss")}
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentPage: state.app.currentPage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changePage: (e, { name }) => dispatch(changePage(name)),
    userStatusDateInputChange: (e, { name, id }) =>
      dispatch(userStatusDateInputChange(+name, id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusList);
