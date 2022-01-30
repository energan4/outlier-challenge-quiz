import React from 'react'

export default function ScoreBar ({ score }) {
  const minScore = score.min
  const currentScore = score.current - score.min
  const maxScore = score.max - score.current

  return (
    <div style={{ width: 'inherit' }} className='fixed-bottom mx-auto mb-2 align-self-center'>
      <div className='d-flex justify-content-between'>
        <span data-testid='current-score'>Score: {Math.round(score.current)}%</span>
        <span data-testid='max-score'>Max Score: {Math.round(score.max)}%</span>
      </div>
      <div style={{ height: '25px' }} className='progress border border-dark w-100 align-self-center'>
        <div className='progress-bar bg-dark' style={{ width: minScore + '%' }} data-testid='min-score-bar' />
        <div className='progress-bar bg-secondary' style={{ width: currentScore + '%' }} data-testid='current-score-bar' />
        <div className='progress-bar bg-light' style={{ width: maxScore + '%' }} data-testid='max-score-bar'/>
      </div>
    </div>
  )
}
