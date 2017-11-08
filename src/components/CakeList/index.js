import React from 'react';
import { connect } from 'react-redux'

import CakeListView from './views/CakeListView'
import selector from './selector'
import actions from './actions'

export const CakeList = (props) => (
  <CakeListView {...props} />
)
export default connect(selector, actions)(CakeList)
