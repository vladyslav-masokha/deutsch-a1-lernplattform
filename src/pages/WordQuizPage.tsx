import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { ResultScreen } from '../components/ResultScreen'
import { useTopic } from '../contexts/TopicContext'
import type { AnswerResult } from '../types/app'
import { createWordRound, isCorrectAnswer } from '../utils/quiz'

export function WordQuizPage({ onBack, onSuccess, onMistake, onCorrect, onWrittenWord }: {
  onBack: () => void
  onSuccess: (points: number, word?: string) => void
  onMistake: (prompt: string, answer: string, expected: string, mode: string) => void
  onCorrect: (prompt: string, expected: string, mode: string) => void
  onWrittenWord: () => void
}) {
  const { words } = useTopic()
  const [round, setRound] = useState(() => createWordRound(words, 15, 'hard'))
  const [index, setIndex] = useState(0)
  const [input, setInput] = useState('')
  const [result, setResult] = useState<AnswerResult | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const item = round[index]

  const check = () => {
    if (!input) return
    const expected = item.word.de
    const correct = isCorrectAnswer(input, expected)
    setResult({ correct, expected, given: input })
    if (correct) {
      setScore((current) => current + 1)
      onSuccess(10, item.word.de)
      onCorrect(item.word.uk, expected, 'Wörtertest')
      onWrittenWord()
    }
    else onMistake(item.word.uk, input, expected, 'Wörtertest')
  }
  const advance = () => {
    if (index === round.length - 1) setFinished(true)
    else { setIndex((current) => current + 1); setInput(''); setResult(null) }
  }
  const restart = () => {
    setRound(createWordRound(words, 15, 'hard')); setIndex(0); setInput(''); setResult(null); setScore(0); setFinished(false)
  }

  if (finished) return <ResultScreen title="Test abgeschlossen!" score={score} total={round.length} restart={restart} onBack={onBack} />
  return <section className="practice-page quiz-page">
    <PageHeader title="Wörtertest" subtitle="Schwer · genaue Schreibweise mit Artikel" onBack={onBack} />
    <div className="quiz-progress"><i style={{ width: `${index / round.length * 100}%` }} /></div>
    <div className={`question-card ${result?.correct ? 'success-pop' : ''}`}>
      <span className="question-number">AUFGABE {index + 1} VON {round.length}</span>
      <span className="big-emoji">{item.word.emoji}</span>
      <p>Schreibe das deutsche Wort vollständig</p><h3>{item.word.uk}</h3>
      <input autoFocus value={input} disabled={!!result} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && (result ? advance() : check())} placeholder="Antwort mit Artikel eingeben…" />
      {result && <div className={`feedback ${result.correct ? 'success' : 'error'}`}><b>{result.correct ? 'Sehr gut! Richtig.' : 'Die richtige Antwort:'}</b><span>{result.expected}</span></div>}
      <button className="primary full" onClick={result ? advance : check}>{result ? 'Weiter →' : 'Prüfen'}</button>
    </div>
  </section>
}
