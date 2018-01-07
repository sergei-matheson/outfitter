import React from 'react'
import { compose, setDisplayName } from 'recompose'

export default compose(setDisplayName('Home'))(() => (
  <h1>Welcome to Outfitter</h1>
))
