import React from 'react'
import './Cake.css'

export default ({ children, data, selectCake }) => (
  <li className='cake-box' onClick={ selectCake.bind(this, data.id) }>
    <div className='cake-image'>
      <img src={ data.imageUrl } alt={ data.name }/>
    </div>
    <div className='cake-title'>
      <span>{ data.name }</span>
    </div>
  </li>
)

