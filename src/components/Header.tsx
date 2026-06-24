import type { View } from '../types/app'

type HeaderProps = {
  streak: number
  theme: string
  navigate: (view: View) => void
  toggleTheme: () => void
  changeTopic: () => void
}

export function Header({ streak, theme, navigate, toggleTheme, changeTopic }: HeaderProps) {
  return (
    <header className="topbar">
      <button className="brand" onClick={() => navigate('home')} aria-label="Zur Startseite">
        <span className="brand-mark">A1</span>
        <span>Deutsch <b>lernen</b></span>
      </button>
      <div className="header-actions">
        <button className="topic-switch" onClick={changeTopic}>Thema wechseln</button>
        <div className="streak" title="Aktuelle Lernserie">
          <span className="fire">🔥</span>
          <strong>{streak}</strong>
          <span className="streak-label">{streak === 1 ? ' Tag' : ' Tage'}</span>
        </div>
        <button className="icon-button" onClick={toggleTheme} aria-label="Farbschema wechseln">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <button className="icon-button profile-button" onClick={() => navigate('profile')} aria-label="Lernplan öffnen">📋</button>
      </div>
    </header>
  )
}
