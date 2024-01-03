import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Home from './home'
import { Redirect, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

export default class Main extends Component {
  render() {
    return (
      <>
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Redirect from='/' to='/home'/>
      </Switch>
      </>
    )
  }
}
