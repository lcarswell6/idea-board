import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import IdeaPage from './components/idea/IdeaPage'
import LogInPage from './components/login/LogInPage'
import styled from 'styled-components'

const Navbar = styled.div`
background-color:grey;
border: 1px solid red;
margin: 1px;
display: flex;
flex-direction: row;
padding:0.5em;
`
const HomeLink = styled.div`
border: 0.2px solid white;
margin: 1px;
padding:0.3em;
`
const IdeaLink = styled.div`
border: 0.2px solid white;
margin: 1px;
padding:0.3em;
`
const LoginLink = styled.div`
border: 0.2px solid white;
margin: 1px;
padding:0.3em;
`


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar>
            <HomeLink>
              <Link to="/">Home</Link>
            </HomeLink>

<IdeaLink>
            <Link to="/idea">Idea</Link>
</IdeaLink>
<LoginLink>
            <Link to="/login">Login</Link>
  </LoginLink>
          </Navbar>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/user/:userId" component={IdeaPage} />
            <Route exact path="/login" component={LogInPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
