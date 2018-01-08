import React from 'react'
import './App.css'
import { compose, setDisplayName } from 'recompose'
import { Route, Link } from 'react-router-dom'
import Loadable from 'react-loadable'
import { Menu } from 'semantic-ui-react'

import Loading from './Loading'

// Asynchronously loaded route components for code splitting.
const AsyncHome = Loadable({
  loader: () => import('./Home'),
  loading: Loading
})
const AsyncEquipmentList = Loadable({
  loader: () => import('../containers/EquipmentList'),
  loading: Loading
})

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
