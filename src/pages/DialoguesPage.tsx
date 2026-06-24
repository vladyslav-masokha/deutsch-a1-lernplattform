import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { useTopic } from '../contexts/TopicContext'
import { speakGerman } from '../utils/speech'

export function DialoguesPage({ onBack, onSuccess }: { onBack: () => void; onSuccess: (points: number) => void }) {
  const { dialogues } = useTopic()
  const [active, setActive] = useState(0)
  const [translation, setTranslation] = useState(false)
  const dialogue = dialogues[active]
  const playAll = () => {
    const utterance = dialogue.lines.map((line) => line.de).join(' ')
    speakGerman(utterance, 0.82)
    onSuccess(5)
  }
  return <section className="practice-page">
    <PageHeader title="Mini-Dialoge" subtitle="Deutsch für echte Situationen" onBack={onBack} />
    <div className="dialogue-tabs">{dialogues.map((item, index) => <button className={active === index ? 'active' : ''} onClick={() => setActive(index)} key={item.title}>{item.emoji} {item.title}</button>)}</div>
    <div className="dialogue-card">
      <div className="dialogue-heading"><div><span className="mini-label">DIALOG {active + 1}</span><h2>{dialogue.emoji} {dialogue.title}</h2></div><button className="listen-small" onClick={playAll}>🔊 Alles hören</button></div>
      <div className="dialogue-lines">{dialogue.lines.map((line, index) => <div className={`speech-line ${line.speaker === 'Du' ? 'user' : ''}`} key={`${line.speaker}-${index}`}><span>{line.speaker}</span><button onClick={() => speakGerman(line.de)} aria-label="Satz abspielen">🔊</button><p>{line.de}</p>{translation && <small>{line.uk}</small>}</div>)}</div>
      <button className="secondary full" onClick={() => setTranslation((v) => !v)}>{translation ? 'Übersetzung ausblenden' : 'Український переклад'}</button>
    </div>
  </section>
}
