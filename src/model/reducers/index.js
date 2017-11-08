import createReducer from 'redux-action-reducer'
import { combineReducers } from 'redux'
import { set, get, constant } from 'lodash/fp'

export const cakes = createReducer(
  ['CAKES_FULFILLED'],
  ['ADD_CAKE_FULFILLED', (state, payload) => {
    return [ payload, ...state ]
  }]
)([])

export const add = createReducer(
  ['RESET_FORM', constant({})],
  ['CHANGE_FIELD', (state, payload) => {
    const id = get('id', payload)
    const value = get('value', payload)
    return set([id], value, state)
  }]
)({})

export const selectedCake = createReducer('SELECT_CAKE')('')

export default combineReducers({
  add,
  cakes,
  selectedCake
})
