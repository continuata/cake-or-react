import React from 'react';
import { connect } from 'react-redux'

import selector from './selector'
import actions from './actions'
import CakeView from './views/CakeView'

export const Cake = (props) => (
  <CakeView {...props} />
)
export default connect(selector, actions)(Cake)
