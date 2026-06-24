export const splitArticle = (word: string) => {
  const match = word.match(/^(der|die|das)\s+(.+)$/i)
  if (!match) return { article: '', noun: word }
  return { article: match[1].toLowerCase(), noun: match[2] }
}

export const getExample = (de: string, category: string) => {
  const { article, noun } = splitArticle(de)
  if (category === 'Сім’я') return `Das ist ${article || 'mein'} ${noun}.`
  if (category === 'Люди') return `Das ist ${article ? `${article} ` : ''}${noun}.`
  if (category === 'Країни') return `Ich komme aus ${de === 'die Ukraine' || de === 'die Schweiz' || de === 'die Türkei' ? 'der ' + noun : de}.`
  if (category === 'Мови') return `Ich spreche ein bisschen ${de}.`
  if (category === 'Професії') return `${article === 'die' ? 'Sie' : 'Er'} arbeitet als ${noun}.`
  if (category === 'Почуття') return `Heute bin ich ${de}.`
  if (category === 'Хобі') return `In meiner Freizeit mag ich ${de}.`
  if (category === 'Räume') return `${article ? `${article[0].toUpperCase()}${article.slice(1)} ` : ''}${noun} ist in der Wohnung.`
  if (category === 'Möbel') return `${article ? `${article[0].toUpperCase()}${article.slice(1)} ` : ''}${noun} steht im Zimmer.`
  if (category === 'Dinge') return `Ich brauche ${article ? `${article} ` : ''}${noun}.`
  if (category === 'Küche') return `${article ? `${article[0].toUpperCase()}${article.slice(1)} ` : ''}${noun} ist in der Küche.`
  if (category === 'Bad') return `${article ? `${article[0].toUpperCase()}${article.slice(1)} ` : ''}${noun} ist im Bad.`
  if (category === 'Gebäude') return `In meinem Haus gibt es ${article ? `${article} ` : ''}${noun}.`
  if (category === 'Verben') return `Zu Hause muss ich oft ${de}.`
  if (category === 'Zimmer') return `Mein Zimmer ist ${de}.`
  return `Das Wort lautet: ${de}.`
}
