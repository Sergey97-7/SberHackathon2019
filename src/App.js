import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import Login from "./components/Login";
import Main from "./components/Main";
function App(props) {
  console.log("this.props", props);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
