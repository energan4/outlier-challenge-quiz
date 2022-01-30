import React from 'react'

export default function Question (props) {
  return (
    <div className='py-3' >
      <h3 className='text-left' data-testid="question">{decodeURIComponent(props['question'])}</h3>
    </div>
  )
}
