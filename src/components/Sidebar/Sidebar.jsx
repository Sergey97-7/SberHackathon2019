import React, { Component } from "react";
import { connect } from "react-redux";
import "./Sidebar.scss";
import { Menu } from "semantic-ui-react";
import { changePage } from "../../actions/app";
import { Link } from "react-router-dom";
class Sidebar extends Component {
  state = { activeItem: "administration" };
  menuItemHandler = (e, name) => {
    console.log("name::::1", e)
    console.log("name::::2", name)
    changePage(e, name)
    // this.setState({ activeItem: name })
  } ;
  render() {
    const { activeItem } = this.state;
    const {currentPage, changePage} = this.props;
    return (
      <div className="sidebar">
        <Menu pointing vertical>
          {/* <Menu.Item
          color="blue"
            name="administration"
            as={Link}
            link={true}
            active={currentPage === "administration"}
            to={"/administration"}
            onClick={this.menuItemHandler}
          >
            Администрирование
          </Menu.Item>
          <Menu.Item
          color="blue"
            name="status"
            as={Link}
            link={true}
            active={currentPage === "status"}
            to={"/status"}
            // onClick={changePage}
            onClick={this.menuItemHandler}
          >
            Статусы устройств
          </Menu.Item> */}
          <Menu.Item
          color="blue"
            name="administration"
            as={Link}
            link={true}
            active={currentPage === "administration"}
            to={"/administration"}
            onClick={changePage}
          >
            Администрирование
          </Menu.Item>
          <Menu.Item
          color="blue"
            name="status"
            as={Link}
            link={true}
            active={currentPage === "status"}
            to={"/status"}
            // onClick={changePage}
            onClick={changePage}
          >
            Статусы устройств
          </Menu.Item>
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
    changePage: (e, {name}) => dispatch(changePage(name))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
