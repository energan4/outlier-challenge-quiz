import React from 'react'
import { combineShuffledAnswers } from './arrayUtils'

const correctAnswer = 'Bilius'
const incorrectAnswers = [
  'Arthur',
  'John',
  'Dominic'
]

describe('Display shuffled answers', () => {
  const answersInNormalOrder = [
    { text: 'Bilius', isCorrect: true },
    { text: 'Arthur', isCorrect: false },
    { text: 'John', isCorrect: false },
    { text: 'Dominic', isCorrect: false }
  ]

  it('Should combine, shuffle, and display the answers randomly', () => {
    const answers = combineShuffledAnswers(incorrectAnswers, correctAnswer)
    expect(answers.length).toEqual(4)
    expect(answersInNormalOrder).not.toMatchObject(answers)
    expect(answers.filter(answer => answer.text === 'Bilius')[0].isCorrect).toEqual(true)
    expect(answers.filter(answer => answer.text === 'Arthur')[0].isCorrect).toEqual(false)
    expect(answers.filter(answer => answer.text === 'John')[0].isCorrect).toEqual(false)
    expect(answers.filter(answer => answer.text === 'Dominic')[0].isCorrect).toEqual(false)
  })
})
