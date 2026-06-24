import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { ResultScreen } from '../components/ResultScreen'
import { useTopic } from '../contexts/TopicContext'
import { shuffle } from '../utils/quiz'

const joinSentence = (parts: string[]) => parts.join(' ').replace(/\s+\./g, '.')

export function SentenceBuilderPage({ onBack, onSuccess, onMistake, onCorrect }: {
  onBack: () => void
  onSuccess: (points: number) => void
  onMistake: (prompt: string, answer: string, expected: string, mode: string) => void
  onCorrect: (prompt: string, expected: string, mode: string) => void
}) {
  const { sentenceBuildExercises } = useTopic()
  const [round, setRound] = useState(() => shuffle(sentenceBuildExercises))
  const [index, setIndex] = useState(0)
  const [pool, setPool] = useState(() => shuffle(round[0].words))
  const [built, setBuilt] = useState<string[]>([])
  const [checked, setChecked] = useState(false)
  const [score, setScore] = useState(0)
  const item = round[index]
  const correct = joinSentence(built) === item?.answer
  const moveToBuilt = (word: string, position: number) => { if (!checked) { setPool((v) => v.filter((_, i) => i !== position)); setBuilt((v) => [...v, word]) } }
  const moveToPool = (word: string, position: number) => { if (!checked) { setBuilt((v) => v.filter((_, i) => i !== position)); setPool((v) => [...v, word]) } }
  const check = () => {
    if (!built.length) return
    setChecked(true)
    if (correct) {
      setScore((v) => v + 1)
      onSuccess(18)
      onCorrect(item.uk, item.answer, 'Satzbau')
    }
    else onMistake(item.uk, joinSentence(built), item.answer, 'Satzbau')
  }
  const next = () => {
    const nextIndex = index + 1
    setIndex(nextIndex); setBuilt([]); setChecked(false)
    if (nextIndex < round.length) setPool(shuffle(round[nextIndex].words))
  }
  const restart = () => {
    const fresh = shuffle(sentenceBuildExercises); setRound(fresh); setIndex(0); setPool(shuffle(fresh[0].words)); setBuilt([]); setChecked(false); setScore(0)
  }
  if (index >= round.length) return <ResultScreen title="Sätze gebaut!" score={score} total={round.length} restart={restart} onBack={onBack} />
  return <section className="practice-page quiz-page">
    <PageHeader title="Sätze bauen" subtitle="Bringe die Wörter in die richtige Reihenfolge" onBack={onBack} />
    <div className="quiz-progress"><i style={{ width: `${index / round.length * 100}%` }} /></div>
    <div className={`question-card ${checked && correct ? 'success-pop' : ''}`}>
      <span className="question-number">SATZ {index + 1} VON {round.length}</span><p className="translation">{item.uk}</p>
      <div className={`sentence-dropzone ${built.length ? 'filled' : ''}`}>{built.length ? built.map((word, i) => <button onClick={() => moveToPool(word, i)} key={`${word}-${i}`}>{word}</button>) : <span>Wörter hier antippen…</span>}</div>
      <div className="word-pool">{pool.map((word, i) => <button onClick={() => moveToBuilt(word, i)} key={`${word}-${i}`}>{word}</button>)}</div>
      {checked && <div className={`feedback ${correct ? 'success' : 'error'}`}><b>{correct ? 'Perfekt gebaut!' : 'Richtiger Satz:'}</b><span>{item.answer}</span></div>}
      <button className="primary full" onClick={checked ? next : check}>{checked ? 'Weiter →' : 'Satz prüfen'}</button>
    </div>
  </section>
}
