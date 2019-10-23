import React, { Component } from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import Login from "./components/Login";
import Main from "./components/Main";
import { fetchData } from "./utils/fetch";
import { getAppConfig } from "./actions/app";
import { appConfigUrl } from "./constants/constants";
class App extends Component {
  state = {
    loading: true,
    error: null
  };
  componentDidMount() {
    fetchData(appConfigUrl)
      .then(data => {
        store.dispatch(getAppConfig(data));
      }).then(()=> this.setState({ loading: false }))
      .catch(error => this.setState({ error, loading: false }));
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          {this.state.error === null || this.state.loading === false ? (
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route path="/" component={Main} />
            </Switch>
          ) : (
            <div>Ошибка в конфигурационном файле</div>
          )}
        </Router>
      </Provider>
    );
  }
}
export default App;
