import { selectedCake, add, cakes } from './index'

describe('reducers', () => {
  it('can select a cake', () => {
    const action = { type: 'SELECT_CAKE', payload: '123' }
    const newState = selectedCake('', action)
    expect(newState).toEqual('123')
  })

  it('can change a field in the form', () => {
    const action = { type: 'CHANGE_FIELD', payload: { id: 'foo', value: 'bar' } }
    const newState = add({}, action)
    expect(newState).toEqual({ foo: 'bar' })
  })

  it('can load the cakes', () => {
    const action = { type: 'CAKES_FULFILLED', payload: [{ foo: 'bar' }] }
    const newState = cakes([], action)
    expect(newState).toEqual([{ foo: 'bar' }])
  })

  it('can add a new cake to the top of the list', () => {
    const action = { type: 'ADD_CAKE_FULFILLED', payload: { bar: 'fuz' } }
    const newState = cakes([{ foo: 'bar' }], action)
    expect(newState).toEqual([{ bar: 'fuz' }, { foo: 'bar' }])
  })
})
