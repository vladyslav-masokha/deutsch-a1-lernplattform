import type { CSSProperties } from 'react'

type ResultScreenProps = {
  title: string
  score: number
  total: number
  restart: () => void
  onBack: () => void
}

export function ResultScreen({ title, score, total, restart, onBack }: ResultScreenProps) {
  const percent = Math.round(score / total * 100)
  return (
    <section className="result-screen">
      <div className="result-glow" />
      <span className="trophy">{percent >= 80 ? '🏆' : percent >= 50 ? '💪' : '🌱'}</span>
      <span className="mini-label">ERGEBNIS</span>
      <h2>{title}</h2>
      <div className="score-ring" style={{ '--score': `${percent * 3.6}deg` } as CSSProperties}>
        <b>{score}/{total}</b><small>{percent}%</small>
      </div>
      <p>{percent >= 80 ? 'Beeindruckend! Die Wörter sitzen schon richtig gut.' : 'Jeder Versuch bringt dich deinem Deutschziel näher.'}</p>
      <div className="hero-actions">
        <button className="primary" onClick={restart}>Neuer Zufallstest</button>
        <button className="secondary" onClick={onBack}>Zur Startseite</button>
      </div>
    </section>
  )
}
