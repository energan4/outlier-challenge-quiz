import React from 'react'
import { shallow } from 'enzyme'
import ScoreBar from './ScoreBar'

describe('should represent the quiz on going score as a bar with min, current and max scores', function () {

  const score = {
    min: 5,
    current: 33,
    max: 90
  }

  const wrapper = shallow(
    <ScoreBar score={score} />
  )

  it('should return the current quiz score', function () {
    expect(wrapper.find('[data-testid="current-score"]').text()).toEqual('Score: 33%')
  })

  it('should return the maximum attainable quiz score', function () {
    expect(wrapper.find('[data-testid="max-score"]').text()).toEqual('Max Score: 90%')
  })

  it('should represent the minimum, current and max scores using the width of a score bar', function () {
    expect(wrapper.find('[data-testid="min-score-bar"]').prop('style')).toHaveProperty('width', '5%')
    expect(wrapper.find('[data-testid="current-score-bar"]').prop('style')).toHaveProperty('width', '28%')
    expect(wrapper.find('[data-testid="max-score-bar"]').prop('style')).toHaveProperty('width', '57%')
  })
})