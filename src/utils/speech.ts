export const speakGerman = (text: string, rate = 0.88) => {
  if (!('speechSynthesis' in window)) return false
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text.replace(/^(der|die|das)\s+/i, '$1 '))
  utterance.lang = 'de-DE'
  utterance.rate = rate
  const voices = window.speechSynthesis.getVoices()
  const germanVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith('de'))
  if (germanVoice) utterance.voice = germanVoice
  window.speechSynthesis.speak(utterance)
  return true
}

export const canSpeak = () => typeof window !== 'undefined' && 'speechSynthesis' in window
