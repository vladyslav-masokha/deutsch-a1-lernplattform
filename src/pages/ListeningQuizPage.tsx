import { useMemo, useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { ResultScreen } from '../components/ResultScreen'
import { useTopic } from '../contexts/TopicContext'
import { getOptions, shuffle } from '../utils/quiz'
import { speakGerman } from '../utils/speech'

export function ListeningQuizPage({ onBack, onSuccess, onMistake, onCorrect, onComplete }: {
  onBack: () => void
  onSuccess: (points: number, word?: string) => void
  onMistake: (prompt: string, answer: string, expected: string, mode: string) => void
  onCorrect: (prompt: string, expected: string, mode: string) => void
  onComplete: () => void
}) {
  const { words } = useTopic()
  const count = 12
  const [round, setRound] = useState(() => shuffle(words).slice(0, count))
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState('')
  const [checked, setChecked] = useState(false)
  const [score, setScore] = useState(0)
  const word = round[index]
  const options = useMemo(() => word ? getOptions(word, words) : [], [word])

  const check = () => {
    if (!selected) return
    setChecked(true)
    if (selected === word.uk) {
      setScore((value) => value + 1)
      onSuccess(12, word.de)
      onCorrect('Hörtest 🔊', `${word.de} — ${word.uk}`, 'Hören')
    } else onMistake('Hörtest 🔊', selected, `${word.de} — ${word.uk}`, 'Hören')
  }
  const next = () => {
    if (index === round.length - 1) onComplete()
    setIndex((value) => value + 1)
    setSelected('')
    setChecked(false)
  }
  const restart = () => { setRound(shuffle(words).slice(0, count)); setIndex(0); setSelected(''); setChecked(false); setScore(0) }

  if (index >= round.length) return <ResultScreen title="Hörtest abgeschlossen!" score={score} total={round.length} restart={restart} onBack={onBack} />
  return <section className="practice-page quiz-page">
    <PageHeader title="Hörtest" subtitle="Hören, verstehen, auswählen" onBack={onBack} />
    <div className="quiz-progress"><i style={{ width: `${index / round.length * 100}%` }} /></div>
    <div className={`question-card ${checked && selected === word.uk ? 'success-pop' : ''}`}>
      <span className="question-number">AUFGABE {index + 1} VON {round.length}</span>
      <button className="listen-button" onClick={() => speakGerman(word.de)} aria-label="Wort abspielen">🔊</button>
      <h3>Was hörst du?</h3><p>Du kannst das Wort beliebig oft abspielen.</p>
      <div className="answers">{options.map((option) => <button disabled={checked} className={`${selected === option.uk ? 'selected' : ''} ${checked && option.uk === word.uk ? 'correct' : ''} ${checked && selected === option.uk && option.uk !== word.uk ? 'wrong' : ''}`} onClick={() => setSelected(option.uk)} key={option.de}>{option.uk}</button>)}</div>
      {checked && <div className={`feedback ${selected === word.uk ? 'success' : 'error'}`}><b>{selected === word.uk ? 'Richtig gehört!' : 'Das war:'}</b><span>{word.de} — {word.uk}</span></div>}
      <button className="primary full" onClick={checked ? next : check}>{checked ? 'Weiter →' : 'Prüfen'}</button>
    </div>
  </section>
}
