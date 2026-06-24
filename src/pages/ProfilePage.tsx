import { PageHeader } from '../components/PageHeader'
import type { MistakeRecord } from '../types/app'
import { formatStudyTime } from '../hooks/useStudyTime'

type ProfilePageProps = {
  onBack: () => void
  mistakes: MistakeRecord[]
  clearMistakes: () => void
  studySeconds: number
}

export function ProfilePage({ onBack, mistakes, clearMistakes, studySeconds }: ProfilePageProps) {
  const weakMode = mistakes[0]?.mode || 'Wortschatz'
  const plan = [
    'Täglich 15 Minuten konzentriert lernen',
    `${weakMode} gezielt wiederholen`,
    'Jeden Tag 8 schwierige Wörter schreiben',
    'Zweimal pro Woche einen Hörtest machen',
    'Am Wochenende einen gemischten Test abschließen',
  ]

  return (
    <section className="practice-page profile-page">
      <PageHeader title="Lernplan & Fehler" subtitle={`${formatStudyTime(studySeconds)} gelernt`} onBack={onBack} />

      <section className="plan-card">
        <div><span className="mini-label">DEIN LERNWEG</span><h2>Lernplan</h2><p>Der Plan passt sich automatisch an deine gespeicherten Fehler an.</p></div>
        <ol>{plan.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ol>
      </section>

      <section className="mistakes-section">
        <div className="section-heading">
          <div><span className="mini-label">AUS FEHLERN LERNEN</span><h2>Fehlertabelle</h2></div>
          {mistakes.length > 0 && <button className="text-button" onClick={clearMistakes}>Liste leeren</button>}
        </div>
        {mistakes.length === 0 ? (
          <div className="empty-state"><span>✨</span><h3>Noch keine Fehler gespeichert</h3><p>Falsche Antworten aus Tests erscheinen automatisch hier.</p></div>
        ) : (
          <div className="mistake-table">{mistakes.map((item) => <article key={item.id}><span className="mistake-mode">{item.mode}</span><div><b>{item.prompt}</b><small>Deine Antwort: <em>{item.answer}</em></small></div><div className="expected"><small>Richtig</small><b>{item.expected}</b></div><span className="mistake-count">×{item.count}</span></article>)}</div>
        )}
      </section>
    </section>
  )
}
