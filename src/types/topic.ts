export type Category = string

export type Word = {
  de: string
  uk: string
  category: Category
  emoji: string
}

export type SentenceQuestion = {
  text: string
  answer: string
  options: string[]
  uk: string
}

export type GrammarExercise = {
  question: string
  answer: string
  options: string[]
  explanation: string
}

export type SentenceBuildExercise = {
  words: string[]
  answer: string
  uk: string
}

export type Dialogue = {
  title: string
  emoji: string
  lines: { speaker: string; de: string; uk: string }[]
}

export type TopicData = {
  id: string
  title: string
  subtitle: string
  lesson: string
  heroDescription: string
  featuredWords: [Word, Word]
  coursePreview: {
    labels: [string, string]
    headline: string
    emoji: string
  }
  words: Word[]
  categories: Category[]
  categoryLabels: Record<Category, string>
  sentenceQuestions: SentenceQuestion[]
  grammarExercises: GrammarExercise[]
  sentenceBuildExercises: SentenceBuildExercise[]
  dialogues: Dialogue[]
}

export type TopicMeta = {
  id: string
  title: string
  subtitle: string
  description: string
  emoji: string
  accent: string
  available: boolean
}
