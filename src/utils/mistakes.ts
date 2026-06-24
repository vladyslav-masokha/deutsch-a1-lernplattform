import type { MistakeRecord } from '../types/app'

export const removeResolvedMistake = (mistakes: MistakeRecord[], prompt: string, expected: string, mode: string) =>
  mistakes.filter((item) => !(item.prompt === prompt && item.expected === expected && item.mode === mode))
