import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import {Switch, Route } from "react-router-dom";
import Home from './components/Home';



 class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </>
    )
  }
}
export default App;