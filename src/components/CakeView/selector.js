import { createSelector } from 'reselect'
import { get, find, split } from 'lodash/fp'

export default createSelector(
  get('cakes'),
  get('routing.location.pathname'),
  (cakes, pathname) => {
    const selectedCake = get([2], split('/', pathname))
    const cake = find({ id: selectedCake }, cakes)
    return { cake }
  }
)
