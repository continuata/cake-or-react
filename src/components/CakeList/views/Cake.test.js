import React from 'react'
import ReactDOM from 'react-dom'
import Cake from './Cake'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const select = () => ({})
  const data = { id: 100 }
  ReactDOM.render(<Cake data={ data } selectCake={ select } />, div)
})
