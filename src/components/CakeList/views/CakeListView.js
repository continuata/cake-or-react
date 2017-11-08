import React from 'react'
import Cake from './Cake'
import './CakeListView.css'
import { map } from 'lodash/fp'
const mapIndex = map.convert({ cap: false })

export default ({ children, ...props }) => (
  <div>
    <a href='/add'>
      <div className='button'>
        Add A Cake
      </div>
    </a>
    <ul>
    {
      mapIndex((cake, i) =>
        <Cake data={ cake } selectCake={ props.selectCake } key={ i } />
      )(props.cakes)
    }
    </ul>
  </div>
)
