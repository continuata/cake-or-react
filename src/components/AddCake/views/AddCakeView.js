import React from 'react'
import './AddCakeView.css'
import { property } from 'lodash/fp'

const changeField = (props, evt) => {
  props.changeField(property('target', evt))
}

export default ({ children, ...props }) => (
  <div>
    <h2>Add Cake</h2>
    <div className='row'>
      <div className='label'><span>Image URL:</span></div>
      <input id='imageUrl' onChange={ changeField.bind(this, props) } />
    </div>
    <div className='row'>
      <div className='label'><span>Cake Name:</span></div>
      <input id='name' onChange={ changeField.bind(this, props) } />
    </div>
    <div className='row'>
      <div className='label'><span>Comment:</span></div>
      <input id='comment' onChange={ changeField.bind(this, props) } />
    </div>
    <div className='row'>
      <div className='label'><span>Yum Factor:</span></div>
      <input id='yumFactor' onChange={ changeField.bind(this, props) } />
    </div>
    <div className='button' onClick={ props.addCake }>Add Cake</div>
    <div className='cancel-link' onClick={ props.backHome }>Cancel</div>
  </div>
)
