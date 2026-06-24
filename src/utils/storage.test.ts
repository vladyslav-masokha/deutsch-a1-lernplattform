import { describe, expect, it } from 'vitest'
import { calculateStreak, getLocalDateKey } from './storage'

describe('learning streak', () => {
  const now = new Date(2026, 5, 24, 12)

  it('starts at zero without real activity', () => {
    expect(calculateStreak([], now)).toBe(0)
  })

  it('counts one practice day only once', () => {
    expect(calculateStreak(['2026-06-24', '2026-06-24'], now)).toBe(1)
  })

  it('counts consecutive calendar days', () => {
    expect(calculateStreak(['2026-06-22', '2026-06-23', '2026-06-24'], now)).toBe(3)
  })

  it('expires after a missed full day', () => {
    expect(calculateStreak(['2026-06-20', '2026-06-21'], now)).toBe(0)
  })

  it('uses a local calendar date', () => {
    expect(getLocalDateKey(new Date(2026, 0, 5, 23, 30))).toBe('2026-01-05')
  })
})
