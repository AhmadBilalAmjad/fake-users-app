import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./containers/Users";
import Welcome from "./containers/Welcome";
import store from "./store";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: null
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ todos: users });
        console.log(users);
      });
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
