import React from 'react'

export default function Title (props) {
  let difficulty
  let position = props['position']
  let questionsNumber = props['questionsNumber']
  let category = props['category']
  switch (props['difficulty']) {
    case 'easy':
      difficulty = 1
      break
    case 'medium':
      difficulty = 2
      break
    case 'hard':
      difficulty = 3
      break
  }

  function getStarsHtml () {
    let starsHtml = []
    for (let i = 1; i < 3; i++) {
      if (i < difficulty) {
        starsHtml.push(<div key={i.toString()} className='text-dark'>&#128948;</div>)
      } else { starsHtml.push(<div key={i.toString()} className='text-muted'>&#128948;</div>) }
    }
    return starsHtml
  }

  return (
    <div className='d-flex flex-column align-items-start'>
      <p className='h2' data-testid='position'>Question {position} out of {questionsNumber}</p>
      <p className='h6 text-muted' data-testid='category'>{decodeURIComponent(category)}</p>
      <div className='d-flex' data-testid='difficulty'>
        <div className='text-dark'>&#128948;</div>
        {getStarsHtml()}
        <div className='text-muted'>&#128948;</div>
        <div className='text-muted'>&#128948;</div>
      </div>
    </div>
  )
}
