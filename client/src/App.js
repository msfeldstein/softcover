import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import About from 'components/about'
import Profile from 'components/profile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img alt="logo" className="App-logo" src="/logo.png" />
          <Link to="/">Profile</Link>
          <Link to="/about-us">About</Link>
        </header>
        <main>
          <Route exact path="/about-us" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Profile} />
        </main>
      </div>
    );
  }
}

export default App;
