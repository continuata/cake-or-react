import React from 'react'
import { connect } from 'react-redux'

import AddCakeView from './views/AddCakeView'
import actions from './actions'

export const AddCake = (props) => (
  <AddCakeView {...props} />
)
export default connect(() => ({}), actions)(AddCake)
