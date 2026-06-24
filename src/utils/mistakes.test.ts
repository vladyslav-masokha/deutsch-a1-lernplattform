import { describe, expect, it } from 'vitest'
import type { MistakeRecord } from '../types/app'
import { removeResolvedMistake } from './mistakes'

const mistakes: MistakeRecord[] = [
  { id: '1', prompt: 'мати', answer: 'der Mutter', expected: 'die Mutter', mode: 'Wörtertest', date: '', count: 1 },
  { id: '2', prompt: 'Das ___ meine Eltern.', answer: 'ist', expected: 'sind', mode: 'Grammatik', date: '', count: 1 },
]

describe('resolved mistakes', () => {
  it('removes the exact corrected exercise', () => {
    expect(removeResolvedMistake(mistakes, 'мати', 'die Mutter', 'Wörtertest')).toEqual([mistakes[1]])
  })

  it('does not remove a different mode or answer', () => {
    expect(removeResolvedMistake(mistakes, 'мати', 'die Mutter', 'Hören')).toEqual(mistakes)
  })
})
