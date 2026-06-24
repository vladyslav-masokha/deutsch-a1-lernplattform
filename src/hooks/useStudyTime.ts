import { useEffect, useState } from 'react'

const STORAGE_KEY = 'studyTimeSeconds'

export const useStudyTime = () => {
  const [seconds, setSeconds] = useState(() => Number(localStorage.getItem(STORAGE_KEY)) || 0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (document.visibilityState !== 'visible') return
      setSeconds((current) => {
        const next = current + 1
        localStorage.setItem(STORAGE_KEY, String(next))
        return next
      })
    }, 1000)
    return () => window.clearInterval(timer)
  }, [])

  return seconds
}

export const formatStudyTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  if (hours > 0) return `${hours} Std. ${minutes} Min.`
  if (minutes > 0) return `${minutes} Min.`
  return `${seconds} Sek.`
}
