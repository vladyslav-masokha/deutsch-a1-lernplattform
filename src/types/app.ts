export type View =
  | 'home'
  | 'learn'
  | 'wordQuiz'
  | 'sentenceQuiz'
  | 'listeningQuiz'
  | 'grammar'
  | 'sentenceBuilder'
  | 'dialogues'
  | 'profile'

export type AnswerResult = {
  correct: boolean
  expected: string
  given: string
}

export type ProgressState = {
  learned: string[]
  streak: number
  dailyTasks: DailyTaskProgress
  mistakes: MistakeRecord[]
  recordSuccess: (points: number, learnedWord?: string) => void
  recordMistake: (prompt: string, answer: string, expected: string, mode: string) => void
  resolveMistake: (prompt: string, expected: string, mode: string) => void
  recordTask: (task: keyof DailyTaskProgress, amount?: number) => void
  clearMistakes: () => void
}

export type DailyTaskProgress = {
  writtenWords: number
  listeningTests: number
  resolvedMistakes: number
}

export type Difficulty = 'easy' | 'medium' | 'hard'

export type MistakeRecord = {
  id: string
  prompt: string
  answer: string
  expected: string
  mode: string
  date: string
  count: number
}
