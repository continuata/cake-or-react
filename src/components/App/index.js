import React from 'react'
import { Switch, Route } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'
import CakeList from '../CakeList/'
import CakeView from '../CakeView/'
import AddCake from '../AddCake/'

export default () => (
  <div className="App">
    <header className="App-header">
      <a href='/' className='App-link'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Cake</h1>
      </a>
    </header>
    <Switch>
      <Route exact path='/' component={ CakeList }/>
      <Route path='/add' component={ AddCake }/>
      <Route path='/cake/:cakeId' component={ CakeView }/>
    </Switch>
  </div>
)
