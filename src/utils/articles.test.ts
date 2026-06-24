import { describe, expect, it } from 'vitest'
import { getExample, splitArticle } from './articles'

describe('article helpers', () => {
  it('splits German articles from nouns', () => {
    expect(splitArticle('der Vater')).toEqual({ article: 'der', noun: 'Vater' })
    expect(splitArticle('Deutsch')).toEqual({ article: '', noun: 'Deutsch' })
  })

  it('creates a German example for every learning category', () => {
    expect(getExample('die Mutter', 'Сім’я')).toContain('Mutter')
    expect(getExample('glücklich', 'Почуття')).toBe('Heute bin ich glücklich.')
    expect(getExample('Deutsch', 'Мови')).toContain('Deutsch')
  })
})
