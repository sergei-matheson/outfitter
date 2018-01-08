import React from 'react'
import './App.css'
import { compose, setDisplayName } from 'recompose'
import { Route, Link } from 'react-router-dom'

import { Menu } from 'semantic-ui-react'

import asyncComponent from './AsyncComponent'

// Asynchronously loaded route components for code splitting.
const AsyncHome = asyncComponent(() => import('./Home'))
const AsyncEquipmentList = asyncComponent(() =>
  import('../containers/EquipmentList')
)

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
      <Route exact path="/" component={AsyncHome} />
      <Route exact path="/equipment-list" component={AsyncEquipmentList} />
    </main>
  </div>
))
