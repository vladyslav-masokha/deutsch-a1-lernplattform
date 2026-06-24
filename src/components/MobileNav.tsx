import type { View } from '../types/app'

export function MobileNav({ view, navigate }: { view: View; navigate: (view: View) => void }) {
  return (
    <nav className="mobile-nav" aria-label="Hauptnavigation">
      <button className={view === 'home' ? 'active' : ''} onClick={() => navigate('home')}><span>⌂</span>Start</button>
      <button className={view === 'learn' ? 'active' : ''} onClick={() => navigate('learn')}><span>▤</span>Wörter</button>
      <button className={view.includes('Quiz') ? 'active' : ''} onClick={() => navigate('wordQuiz')}><span>✓</span>Test</button>
      <button className={view === 'profile' ? 'active' : ''} onClick={() => navigate('profile')}><span>◉</span>Plan</button>
    </nav>
  )
}
