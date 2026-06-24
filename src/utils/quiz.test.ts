import { describe, expect, it, vi } from 'vitest'
import { createWordRound, getOptions, isCorrectAnswer, normalize, shuffle } from './quiz'
import { words } from '../data/topics/menschen'

describe('answer validation', () => {
  it('ignores harmless whitespace, case and punctuation', () => {
    expect(isCorrectAnswer('  DER Name! ', 'der Name')).toBe(true)
    expect(isCorrectAnswer('glücklich', 'glücklich')).toBe(true)
  })
  it('does not accept misspelled words', () => {
    expect(isCorrectAnswer('der Neme', 'der Name')).toBe(false)
    expect(isCorrectAnswer('Schwester', 'die Schwester')).toBe(false)
  })
  it('normalizes German quotation and whitespace', () => {
    expect(normalize(' „Die   Frau“ ')).toBe('die frau')
  })
})

describe('quiz generation', () => {
  it('creates the requested number of unique questions', () => {
    const round = createWordRound(words, 10)
    expect(round).toHaveLength(10)
    expect(new Set(round.map(item => item.word.de)).size).toBe(10)
  })
  it('uses only typing questions on hard difficulty', () => {
    const round = createWordRound(words, 12, 'hard')
    expect(round.every((item) => item.direction === 'uk-de')).toBe(true)
  })

  it('uses multiple choice on easy difficulty', () => {
    const round = createWordRound(words, 8, 'easy')
    expect(round.every((item) => item.direction === 'de-uk')).toBe(true)
  })
  it('always includes the correct option without duplicates', () => {
    for (const word of words.slice(0, 12)) {
      const options = getOptions(word, words)
      expect(options.some(option => option.de === word.de)).toBe(true)
      expect(new Set(options.map(option => option.de)).size).toBe(options.length)
      expect(options.length).toBe(4)
    }
  })
  it('uses randomness to change ordering', () => {
    vi.spyOn(Math, 'random').mockReturnValueOnce(0).mockReturnValue(0.9)
    expect(shuffle([1, 2, 3, 4])).not.toEqual([1, 2, 3, 4])
    vi.restoreAllMocks()
  })
})
