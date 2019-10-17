import React, { Component } from "react";
import "./Login.scss";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Container
} from "semantic-ui-react";
class Login extends Component {
  render() {
    return (
      <div className="login-form">
        <Container>
          <Grid centered columns={2}>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                Login
              </Header>
              <Segment>
                <Form size="large">
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Email address"
                    required
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    required
                  />
                  <Button color="blue" fluid size="large">
                    Login
                  </Button>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}
export default Login;
