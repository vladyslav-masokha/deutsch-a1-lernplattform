import { splitArticle } from '../utils/articles'

export function ArticleWord({ word }: { word: string }) {
  const { article, noun } = splitArticle(word)
  if (!article) return <>{word}</>
  return <><span className={`article article-${article}`}>{article}</span> {noun}</>
}
