import { useState } from 'react'
import type { DailyTaskProgress, MistakeRecord, ProgressState } from '../types/app'
import { removeResolvedMistake } from '../utils/mistakes'
import { calculateStreak, getLocalDateKey, readStoredArray } from '../utils/storage'

export const useProgress = (): ProgressState => {
  const [learned, setLearned] = useState<string[]>(() => readStoredArray('learned'))
  const [activityDates, setActivityDates] = useState<string[]>(() => readStoredArray('activityDates'))
  const [mistakes, setMistakes] = useState<MistakeRecord[]>(() => {
    try { return JSON.parse(localStorage.getItem('mistakes') || '[]') } catch { return [] }
  })
  const [tasksByDay, setTasksByDay] = useState<Record<string, DailyTaskProgress>>(() => {
    try { return JSON.parse(localStorage.getItem('dailyTasks') || '{}') } catch { return {} }
  })
  const streak = calculateStreak(activityDates)
  const dailyTasks = tasksByDay[getLocalDateKey()] || { writtenWords: 0, listeningTests: 0, resolvedMistakes: 0 }

  const recordTask = (task: keyof DailyTaskProgress, amount = 1) => {
    const today = getLocalDateKey()
    setTasksByDay((current) => {
      const currentDay = current[today] || { writtenWords: 0, listeningTests: 0, resolvedMistakes: 0 }
      const next = { ...current, [today]: { ...currentDay, [task]: currentDay[task] + amount } }
      localStorage.setItem('dailyTasks', JSON.stringify(next))
      return next
    })
  }

  const recordSuccess = (_points: number, learnedWord?: string) => {
    const today = getLocalDateKey()
    setActivityDates((current) => {
      if (current.includes(today)) return current
      const next = [...current, today]
      localStorage.setItem('activityDates', JSON.stringify(next))
      return next
    })

    if (learnedWord) {
      setLearned((current) => {
        if (current.includes(learnedWord)) return current
        const next = [...current, learnedWord]
        localStorage.setItem('learned', JSON.stringify(next))
        return next
      })
    }
  }

  const recordMistake = (prompt: string, answer: string, expected: string, mode: string) => {
    setMistakes((current) => {
      const existing = current.find((item) => item.prompt === prompt && item.expected === expected)
      const next = existing
        ? current.map((item) => item.id === existing.id ? { ...item, answer, count: item.count + 1, date: new Date().toISOString() } : item)
        : [{ id: crypto.randomUUID(), prompt, answer: answer || '—', expected, mode, date: new Date().toISOString(), count: 1 }, ...current]
      localStorage.setItem('mistakes', JSON.stringify(next.slice(0, 80)))
      return next.slice(0, 80)
    })
  }

  const resolveMistake = (prompt: string, expected: string, mode: string) => {
    const wasStored = mistakes.some((item) => item.prompt === prompt && item.expected === expected && item.mode === mode)
    setMistakes((current) => {
      const next = removeResolvedMistake(current, prompt, expected, mode)
      if (next.length === current.length) return current
      localStorage.setItem('mistakes', JSON.stringify(next))
      return next
    })
    if (wasStored) recordTask('resolvedMistakes')
  }

  const clearMistakes = () => {
    setMistakes([])
    localStorage.removeItem('mistakes')
  }

  return { learned, streak, dailyTasks, mistakes, recordSuccess, recordMistake, resolveMistake, recordTask, clearMistakes }
}
