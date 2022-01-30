import React from 'react'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Answers from './Answers'

let position, emitAnswerMock, correctAnswer, incorrectAnswers

describe('should display the answers and change their design after the user interaction', function () {
  beforeEach(() => {
    position = 3
    emitAnswerMock = jest.fn()
    correctAnswer = 'Bilius'
    incorrectAnswers = ['Arthur', 'John', 'Dominic']

    render(
      <Answers position={position}
        emitAnswer={emitAnswerMock}
        correctAnswer={correctAnswer}
        incorrectAnswers={incorrectAnswers}
      />
    )
  })

  it('should display the four answers', function () {
    expect(screen.getByText('Bilius')).toBeTruthy()
    expect(screen.getByText('Arthur')).toBeTruthy()
    expect(screen.getByText('John')).toBeTruthy()
    expect(screen.getByText('Dominic')).toBeTruthy()
  })

  it('should set the selected answer and correct answer buttons design after user interaction ', function () {
    const selectIncorrectAnswer = screen.getByText('Dominic')
    expect(screen.getByText('Bilius')).not.toHaveClass('bg-dark')
    expect(selectIncorrectAnswer).not.toHaveClass('border border-dark')
    fireEvent.click(selectIncorrectAnswer)
    expect(screen.getByText('Bilius')).toHaveClass('bg-dark')
    expect(selectIncorrectAnswer).toHaveClass('border border-dark')
  })

  it('should disable the answer buttons on answer select', function () {
    const selectAnswer = screen.getByText('John')
    fireEvent.click(selectAnswer)
    expect(screen.getByText('Bilius')).toHaveAttribute('disabled')
    expect(screen.getByText('Arthur')).toHaveAttribute('disabled')
    expect(screen.getByText('John')).toHaveAttribute('disabled')
    expect(screen.getByText('Dominic')).toHaveAttribute('disabled')
  })

  it('should emit answer to parent on answer select', function () {
    const selectAnswer = screen.getByText('John')
    fireEvent.click(selectAnswer)
    expect(emitAnswerMock).toHaveBeenCalledTimes(1)
  })

  it('should re-enable the answer buttons after receiving the next questions position', function () {
    cleanup()
    const nextPosition = 4
    const { rerender } = render(
      <Answers position={position}
        emitAnswer={emitAnswerMock}
        correctAnswer={correctAnswer}
        incorrectAnswers={incorrectAnswers}
      />
    )
    const selectAnswer = screen.getByText('John')
    fireEvent.click(selectAnswer)
    rerender(
      <Answers position={nextPosition}
        emitAnswer={emitAnswerMock}
        correctAnswer={correctAnswer}
        incorrectAnswers={incorrectAnswers}
      />
    )
    expect(screen.getByText('Bilius')).not.toHaveAttribute('disabled')
    expect(screen.getByText('Arthur')).not.toHaveAttribute('disabled')
    expect(screen.getByText('John')).not.toHaveAttribute('disabled')
    expect(screen.getByText('Dominic')).not.toHaveAttribute('disabled')
  })
})
