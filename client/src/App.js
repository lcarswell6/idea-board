import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import IdeaPage from './components/idea/IdeaPage'
import LogInPage from './components/login/LogInPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <span>
              <Link to="/">Home</Link>
              <Link to="/idea">Idea</Link>
              <Link to="/login">Login</Link>
            </span>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/idea" component={IdeaPage} />
            <Route exact path="/login" component={LogInPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
