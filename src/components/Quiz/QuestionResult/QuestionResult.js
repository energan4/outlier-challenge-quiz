import React from 'react'

export default function QuestionResult (props) {
  const isCorrectAnswer = props['isCorrectAnswer']
  const isLastQuestion = props['isLastQuestion']

  const handleClick = () => {
    props.setNextQuestion()
  }

  return (
    <div className='w-100 pt-2 mb-5 d-flex flex-column align-items-center'>
      <p className='h1' data-testid='question-outcome'>{isCorrectAnswer ? 'Correct!' : 'Sorry!'}</p>
      <button className='px-5 h5 rounded-top btn border border-dark' onClick={handleClick}
        data-testid='next-finish-button'>
        {isLastQuestion ? 'Finish' : 'Next Question' }
      </button>
    </div>
  )
}
