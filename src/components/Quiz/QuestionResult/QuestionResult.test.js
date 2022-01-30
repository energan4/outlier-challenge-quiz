import React from 'react'
import { shallow } from 'enzyme'
import QuestionResult from './QuestionResult'

describe('Question Result', function () {
  const setNextQuestionMock = jest.fn()
  let isLastQuestion = false
  let isCorrectAnswer = true

  let wrapperOne = shallow(
    <QuestionResult isLastQuestion={isLastQuestion}
      isCorrectAnswer={isCorrectAnswer}
      setNextQuestion={setNextQuestionMock}
    />
  )

  it('should display that the answer was correct', function () {
    expect(wrapperOne.find('[data-testid="question-outcome"]').text()).toEqual('Correct!')
  })

  it('should display the button text next question', function () {
    expect(wrapperOne.find('[data-testid="next-finish-button"]').text()).toEqual('Next Question')
  })

  isLastQuestion = true
  isCorrectAnswer = false
  let wrapperTwo = shallow(
    <QuestionResult isLastQuestion={isLastQuestion}
      isCorrectAnswer={isCorrectAnswer}
      setNextQuestion={setNextQuestionMock}
    />
  )

  it('should display that the answer was correct', function () {
    expect(wrapperTwo.find('[data-testid="question-outcome"]').text()).toEqual('Sorry!')
  })

  it('should display the button text next question', function () {
    expect(wrapperTwo.find('[data-testid="next-finish-button"]').text()).toEqual('Finish')
  })
})
