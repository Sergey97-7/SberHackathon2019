import React, { Component } from "react";
import { connect } from "react-redux";
import "./Sidebar.scss";
import { Menu } from "semantic-ui-react";
import { changePage } from "../../actions/app";
import { Link } from "react-router-dom";
class Sidebar extends Component {
  menuItemHandler = (e, { name }) => {
    console.log("name: ", name);
    // this.props.changePage(e.target.name);
  };
  render() {
    // const { app } = this.props;
    const app = "administration";
    return (
      <div className="sidebar">
        <Menu pointing vertical>
          <Menu.Item
            name="Администрирование"
            as={Link}
            link={true}
            active={app === "administration"}
            to={"/administration"}
          />
          <Menu.Item
            name="Статусы устройств"
            as={Link}
            link={true}
            active={app === "status"}
            to={"/status"}
          />
          {/* <Link
            className={`${app === "administration" ? "active" : ""} link item`}
            to={"/administration"}
          >
            Administration
          </Link>
          <Link
            className={`${app === "status" ? "active" : ""} link item`}
            to={"/status"}
          >
            Device statuses
          </Link> */}
        </Menu>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("state", state);
  return {
    app: state.app
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changePage: name => dispatch(changePage(name))
    // dispatching plain actions
    // increment: () => dispatch({ type: "INCREMENT" }),
    // decrement: () => dispatch({ type: "DECREMENT" }),
    // reset: () => dispatch({ type: "RESET" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
