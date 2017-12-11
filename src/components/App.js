import React from 'react'
import './App.css'
import { compose, setDisplayName } from 'recompose'

import ItemList from './ItemList'

export default compose(setDisplayName('App'))(() => (
  <div className="App">
    <ItemList />
  </div>
))
