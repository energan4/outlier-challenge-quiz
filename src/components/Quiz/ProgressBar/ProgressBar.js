import React from 'react'

export default function ProgressBar (props) {
  const position = props['position']
  const questionsNumber = props['questionsNumber']
  const width = position / questionsNumber * 100
  return (
    <div style={{ width: 'inherit' }} className='fixed-top mt-2 mx-auto align-self-center'>
      <div className='progress w-100 align-self-center'>
        <div className='progress-bar progress-bar-animated bg-secondary progress-bar-striped'
          style={{ width: width + '%' }}
          data-testid='progress-bar'
        />
      </div>
    </div>
  )
}
