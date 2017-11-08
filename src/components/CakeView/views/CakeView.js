import React from 'react'
import { flow, map, range, get } from 'lodash/fp'
import './CakeView.css'
import star from './star.png'

export default ({ children, ...props }) => (
  <div>
    <h2>Cake: { get('cake.name', props) }</h2>
    <img className='view-cake-image' src={ get('cake.imageUrl', props) } alt={ get('cake.name', props) } />
    <h3>{ get('cake.comment', props) }</h3>
    {
      flow(
        get('cake.yumFactor'),
        range(0),
        map(i => <img src={ star } className='star' alt='star' key={ i }/>)
      )(props)
    }
    <div onClick={ props.backHome }><div className='button'>Close</div></div>
  </div>
)
