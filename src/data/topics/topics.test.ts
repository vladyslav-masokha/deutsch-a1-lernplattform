import { describe, expect, it } from 'vitest'
import menschen from './menschen'
import haus from './haus'

describe.each([menschen, haus])('$title $subtitle topic', (topic) => {
  it('contains eight categories with eight words each', () => {
    expect(topic.categories).toHaveLength(8)
    expect(topic.words).toHaveLength(64)
    for (const category of topic.categories) {
      expect(topic.words.filter((word) => word.category === category)).toHaveLength(8)
    }
  })

  it('contains complete practice content', () => {
    expect(topic.sentenceQuestions.length).toBeGreaterThanOrEqual(8)
    expect(topic.grammarExercises.length).toBeGreaterThanOrEqual(8)
    expect(topic.sentenceBuildExercises.length).toBeGreaterThanOrEqual(6)
    expect(topic.dialogues.length).toBeGreaterThanOrEqual(3)
  })

  it('has unique German vocabulary entries', () => {
    expect(new Set(topic.words.map((word) => word.de)).size).toBe(topic.words.length)
  })
})
