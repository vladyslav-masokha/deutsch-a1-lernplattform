import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { ArticleWord } from '../components/ArticleWord'
import { useTopic } from '../contexts/TopicContext'
import type { Category } from '../types/topic'
import { getExample } from '../utils/articles'
import { speakGerman } from '../utils/speech'

type LearnPageProps = {
  onBack: () => void
  onLearn: (points: number, word?: string) => void
  learned: string[]
}

export function LearnPage({ onBack, onLearn, learned }: LearnPageProps) {
  const { categories, categoryLabels, words } = useTopic()
  const learnedInTopic = learned.filter((item) => words.some((word) => word.de === item)).length
  const [category, setCategory] = useState<Category>(categories[0])
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const categoryWords = words.filter((word) => word.category === category)
  const word = categoryWords[index % categoryWords.length]

  const selectCategory = (nextCategory: Category) => {
    setCategory(nextCategory)
    setIndex(0)
    setFlipped(false)
  }

  const next = () => {
    onLearn(2, word.de)
    setIndex((current) => (current + 1) % categoryWords.length)
    setFlipped(false)
  }

  return (
    <section className="practice-page">
      <PageHeader title="Wortschatzkarten" subtitle={`${learnedInTopic} Wörter bereits gelernt`} onBack={onBack} />
      <div className="chips">
        {categories.map((item) => <button key={item} className={item === category ? 'active' : ''} onClick={() => selectCategory(item)}>{categoryLabels[item]}</button>)}
      </div>
      <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped((current) => !current)}>
        <span className="card-count">{index + 1} / {categoryWords.length}</span>
        <span className="big-emoji">{word.emoji}</span>
        <span className="language">{flipped ? 'UKRAINISCHE ÜBERSETZUNG' : 'DEUTSCH'}</span>
        <h3>{flipped ? word.uk : <ArticleWord word={word.de} />}</h3>
        <p>{flipped ? word.de : 'Antippen, um die Übersetzung zu sehen'}</p>
        <button className="card-audio" onClick={(event) => { event.stopPropagation(); speakGerman(word.de) }} aria-label="Aussprache anhören">🔊</button>
        <div className="word-example"><small>BEISPIEL</small><span>{getExample(word.de, word.category)}</span></div>
      </div>
      <div className="card-controls">
        <button className="secondary" onClick={() => setIndex((index - 1 + categoryWords.length) % categoryWords.length)}>← Zurück</button>
        <button className="primary" onClick={next}>Dieses Wort kann ich ✓</button>
      </div>
    </section>
  )
}
