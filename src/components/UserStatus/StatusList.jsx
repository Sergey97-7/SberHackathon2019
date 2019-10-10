import React, { Component } from "react";
import { connect } from "react-redux";
// import "./Sidebar.scss";
import { Menu } from "semantic-ui-react";
import { changePage } from "../../actions/app";
import { Link } from "react-router-dom";
import { userStatusDateInputChange } from "../../actions/statusAction";
import { getUnixDate } from "../../utils/tools";
import moment from "moment";
class StatusList extends Component {
  state = { activeItem: "administration" };
  menuItemHandler = (e, name) => {
    console.log("name::::1", e);
    console.log("name::::2", name);
    changePage(e, name);
    // this.setState({ activeItem: name })

    // user.map((req, i) => {
    //   return {
    //     key: i,
    //     value: getUnixDate(req.measurementTime),
    //     text: moment(getUnixDate(req.measurementTime)).format(
    //       "DD-MM-YYYY, HH:mm:ss"
    //     )
    //   };
    // });
  };
  render() {
    const { activeItem } = this.state;
    const { currentPage, changePage, pathname, user, currentDate, userStatusDateInputChange } = this.props;

    return (
      <div className="sidebar">
        <Menu pointing vertical>
          {user.map((req, i) => {
            console.log("currentDate", currentDate)
            console.log("req", req.measurementTime)
            return (
              <Menu.Item
                key={i}
                color="blue"
                name={getUnixDate(req.measurementTime)}
                active={getUnixDate(req.measurementTime) === currentDate}
                onClick={userStatusDateInputChange}
              >
                {moment(getUnixDate(req.measurementTime)).format(
                  "DD-MM-YYYY, HH:mm:ss"
                )}
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("state", state);
  return {
    currentPage: state.app.currentPage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changePage: (e, { name }) => dispatch(changePage(name)),
    userStatusDateInputChange: (e, { name }) =>
      dispatch(userStatusDateInputChange(name))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusList);
