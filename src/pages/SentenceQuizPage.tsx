import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { ResultScreen } from '../components/ResultScreen'
import { useTopic } from '../contexts/TopicContext'
import { shuffle } from '../utils/quiz'

export function SentenceQuizPage({ onBack, onSuccess, onMistake, onCorrect }: {
  onBack: () => void
  onSuccess: (points: number) => void
  onMistake: (prompt: string, answer: string, expected: string, mode: string) => void
  onCorrect: (prompt: string, expected: string, mode: string) => void
}) {
  const { sentenceQuestions } = useTopic()
  const createSentenceRound = () => shuffle(sentenceQuestions).slice(0, 8).map((question) => ({ ...question, options: shuffle(question.options) }))
  const [round, setRound] = useState(createSentenceRound)
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState('')
  const [checked, setChecked] = useState(false)
  const [score, setScore] = useState(0)
  const question = round[index]

  const check = () => {
    if (!selected) return
    setChecked(true)
    if (selected === question.answer) {
      setScore((current) => current + 1)
      onSuccess(12)
      onCorrect(question.text, question.answer, 'Satztest')
    } else onMistake(question.text, selected, question.answer, 'Satztest')
  }

  const next = () => {
    setIndex((current) => current + 1)
    setSelected('')
    setChecked(false)
  }

  const restart = () => {
    setRound(createSentenceRound())
    setIndex(0)
    setSelected('')
    setChecked(false)
    setScore(0)
  }

  if (index >= round.length) return <ResultScreen title="Satz-Meister!" score={score} total={round.length} restart={restart} onBack={onBack} />

  return (
    <section className="practice-page quiz-page">
      <PageHeader title="Satztest" subtitle="Wörter in echtem Kontext" onBack={onBack} />
      <div className="quiz-progress"><i style={{ width: `${(index / round.length) * 100}%` }} /></div>
      <div className="question-card sentence">
        <span className="question-number">SATZ {index + 1} VON {round.length}</span>
        <span className="big-emoji">💬</span>
        <p>Ergänze die Lücke</p>
        <h3>{question.text}</h3>
        <small className="translation">{question.uk}</small>
        <div className="answers">
          {question.options.map((option) => <button disabled={checked} className={`${selected === option ? 'selected' : ''} ${checked && option === question.answer ? 'correct' : ''} ${checked && selected === option && option !== question.answer ? 'wrong' : ''}`} onClick={() => setSelected(option)} key={option}>{option}</button>)}
        </div>
        {checked && <div className={`feedback ${selected === question.answer ? 'success' : 'error'}`}><b>{selected === question.answer ? 'Richtig! Genau so.' : 'Die richtige Antwort:'}</b><span>{question.answer}</span></div>}
        <button className="primary full" onClick={checked ? next : check}>{checked ? 'Weiter →' : 'Prüfen'}</button>
      </div>
    </section>
  )
}
