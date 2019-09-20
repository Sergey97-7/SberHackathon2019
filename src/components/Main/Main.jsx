import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
// import { withRouter } from 'react-router-dom'
import "./Main.scss";
import {
  Button,
  Form,
  Grid,
  Message,
  Segment,
  Container,
  Rail,
  Header
} from "semantic-ui-react";
import Administration from "../Administration";
import Sidebar from "../Sidebar";
// import Header from "../Header";
import AdministrationEdit from "../Administration/AdminitrationEdit";
import AdministrationCreate from "../Administration/AdministrationCreate";
import UserStatus from "../UserStatus/UserStatus";
import CurrentUserStatus from "../UserStatus/CurrentUserStatus.2";
import { userListFetch } from "../../actions/userActions";
class Main extends Component {
  componentDidMount() {
    this.props.userListFetch("/rest/users");
    // const fetchData = async url => await (await fetch(url)).json();
    // setTimeout(()=>console.log("FETCH_DATA", fetchData), 1000)
  }
  render() {
    console.log("pro", this.props);
    return (
      /*   <Container className="main">
        <Grid columns="two" stretched={true}>
          <Grid.Row>
            <Grid.Column>
              <Sidebar />
            </Grid.Column>
            <Grid.Column>
              <Route path="/administration" component={Administration} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container> */
      <>
        <Container className="main">
          <Segment>
            <Grid columns={2} stackable textAlign="center">
              <Grid.Row className="main-segment">
                <Grid.Column width={4}>
                  <Segment className="side-menu-segment">
                    <Sidebar />
                  </Segment>
                </Grid.Column>
                <Grid.Column width={11}>
                  <Segment className="main-content-segment">
                    <Route
                      exact
                      path="/administration"
                      component={Administration}
                    />
                    <Route
                      exact
                      path="/administration/edit"
                      component={AdministrationEdit}
                    />
                    <Route
                      exact
                      path="/administration/create"
                      component={AdministrationCreate}
                    />
                    <Route exact path="/status" component={UserStatus} />
                    <Route
                      exact
                      path="/status/current-user"
                      component={CurrentUserStatus}
                    />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            {/* <Segment> */}
            {/* <Sidebar /> */}
            {/* </Segment> */}
            {/* <Segment> */}
            {/* <Route path="/administration" component={Administration} /> */}
            {/* </Segment> */}
          </Segment>
        </Container>
      </>
    );
  }
}
const mapStateToProps = state => {
  console.log("state", state);
  return {
    admin: state.administration
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userListFetch: url => dispatch(userListFetch(url))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
