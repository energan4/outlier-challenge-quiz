import React from 'react'
import { shallow } from 'enzyme'
import QuizResult from './QuizResult'

describe('Quiz Result', function () {
  const currentScore = 95
  const correctAnswersNumber = 19
  const questionsNumber = 20

  const wrapper = shallow(
    <QuizResult finalScore={currentScore}
      correctAnswersNumber={correctAnswersNumber}
      questionsNumber={questionsNumber}
    />
  )
  it('should display the final score', function () {
    expect(wrapper.find('[data-testid="final-score"]').text()).toEqual('You achieved a score of 95%')
  })

  it('should display the number of correct answers out of all the questions number', function () {
    expect(wrapper.find('[data-testid="final-correct-answers"]').text()).toEqual('You answered correctly 19 questions out of 20')
  })
})
