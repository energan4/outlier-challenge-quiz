import React from 'react'
import { shallow } from 'enzyme'
import Question from './Question'

describe('should display a text representing a question', function () {
  const question = 'What%20is%20Ron%20Weasley%27s%20middle%20name%3F'

  const wrapper = shallow(
    <Question question={question}/>
  )

  it('should decode the question text and siplay it', function () {
    expect(wrapper.find('[data-testid="question"]').text()).toEqual("What is Ron Weasley's middle name?")
  })

})