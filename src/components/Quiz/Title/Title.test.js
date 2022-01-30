import React from 'react'
import { shallow } from 'enzyme'
import Title from './Title'

describe('Question position, category and difficulty', function () {
  const position = 3
  const questionsNumber = 20
  const difficulty = 'hard'
  const category = 'Entertainment%3A%20Books'

  const wrapper = shallow(
    <Title position={position}
      questionsNumber={questionsNumber}
      difficulty={difficulty}
      category={category}
    />
  )

  it('should display the positon of the question', function () {
    expect(wrapper.find('[data-testid="position"]').text()).toEqual('Question 3 out of 20')
  })

  it('should decode and display category name', function () {
    expect(wrapper.find('[data-testid="category"]').text()).toEqual('Entertainment: Books')
  })

  it('should return three colored black stars for the difficulty hard', function () {
    const difficultyContainer = wrapper.find('[data-testid="difficulty"]')
    expect(difficultyContainer.find('.text-dark')).toHaveLength(3)
  })
})
