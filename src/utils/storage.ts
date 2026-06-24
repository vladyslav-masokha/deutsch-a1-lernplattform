const DAY_MS = 86_400_000

export const getLocalDateKey = (date = new Date()) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const parseDateKey = (value: string) => {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

export const calculateStreak = (activityDates: string[], now = new Date()) => {
  const dates = [...new Set(activityDates)].sort().reverse()
  if (!dates.length) return 0

  const today = parseDateKey(getLocalDateKey(now))
  const latest = parseDateKey(dates[0])
  const daysSinceLatest = Math.round((today.getTime() - latest.getTime()) / DAY_MS)
  if (daysSinceLatest > 1 || daysSinceLatest < 0) return 0

  let streak = 1
  for (let index = 1; index < dates.length; index += 1) {
    const previous = parseDateKey(dates[index - 1])
    const current = parseDateKey(dates[index])
    if (Math.round((previous.getTime() - current.getTime()) / DAY_MS) !== 1) break
    streak += 1
  }
  return streak
}

export const readStoredArray = (key: string): string[] => {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]')
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : []
  } catch {
    return []
  }
}
