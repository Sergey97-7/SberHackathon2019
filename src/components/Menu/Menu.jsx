import React, { Component } from "react";
import { connect } from "react-redux";
import "./Menu.scss";
import { Menu } from "semantic-ui-react";
import { changePage } from "../../actions/app";
import { Link } from "react-router-dom";
class Sidebar extends Component {
  state = { activeItem: "administration" };
  menuItemHandler = (e, name) => {
    console.log("name::::1", e);
    console.log("name::::2", name);
    changePage(e, name);
    // this.setState({ activeItem: name })
  };
  render() {
    const { activeItem } = this.state;
    const { currentPage, changePage, pathname } = this.props;

    return (
      <div className="menu">
        <Menu pointing>
          {/* <Menu.Item
            color="blue"
            name="administration"
            as={Link}
            link={true}
            active={pathname.startsWith("/administration")}
            to={"/administration"}
            onClick={changePage}
          >
            Администрирование
          </Menu.Item> */}
          <Menu.Item
            color="blue"
            name="status"
            as={Link}
            link={true}
            active={pathname.startsWith("/status")}
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
    changePage: (e, { name }) => dispatch(changePage(name))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
