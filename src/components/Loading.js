import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { compose, setDisplayName, setPropTypes } from 'recompose'

const defaultLoadingText = 'Loading...'

export default compose(
  setDisplayName('Loading'),
  setPropTypes({
    message: PropTypes.string,
    children: PropTypes.node
  })
)(({ message, children }) => {
  let loading = message || children || defaultLoadingText
  return (
    <Dimmer active>
      <Loader size="massive">{loading}</Loader>
    </Dimmer>
  )
})
