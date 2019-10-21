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
import ModalAlert from "./components/ModalAlert";
class App extends Component {
  state = {
    error: null
  };
  componentDidMount() {
    fetchData(appConfigUrl)
      .then(data => store.dispatch(getAppConfig(data)))
      .catch(error => this.setState({ error }));
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          {this.state.error === null ? (
            
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route path="/" component={Main} />
            </Switch>
          ) : <div>Ошибка в конфигурационном файле</div>}
        </Router>
      </Provider>
    );
  }
}
export default App;
