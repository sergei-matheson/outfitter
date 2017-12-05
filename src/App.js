import React from 'react'
import './App.css'

import EquipmentList from './EquipmentList'

const App = () => {
  return (
    <div className="App">
      <EquipmentList name="Warlock" />
      <EquipmentList name="Titan" />
    </div>
  )
}
export default App
