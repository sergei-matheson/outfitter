import React from 'react'
import { compose, setDisplayName, withProps, withHandlers } from 'recompose'
import { Menu, Button } from 'semantic-ui-react'

import { isLoggedIn } from '../AuthService'

export default compose(
  setDisplayName('AuthMenu'),
  withHandlers({
    login: () => event => {
      console.log('login event:', event)
    }
  }),
  withProps(() => ({
    loggedIn: isLoggedIn()
  }))
)(({ loggedIn }) => {
  let name, content
  if (loggedIn) {
    name = 'Logout'
    content = <Button primary>Logout</Button>
  } else {
    name = 'login-signup'
    content = (
      <Button.Group>
        <Button primary>Login</Button>
        <Button secondary>Signup</Button>
      </Button.Group>
    )
  }

  return (
    <Menu.Menu position="right">
      <Menu.Item name={name}>{content}</Menu.Item>
    </Menu.Menu>
  )
})
