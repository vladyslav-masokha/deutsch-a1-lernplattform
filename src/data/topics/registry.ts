import type { TopicData, TopicMeta } from '../../types/topic'

export const topics: TopicMeta[] = [
  {
    id: 'menschen',
    title: 'Menschen und',
    subtitle: 'persönliche Wörter',
    description: 'Personen, Familie, Länder, Sprachen, Berufe, Gefühle und Hobbys.',
    emoji: '👋',
    accent: 'purple',
    available: true,
  },
  {
    id: 'haus',
    title: 'Haus und',
    subtitle: 'Wohnen',
    description: 'Räume, Möbel, Küche, Bad und Dinge zu Hause.',
    emoji: '🏠',
    accent: 'orange',
    available: true,
  },
  {
    id: 'essen',
    title: 'Essen und',
    subtitle: 'Trinken',
    description: 'Getränke, Obst, Gemüse, Lebensmittel, Restaurant und Supermarkt.',
    emoji: '🍽️',
    accent: 'green',
    available: false,
  },
  {
    id: 'alltag',
    title: 'Alltag und',
    subtitle: 'wichtige Verben',
    description: 'Tagesablauf, Kurs, Arbeit, Bewegung, Kommunikation und Modalverben.',
    emoji: '⏰',
    accent: 'blue',
    available: false,
  },
]

const topicLoaders: Record<string, () => Promise<{ default: TopicData }>> = {
  menschen: () => import('./menschen'),
  haus: () => import('./haus'),
}

export const loadTopic = async (id: string) => {
  const loader = topicLoaders[id]
  if (!loader) throw new Error(`Topic "${id}" is not available`)
  return (await loader()).default
}
