import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Quiz from './Quiz.js'

let wrapper

describe('Display quiz', () => {
  beforeEach(() => {
    wrapper = render(
      <Quiz />)
  })

  it('should render the position of the first question', function () {
    expect(screen.getByTestId('position')).toHaveTextContent('Question 1 out of')
  })

  it('should render the quiz and display the first question', function () {
    expect(screen.getByTestId('question')).toHaveTextContent('What was the name of the hero in the 80s animated video game \'Dragon\'s Lair\'?')
  })

  it('should display the four question answers', () => {
    expect(wrapper.getByText('Dirk the Daring')).toBeTruthy()
    expect(wrapper.getByText('Arthur')).toBeTruthy()
    expect(wrapper.getByText('Sir Toby Belch')).toBeTruthy()
    expect(wrapper.getByText('Guy of Gisbourne')).toBeTruthy()
  })

  it('should display the next question button after selecting an answer', () => {
    const selectIncorrectAnswer = wrapper.getByText('Arthur')
    fireEvent.click(selectIncorrectAnswer)
    expect(screen.getByTestId('next-finish-button')).toHaveTextContent('Next Question')
  })

  it('should display the second question position after clicking on next question', () => {
    const selectIncorrectAnswer = wrapper.getByText('Arthur')
    fireEvent.click(selectIncorrectAnswer)
    const nextQuestionButton = screen.getByTestId('next-finish-button')
    fireEvent.click(nextQuestionButton)
    expect(screen.getByTestId('position')).toHaveTextContent('Question 2 out of')
  })

  it('should display the second question after clicking on next question', () => {
    const selectIncorrectAnswer = wrapper.getByText('Arthur')
    fireEvent.click(selectIncorrectAnswer)

    const nextQuestionButton = screen.getByTestId('next-finish-button')
    fireEvent.click(nextQuestionButton)

    expect(screen.getByTestId('question')).toHaveTextContent('What is the scientific name for modern day humans?')
  })

  it('should hide question result and next button on next question click', () => {
    const selectIncorrectAnswer = wrapper.getByText('Arthur')
    fireEvent.click(selectIncorrectAnswer)

    const nextQuestionButton = screen.getByTestId('next-finish-button')
    fireEvent.click(nextQuestionButton)

    expect(screen.queryByText('Next Question')).not.toBeInTheDocument()
    expect(screen.queryByText('Sorry!')).not.toBeInTheDocument()
  })

  it('should recalculate min score on correct answer submission', () => {
    const selectIncorrectAnswer = wrapper.getByText('Dirk the Daring')
    fireEvent.click(selectIncorrectAnswer)

    expect(screen.getByTestId('min-score-bar')).toHaveStyle('width: 5%')
  })

  it('should recalculate current score on correct answer submission', () => {
    const selectIncorrectAnswer = wrapper.getByText('Dirk the Daring')
    fireEvent.click(selectIncorrectAnswer)

    expect(screen.getByTestId('current-score-bar')).toHaveStyle('width: 95%')
  })

  it('should recalculate max score on incorrect answer submission', () => {
    const selectIncorrectAnswer = wrapper.getByText('Arthur')
    fireEvent.click(selectIncorrectAnswer)

    expect(screen.getByTestId('max-score-bar')).toHaveStyle('width: 95%')
  })
})
