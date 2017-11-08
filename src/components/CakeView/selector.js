import { createSelector } from 'reselect'
import { get, find } from 'lodash/fp'

export default createSelector(
  get('cakes'),
  get('selectedCake'),
  (cakes, selectedCake) => ({ cake: find({ id: selectedCake }, cakes) })
)
