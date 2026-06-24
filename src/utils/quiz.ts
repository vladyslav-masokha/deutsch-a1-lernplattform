import type { Word } from '../types/topic'
import type { Difficulty } from '../types/app'

export const shuffle = <T,>(items: T[]): T[] => {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export const normalize = (value: string) =>
  value
    .trim()
    .toLocaleLowerCase('de')
    .replace(/[„“”"'’.,!?;:()]/g, '')
    .replace(/\s+/g, ' ')

export const isCorrectAnswer = (input: string, expected: string) => normalize(input) === normalize(expected)

export const createWordRound = (allWords: Word[], count = 10, difficulty: Difficulty = 'medium') =>
  shuffle(allWords)
    .slice(0, Math.min(count, allWords.length))
    .map((word, index) => ({
      word,
      direction: difficulty === 'easy'
        ? ('de-uk' as const)
        : difficulty === 'hard'
          ? ('uk-de' as const)
          : index % 3 === 0 ? ('uk-de' as const) : ('de-uk' as const),
    }))

export const getOptions = (correct: Word, allWords: Word[]) => {
  const sameCategory = shuffle(allWords.filter((word) => word.de !== correct.de && word.category === correct.category))
  const otherCategories = shuffle(allWords.filter((word) => word.de !== correct.de && word.category !== correct.category))
  const distractors = [...sameCategory, ...otherCategories]
    .filter((word, index, array) => array.findIndex((item) => item.uk === word.uk) === index)
    .slice(0, 3)

  return shuffle([correct, ...distractors])
}
