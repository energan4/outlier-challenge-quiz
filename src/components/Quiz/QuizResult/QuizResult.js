import React from 'react'

export default function QuizResult (props) {
  const finalScore = props['finalScore']
  const correctAnswersNumber = props['correctAnswersNumber']
  const questionsNumber = props['questionsNumber']

  return (
    <div className='w-100 py-3'>
      <h3 data-testid='final-score'>You achieved a score of {Math.round(finalScore)}%</h3>
      <h3 data-testid='final-correct-answers'>You answered correctly {correctAnswersNumber} questions out of {questionsNumber}</h3>
    </div>
  )
}
