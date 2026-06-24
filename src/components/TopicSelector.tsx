import { topics } from '../data/topics/registry'
import { Footer } from './Footer'

export function TopicSelector({ loadingId, onSelect }: { loadingId: string | null; onSelect: (id: string) => void }) {
  return (
    <main className="topic-selector">
      <div className="selector-glow" />
      <header className="selector-header">
        <div className="brand selector-brand"><span className="brand-mark">A1</span><span>Deutsch <b>lernen</b></span></div>
        <span className="selector-step">THEMA WÄHLEN</span>
      </header>
      <section className="selector-content">
        <span className="mini-label">WILLKOMMEN ZURÜCK</span>
        <h1>Was möchtest du<br/><em>heute lernen?</em></h1>
        <p>Wähle ein Thema. Nur die benötigten Lerninhalte werden geladen.</p>
        <div className="topic-grid">
          {topics.map((topic, index) => (
            <button
              className={`topic-card topic-${topic.accent} ${!topic.available ? 'locked' : ''}`}
              disabled={!topic.available || loadingId !== null}
              onClick={() => onSelect(topic.id)}
              key={topic.id}
            >
              <span className="topic-index">0{index + 1}</span>
              <span className="topic-emoji">{topic.emoji}</span>
              <div><h2>{topic.title}<br/><em>{topic.subtitle}</em></h2><p>{topic.description}</p></div>
              <span className="topic-status">{loadingId === topic.id ? 'Wird geladen…' : topic.available ? 'Thema starten →' : 'Bald verfügbar'}</span>
            </button>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
