import React from 'react'
import { Button, Label } from 'semantic-ui-react'
import {
  compose,
  withState,
  withHandlers,
  withProps,
  setDisplayName
} from 'recompose'
import './Item.css'

const ENG = 'Item'
const FRE = 'Article'

export default compose(
  setDisplayName('Item'),
  withState('translated', 'updateTranslated', false),
  withHandlers({
    translate: ({ translated, updateTranslated }) => event => {
      updateTranslated(!translated)
    }
  }),
  withProps(({ translated }) => ({
    description: translated ? FRE : ENG
  }))
)(({ name, description, translated, translate }) => (
  <div className="Item">
    <Label>
      <span className="descriptionText">
        {description}: {name}!
      </span>
      <Button
        toggle
        active={translated}
        className="translate"
        onClick={translate}
        floated="right"
      >
        Translate!
      </Button>
    </Label>
  </div>
))
