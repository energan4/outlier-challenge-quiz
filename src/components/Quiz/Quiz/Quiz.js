import React, { useEffect, useState } from 'react'
import questionsJson from '../../../data/questions.json'
import ProgressBar from '../ProgressBar/ProgressBar'
import Question from '../Question/Question'
import Title from '../Title/Title'
import Answers from '../Answers/Answers'
import QuestionResult from '../QuestionResult/QuestionResult'
import ScoreBar from '../ScoreBar/ScoreBar'
import QuizResult from '../QuizResult/QuizResult'

export default function Quiz () {
  const questions = questionsJson
  const [currentQuestion, setCurrentQuestion] = useState(questions[0])
  const [position, setPosition] = useState(1)
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)
  const [isQuestionResultVisible, setIsQuestionResultVisible] = useState(false)
  const [isLastQuestion, setIsLastQuestion] = useState(false)
  const [isQuizFinished, setIsQuizFinished] = useState(false)
  const [correctAnswersNumber, setCorrectAnswersNumber] = useState(0)
  const [incorrectAnswersNumber, setIncorrectAnswersNumber] = useState(0)
  const [score, setScore] = useState({
    min: 0,
    current: 0,
    max: 100
  })

  useEffect(() => {
    const calculateScore = () => {
      setScore({
        min: (correctAnswersNumber / questions.length) * 100,
        current: (correctAnswersNumber / position) * 100,
        max: ((questions.length - incorrectAnswersNumber) / questions.length * 100)
      })
    }
    calculateScore()
  }, [incorrectAnswersNumber, correctAnswersNumber])

  const emitAnswer = (answer) => {
    setIsQuestionResultVisible(true)
    setIsCorrectAnswer(answer.isCorrect)
    if (answer.isCorrect) { setCorrectAnswersNumber(prev => prev + 1) } else {
      setIncorrectAnswersNumber(prev => prev + 1)
    }
    const isLastPosition = position === questions.length
    if (isLastPosition) { setIsLastQuestion(true) }
  }

  const setNextQuestion = () => {
    const isLastPosition = position === questions.length
    if (isLastPosition) { setIsQuizFinished(true) } else {
      setPosition(prev => prev + 1)
      setCurrentQuestion(questions[position])
    }
    setIsQuestionResultVisible(false)
  }
  return (
    <div style={{ width: '40%' }} className='py-5 d-flex flex-column m-auto align-items-start'>
      <ProgressBar
        position={position}
        questionsNumber={questions.length}
      />
      <Title
        position={position}
        questionsNumber={questions.length}
        difficulty={currentQuestion.difficulty}
        category={currentQuestion.category}
      />
      <Question question={currentQuestion.question} />
      <Answers position={position}
        emitAnswer={emitAnswer}
        correctAnswer={currentQuestion.correct_answer}
        incorrectAnswers={currentQuestion.incorrect_answers}
      />
      {isQuestionResultVisible &&
        <QuestionResult
          isCorrectAnswer={isCorrectAnswer}
          setNextQuestion={setNextQuestion}
          isLastQuestion={isLastQuestion}
        />
      }
      {!isQuizFinished &&
        <ScoreBar score={score} />
      }
      {isQuizFinished &&
        <QuizResult finalScore={score.current}
          correctAnswersNumber={correctAnswersNumber}
          questionsNumber={questions.length}
        />
      }
    </div>
  )
}
