import React from 'react'
import './App.css'
import { compose, setDisplayName } from 'recompose'

import EquipmentList from './EquipmentList'

export default compose(setDisplayName('App'))(() => (
  <div className="App">
    <EquipmentList />
  </div>
))
