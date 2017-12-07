import React, { Component } from 'react'
import { Button, Label } from 'semantic-ui-react'
import { compose, withState, withHandlers, withProps } from 'recompose'
import './Item.css'

const ENG = 'Item'
const FRE = 'Article'

export default compose(
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

// export default class Item extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { description: 'Item' }
//     this.translate = this.translate.bind(this)
//   }

//   render() {
//     return (
//       <div className="Item">
//         <Label>
//           <span className="descriptionText">
//             {this.description()}: {this.props.name}!
//           </span>
//           <Button
//             toggle
//             active={this.state.translated}
//             className="translate"
//             onClick={this.translate}
//             floated="right"
//           >
//             Translate!
//           </Button>
//         </Label>
//       </div>
//     )
//   }

//   description() {
//     return this.state.translated ? FRE : ENG
//   }

//   translate() {
//     this.setState({
//       translated: !this.state.translated
//     })
//   }
// }
