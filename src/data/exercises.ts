export const grammarExercises = [
  { question: '___ Vater heißt Thomas.', answer: 'Mein', options: ['Mein', 'Meine', 'Meinen'], explanation: '„Vater“ ist maskulin: mein Vater.' },
  { question: 'Das ist ___ Mutter.', answer: 'meine', options: ['mein', 'meine', 'meinen'], explanation: '„Mutter“ ist feminin: meine Mutter.' },
  { question: 'Ich ___ aus der Ukraine.', answer: 'komme', options: ['komme', 'kommt', 'kommen'], explanation: 'Mit „ich“ lautet die Form „komme“.' },
  { question: 'Wir ___ Deutsch.', answer: 'lernen', options: ['lerne', 'lernt', 'lernen'], explanation: 'Mit „wir“ steht der Infinitiv: lernen.' },
  { question: 'Anna ___ müde.', answer: 'ist', options: ['bin', 'bist', 'ist'], explanation: 'Für „sie/Anna“ verwendet man „ist“.' },
  { question: '___ du gern Musik?', answer: 'Hörst', options: ['Höre', 'Hörst', 'Hört'], explanation: 'Mit „du“ endet das Verb meistens auf -st.' },
  { question: 'Das ___ meine Eltern.', answer: 'sind', options: ['bin', 'ist', 'sind'], explanation: '„Eltern“ ist Plural: sie sind.' },
  { question: 'Er ist ___ Arzt.', answer: 'ein', options: ['ein', 'eine', 'einen'], explanation: 'Nach „sein“ steht der Nominativ: ein Arzt.' },
]

export const sentenceBuildExercises = [
  { words: ['Ich', 'heiße', 'Alex', '.'], answer: 'Ich heiße Alex.', uk: 'Мене звати Алекс.' },
  { words: ['Meine', 'Mutter', 'ist', 'Lehrerin', '.'], answer: 'Meine Mutter ist Lehrerin.', uk: 'Моя мама — вчителька.' },
  { words: ['Wir', 'sprechen', 'Deutsch', '.'], answer: 'Wir sprechen Deutsch.', uk: 'Ми розмовляємо німецькою.' },
  { words: ['Ich', 'komme', 'aus', 'der', 'Ukraine', '.'], answer: 'Ich komme aus der Ukraine.', uk: 'Я з України.' },
  { words: ['Am', 'Wochenende', 'spiele', 'ich', 'Fußball', '.'], answer: 'Am Wochenende spiele ich Fußball.', uk: 'На вихідних я граю у футбол.' },
  { words: ['Mein', 'Bruder', 'ist', 'hungrig', '.'], answer: 'Mein Bruder ist hungrig.', uk: 'Мій брат голодний.' },
]

export const dialogues = [
  {
    title: 'Sich vorstellen',
    emoji: '👋',
    lines: [
      { speaker: 'Mia', de: 'Hallo! Wie heißt du?', uk: 'Привіт! Як тебе звати?' },
      { speaker: 'Du', de: 'Ich heiße Alex. Und du?', uk: 'Мене звати Алекс. А тебе?' },
      { speaker: 'Mia', de: 'Ich heiße Mia. Woher kommst du?', uk: 'Мене звати Мія. Звідки ти?' },
      { speaker: 'Du', de: 'Ich komme aus der Ukraine.', uk: 'Я з України.' },
    ],
  },
  {
    title: 'Über die Familie',
    emoji: '👨‍👩‍👧',
    lines: [
      { speaker: 'Ben', de: 'Hast du Geschwister?', uk: 'У тебе є брати або сестри?' },
      { speaker: 'Du', de: 'Ja, ich habe einen Bruder.', uk: 'Так, у мене є брат.' },
      { speaker: 'Ben', de: 'Wie heißt dein Bruder?', uk: 'Як звати твого брата?' },
      { speaker: 'Du', de: 'Er heißt Max.', uk: 'Його звати Макс.' },
    ],
  },
  {
    title: 'Freizeit',
    emoji: '⚽',
    lines: [
      { speaker: 'Lina', de: 'Was machst du gern?', uk: 'Що ти любиш робити?' },
      { speaker: 'Du', de: 'Ich höre Musik und spiele Fußball.', uk: 'Я слухаю музику та граю у футбол.' },
      { speaker: 'Lina', de: 'Toll! Ich tanze gern.', uk: 'Клас! Я люблю танцювати.' },
    ],
  },
]
