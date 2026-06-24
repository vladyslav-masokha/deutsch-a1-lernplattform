import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { ResultScreen } from '../components/ResultScreen'
import { useTopic } from '../contexts/TopicContext'
import { shuffle } from '../utils/quiz'

export function GrammarPage({ onBack, onSuccess, onMistake, onCorrect }: {
  onBack: () => void
  onSuccess: (points: number) => void
  onMistake: (prompt: string, answer: string, expected: string, mode: string) => void
  onCorrect: (prompt: string, expected: string, mode: string) => void
}) {
  const { grammarExercises } = useTopic()
  const [round, setRound] = useState(() => shuffle(grammarExercises))
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState('')
  const [checked, setChecked] = useState(false)
  const [score, setScore] = useState(0)
  const item = round[index]
  const check = () => {
    if (!selected) return
    setChecked(true)
    if (selected === item.answer) {
      setScore((v) => v + 1)
      onSuccess(15)
      onCorrect(item.question, item.answer, 'Grammatik')
    }
    else onMistake(item.question, selected, item.answer, 'Grammatik')
  }
  const next = () => { setIndex((v) => v + 1); setSelected(''); setChecked(false) }
  const restart = () => { setRound(shuffle(grammarExercises)); setIndex(0); setSelected(''); setChecked(false); setScore(0) }
  if (index >= round.length) return <ResultScreen title="Grammatik geschafft!" score={score} total={round.length} restart={restart} onBack={onBack} />
  return <section className="practice-page quiz-page">
    <PageHeader title="Grammatiktraining" subtitle="Kleine Regeln, große Wirkung" onBack={onBack} />
    <div className="quiz-progress"><i style={{ width: `${index / round.length * 100}%` }} /></div>
    <div className={`question-card ${checked && selected === item.answer ? 'success-pop' : ''}`}>
      <span className="question-number">REGEL {index + 1} VON {round.length}</span><span className="big-emoji">🧩</span>
      <p>Wähle die richtige Form</p><h3>{item.question}</h3>
      <div className="answers">{item.options.map((option) => <button disabled={checked} className={`${selected === option ? 'selected' : ''} ${checked && option === item.answer ? 'correct' : ''} ${checked && selected === option && option !== item.answer ? 'wrong' : ''}`} onClick={() => setSelected(option)} key={option}>{option}</button>)}</div>
      {checked && <div className={`grammar-note ${selected === item.answer ? 'success' : 'error'}`}><b>{selected === item.answer ? 'Richtig!' : `Richtig: ${item.answer}`}</b><span>{item.explanation}</span></div>}
      <button className="primary full" onClick={checked ? next : check}>{checked ? 'Weiter →' : 'Prüfen'}</button>
    </div>
  </section>
}
