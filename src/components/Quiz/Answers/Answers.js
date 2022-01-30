import React, { useEffect, useState } from 'react'
import { combineShuffledAnswers } from '../../../utils/arrayUtils'

export default function Answers (props) {
  const [isDisabled, setIsDisabled] = useState(false)
  const [position, setPosition] = useState(1)
  const [answers, setAnswers] = useState([])
  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const isNotSamePosition = position !== props['position']
  if (isNotSamePosition) { setPosition(props['position']) }

  useEffect(() => {
    setAnswers(combineShuffledAnswers(props['incorrectAnswers'], props['correctAnswer']))
    setIsDisabled(false)
  }, [position])

  const emitAnswer = (answer) => {
    setIsDisabled(true)
    setSelectedAnswer(answer.text)
    setCorrectAnswer(props['correctAnswer'])
    props.emitAnswer(answer)
  }

  const correctAnswerButtonClass = (answer) => {
    return correctAnswer === answer
      ? 'bg-dark text-light'
      : selectedAnswer === answer
        ? 'border border-dark'
        : ''
  }

  return (
    <div className='container'>
      <div className='row'>
        {answers.map((answer, i) => (
          <div key={i.toString()} className='w-50'>
            <button disabled={isDisabled}
              style={{ width: '90%' }}
              className={'my-4 border bg-light rounded-top btn h6 ' + correctAnswerButtonClass(answer.text)}
              onClick={() => emitAnswer(answer)}>
              {decodeURIComponent(answer.text)}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
