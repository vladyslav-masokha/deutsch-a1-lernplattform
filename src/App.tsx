import { useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { MobileNav } from './components/MobileNav'
import { TopicSelector } from './components/TopicSelector'
import { TopicProvider } from './contexts/TopicContext'
import { loadTopic } from './data/topics/registry'
import { useProgress } from './hooks/useProgress'
import { useStudyTime } from './hooks/useStudyTime'
import { DialoguesPage } from './pages/DialoguesPage'
import { GrammarPage } from './pages/GrammarPage'
import { HomePage } from './pages/HomePage'
import { LearnPage } from './pages/LearnPage'
import { ListeningQuizPage } from './pages/ListeningQuizPage'
import { ProfilePage } from './pages/ProfilePage'
import { RulesPage } from './pages/RulesPage'
import { SentenceQuizPage } from './pages/SentenceQuizPage'
import { SentenceBuilderPage } from './pages/SentenceBuilderPage'
import { WordQuizPage } from './pages/WordQuizPage'
import type { View } from './types/app'
import type { TopicData } from './types/topic'

function App() {
  const [view, setView] = useState<View>('home')
  const [topic, setTopic] = useState<TopicData | null>(null)
  const [loadingTopic, setLoadingTopic] = useState<string | null>(null)
  const studySeconds = useStudyTime()
  const { learned, streak, dailyTasks, mistakes, recordSuccess, recordMistake, resolveMistake, recordTask, clearMistakes } = useProgress()
  const goHome = () => setView('home')
  const chooseTopic = async (id: string) => {
    setLoadingTopic(id)
    try {
      setTopic(await loadTopic(id))
      setView('home')
    } finally {
      setLoadingTopic(null)
    }
  }

  if (!topic && view === 'rules') {
    return (
      <div className="topic-selector rules-shell">
        <div className="selector-glow" />
        <header className="selector-header">
          <div className="brand selector-brand"><span className="brand-mark">A1</span><span>Deutsch <b>lernen</b></span></div>
          <nav className="selector-nav" aria-label="Startnavigation">
            <button onClick={() => setView('home')}>THEMEN</button>
            <span className="selector-step active">REGELN</span>
          </nav>
        </header>
        <RulesPage onBack={() => setView('home')} />
        <Footer />
      </div>
    )
  }

  if (!topic) return <TopicSelector loadingId={loadingTopic} onSelect={chooseTopic} onRules={() => setView('rules')} />

  return (
    <TopicProvider topic={topic}>
      <div className="app-shell">
        <Header streak={streak} navigate={setView} changeTopic={() => setTopic(null)} />
        <main>
          {view === 'home' && <HomePage learned={learned.filter((item) => topic.words.some((word) => word.de === item)).length} streak={streak} dailyTasks={dailyTasks} mistakes={mistakes} studySeconds={studySeconds} navigate={setView} />}
          {view === 'learn' && <LearnPage onBack={goHome} onLearn={recordSuccess} learned={learned} />}
          {view === 'wordQuiz' && <WordQuizPage onBack={goHome} onSuccess={recordSuccess} onMistake={recordMistake} onCorrect={resolveMistake} onWrittenWord={() => recordTask('writtenWords')} />}
          {view === 'sentenceQuiz' && <SentenceQuizPage onBack={goHome} onSuccess={recordSuccess} onMistake={recordMistake} onCorrect={resolveMistake} />}
          {view === 'listeningQuiz' && <ListeningQuizPage onBack={goHome} onSuccess={recordSuccess} onMistake={recordMistake} onCorrect={resolveMistake} onComplete={() => recordTask('listeningTests')} />}
          {view === 'grammar' && <GrammarPage onBack={goHome} onSuccess={recordSuccess} onMistake={recordMistake} onCorrect={resolveMistake} />}
          {view === 'sentenceBuilder' && <SentenceBuilderPage onBack={goHome} onSuccess={recordSuccess} onMistake={recordMistake} onCorrect={resolveMistake} />}
          {view === 'dialogues' && <DialoguesPage onBack={goHome} onSuccess={recordSuccess} />}
          {view === 'profile' && <ProfilePage onBack={goHome} mistakes={mistakes} clearMistakes={clearMistakes} studySeconds={studySeconds} />}
        </main>
        <Footer />
        <MobileNav view={view} navigate={setView} />
      </div>
    </TopicProvider>
  )
}

export default App
