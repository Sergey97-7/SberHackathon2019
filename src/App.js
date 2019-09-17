import React, { Component } from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import Login from "./components/Login";
import Main from "./components/Main";
import { fetchData } from "./utils/fetch";
import { getAppConfig } from "./actions/app";
import { appConfigUrl } from "./constants/constants";
class App extends Component {
  componentDidMount() {
    fetchData(appConfigUrl).then(data => store.dispatch(getAppConfig(data)));
  }
  render() {
    console.log("this.props", this.props);
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
}
// function App(props) {
//   console.log("this.props", props);
//   return (
//     <Provider store={store}>
//       <Router>
//         <Switch>
//           <Route exact path="/login" component={Login} />
//           <Route path="/" component={Main} />
//         </Switch>
//       </Router>
//     </Provider>
//   );
// }
export default App;
