import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import styles from './App.css';


import Toolbar from './Components/Toolbar/Toolbar';
import Home from './Components/Home/Home';
import Characterbox from './Components/Characterbox/Characterbox';

class App extends Component {

  testMethod(){
    console.log('test method called');
  }

  render() {
    return (
      <Router basename={"/ffcc"}>
        <div className={styles.App}>
          <Toolbar />
          <Route path="/" exact component={Home} />
          <Route path="/ff4" render={ (props) => <Characterbox {...props} /> } />
          <Route path="/ff6" render={ (props) => <Characterbox {...props} /> } />
          <Route path="/ff7" render={ (props) => <Characterbox {...props} /> } />
          <Route path="/ff9" render={ (props) => <Characterbox {...props} /> } />
        </div>
      </Router>
    );
  }
}

export default App;
