import { createSelector } from 'reselect'
import { get } from 'lodash/fp'

export default createSelector(
  get('cakes'),
  (cakes) => ({ cakes })
)
