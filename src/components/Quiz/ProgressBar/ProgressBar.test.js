import React from 'react'
import { shallow } from 'enzyme'
import ProgressBar from './ProgressBar'

describe('Should represent the progress of the quiz as a progress bar', function () {
  const position = 5
  const questionsNumber = 20

  const wrapper = shallow(
    <ProgressBar position={position} questionsNumber={questionsNumber}
    />
  )
  it('should display a progress bar showing the progress of the quiz with the bar width', function () {
    expect(wrapper.find('[data-testid="progress-bar"]').prop('style')).toHaveProperty('width', '25%')
  })
})
