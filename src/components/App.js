import React from 'react'
import './App.css'
import { compose, setDisplayName } from 'recompose'
import { Route, Link } from 'react-router-dom'

import { Menu } from 'semantic-ui-react'

import EquipmentList from '../containers/EquipmentList'
import Home from './Home'

export default compose(setDisplayName('App'))(() => (
  <div className="App">
    <Menu>
      <Menu.Item name="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item name="equipment-list">
        <Link to="/equipment-list">Equipment List</Link>
      </Menu.Item>
    </Menu>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/equipment-list" component={EquipmentList} />
    </main>
  </div>
))
