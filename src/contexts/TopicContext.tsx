import { createContext, useContext, type ReactNode } from 'react'
import type { TopicData } from '../types/topic'

const TopicContext = createContext<TopicData | null>(null)

export function TopicProvider({ topic, children }: { topic: TopicData; children: ReactNode }) {
  return <TopicContext.Provider value={topic}>{children}</TopicContext.Provider>
}

export const useTopic = () => {
  const topic = useContext(TopicContext)
  if (!topic) throw new Error('useTopic must be used inside TopicProvider')
  return topic
}
