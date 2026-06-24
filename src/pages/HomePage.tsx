import { formatStudyTime } from '../hooks/useStudyTime'
import { useTopic } from '../contexts/TopicContext'
import type { DailyTaskProgress, MistakeRecord, View } from '../types/app'

type HomePageProps = {
  learned: number
  streak: number
  dailyTasks: DailyTaskProgress
  mistakes: MistakeRecord[]
  studySeconds: number
  navigate: (view: View) => void
}

export function HomePage({ learned, streak, dailyTasks, mistakes, studySeconds, navigate }: HomePageProps) {
  const { id, words, title, subtitle, lesson, heroDescription, featuredWords, coursePreview } = useTopic()
  const progress = Math.round((learned / words.length) * 100)
  const weekDays = ['M', 'D', 'M', 'D', 'F']
  const weakMode = mistakes[0]?.mode || 'Wortschatz'

  return (
    <>
      <section className={`hero hero-${id}`}>
        <div className="eyebrow"><span>NIVEAU A1</span><i /> {lesson.toUpperCase()}</div>
        <h1>{title}<br/><em>{subtitle}</em></h1>
        <p>{heroDescription}</p>
        <div className="hero-actions">
          <button className="primary" onClick={() => navigate('learn')}>Jetzt lernen <span>→</span></button>
          <button className="secondary" onClick={() => navigate('wordQuiz')}>Schwerer Test</button>
        </div>
        <div className="floating-word word-one"><span>{featuredWords[0].emoji}</span><b>{featuredWords[0].de}</b><small>{featuredWords[0].uk}</small></div>
        <div className="floating-word word-two"><span>{featuredWords[1].emoji}</span><b>{featuredWords[1].de}</b><small>{featuredWords[1].uk}</small></div>
      </section>

      <section className="dashboard">
        <div className="section-heading">
          <div><span className="mini-label">DEIN FORTSCHRITT</span><h2>Guten Tag! Machen wir weiter?</h2></div>
        </div>
        <div className="stats">
          <div className="stat-card"><span className="stat-icon purple">◒</span><div><b>{progress}%</b><small>Lektion abgeschlossen</small></div><div className="progress"><i style={{ width: `${progress}%` }} /></div></div>
          <div className="stat-card"><span className="stat-icon orange">🔥</span><div><b>{streak} {streak === 1 ? 'Tag' : 'Tage'}</b><small>Aktuelle Lernserie</small></div><div className="week">{weekDays.map((day, index) => <i className={index < Math.min(streak, 5) ? 'done' : ''} key={`${day}-${index}`}>{day}</i>)}</div></div>
          <div className="stat-card"><span className="stat-icon green">✓</span><div><b>{learned} / {words.length}</b><small>Wörter gelernt</small></div><button className="text-button" onClick={() => navigate('learn')}>Wiederholen →</button></div>
        </div>
      </section>

      <section className="home-plan-section">
        <div className="study-time-card">
          <span className="study-clock">◷</span>
          <div><span className="mini-label">LERNZEIT</span><b>{formatStudyTime(studySeconds)}</b><small>Aktive Zeit auf der Lernplattform</small></div>
        </div>
        <button className="home-plan-card" onClick={() => navigate('profile')}>
          <div><span className="mini-label">DEIN LERNPLAN</span><h2>Heute: {weakMode}</h2></div>
          <ol>
            <li className={dailyTasks.writtenWords >= 8 ? 'done' : ''}><span>{dailyTasks.writtenWords >= 8 ? '✓' : '1'}</span><div>8 schwierige Wörter schreiben<small>{Math.min(dailyTasks.writtenWords, 8)} / 8</small></div></li>
            <li className={dailyTasks.listeningTests >= 1 ? 'done' : ''}><span>{dailyTasks.listeningTests >= 1 ? '✓' : '2'}</span><div>Einen Hörtest abschließen<small>{dailyTasks.listeningTests >= 1 ? 'Erledigt' : 'Offen'}</small></div></li>
            <li className={dailyTasks.resolvedMistakes >= 1 ? 'done' : ''}><span>{dailyTasks.resolvedMistakes >= 1 ? '✓' : '3'}</span><div>Fehler gezielt wiederholen<small>{dailyTasks.resolvedMistakes >= 1 ? 'Erledigt' : 'Offen'}</small></div></li>
          </ol>
          <i>Plan & Fehlertabelle öffnen →</i>
        </button>
      </section>

      <section className="courses">
        <div className="section-heading"><div><span className="mini-label">WÄHLE DEIN FORMAT</span><h2>Deine heutige Übung</h2></div></div>
        <div className="course-grid">
          <button className="course-card featured" onClick={() => navigate('learn')}><div className={`course-art ${id === 'haus' ? 'house-art' : ''}`}><span>{coursePreview.labels[0]}</span><span>{coursePreview.labels[1]}</span><strong>{coursePreview.headline}</strong><div className="people">{coursePreview.emoji}</div></div><div className="course-content"><span className="tag">LERNKARTEN</span><h3>Wörter lernen</h3><p>{words.length} Wörter aus 8 Themen</p><span className="card-arrow">↗</span></div></button>
          <button className="course-card" onClick={() => navigate('wordQuiz')}><div className="simple-art purple-art"><span>WORT</span><b>?</b><i>✓</i></div><div className="course-content"><span className="tag purple-text">SCHWER</span><h3>Wörtertest</h3><p>Nur genaue Eingabe</p><span className="card-arrow">↗</span></div></button>
          <button className="course-card" onClick={() => navigate('sentenceQuiz')}><div className="simple-art yellow-art"><span>Ich bin ___</span><b>✎</b></div><div className="course-content"><span className="tag yellow-text">IM KONTEXT</span><h3>Satztest</h3><p>Deutsch in echten Sätzen</p><span className="card-arrow">↗</span></div></button>
        </div>
      </section>

      <section className="courses academy">
        <div className="section-heading"><div><span className="mini-label">MEHR TRAINING</span><h2>Die A1 Lernwerkstatt</h2></div></div>
        <div className="feature-grid">
          <button className="feature-card listen-feature" onClick={() => navigate('listeningQuiz')}><span>🔊</span><div><small>HÖRVERSTEHEN</small><h3>Hörtest</h3><p>Höre Wörter und finde ihre Bedeutung.</p></div><i>↗</i></button>
          <button className="feature-card grammar-feature" onClick={() => navigate('grammar')}><span>🧩</span><div><small>GRAMMATIK</small><h3>Regeln trainieren</h3><p>Artikel, Verben und Satzformen.</p></div><i>↗</i></button>
          <button className="feature-card build-feature" onClick={() => navigate('sentenceBuilder')}><span>🧱</span><div><small>SATZBAU</small><h3>Sätze bauen</h3><p>Bringe Wörter in die richtige Reihenfolge.</p></div><i>↗</i></button>
          <button className="feature-card dialogue-feature" onClick={() => navigate('dialogues')}><span>💬</span><div><small>SPRECHEN</small><h3>Mini-Dialoge</h3><p>Alltagssituationen hören und lesen.</p></div><i>↗</i></button>
        </div>
      </section>
    </>
  )
}
