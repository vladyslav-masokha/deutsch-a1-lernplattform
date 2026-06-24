import type { GrammarExercise, SentenceBuildExercise, TopicData, Word } from '../../types/topic'

type Category = 'Räume' | 'Möbel' | 'Dinge' | 'Küche' | 'Bad' | 'Gebäude' | 'Verben' | 'Zimmer'

export const words: Word[] = [
  { de: 'das Wohnzimmer', uk: 'вітальня', category: 'Räume', emoji: '🛋️' },
  { de: 'das Schlafzimmer', uk: 'спальня', category: 'Räume', emoji: '🛏️' },
  { de: 'die Küche', uk: 'кухня', category: 'Räume', emoji: '🍳' },
  { de: 'das Bad', uk: 'ванна кімната', category: 'Räume', emoji: '🛁' },
  { de: 'der Flur', uk: 'коридор', category: 'Räume', emoji: '🚪' },
  { de: 'der Balkon', uk: 'балкон', category: 'Räume', emoji: '🌇' },
  { de: 'das Fenster', uk: 'вікно', category: 'Räume', emoji: '🪟' },
  { de: 'die Tür', uk: 'двері', category: 'Räume', emoji: '🚪' },

  { de: 'der Tisch', uk: 'стіл', category: 'Möbel', emoji: '🪑' },
  { de: 'der Stuhl', uk: 'стілець', category: 'Möbel', emoji: '🪑' },
  { de: 'das Bett', uk: 'ліжко', category: 'Möbel', emoji: '🛏️' },
  { de: 'der Schrank', uk: 'шафа', category: 'Möbel', emoji: '🚪' },
  { de: 'das Sofa', uk: 'диван', category: 'Möbel', emoji: '🛋️' },
  { de: 'die Lampe', uk: 'лампа', category: 'Möbel', emoji: '💡' },
  { de: 'das Regal', uk: 'полиця', category: 'Möbel', emoji: '📚' },
  { de: 'der Spiegel', uk: 'дзеркало', category: 'Möbel', emoji: '🪞' },

  { de: 'der Schlüssel', uk: 'ключ', category: 'Dinge', emoji: '🔑' },
  { de: 'das Handy', uk: 'телефон', category: 'Dinge', emoji: '📱' },
  { de: 'das Buch', uk: 'книга', category: 'Dinge', emoji: '📖' },
  { de: 'die Tasche', uk: 'сумка', category: 'Dinge', emoji: '👜' },
  { de: 'die Uhr', uk: 'годинник', category: 'Dinge', emoji: '🕐' },
  { de: 'der Computer', uk: "комп’ютер", category: 'Dinge', emoji: '💻' },
  { de: 'der Fernseher', uk: 'телевізор', category: 'Dinge', emoji: '📺' },
  { de: 'das Bild', uk: 'картина', category: 'Dinge', emoji: '🖼️' },

  { de: 'der Kühlschrank', uk: 'холодильник', category: 'Küche', emoji: '🧊' },
  { de: 'der Herd', uk: 'плита', category: 'Küche', emoji: '♨️' },
  { de: 'der Teller', uk: 'тарілка', category: 'Küche', emoji: '🍽️' },
  { de: 'das Glas', uk: 'склянка', category: 'Küche', emoji: '🥛' },
  { de: 'die Tasse', uk: 'чашка', category: 'Küche', emoji: '☕' },
  { de: 'das Messer', uk: 'ніж', category: 'Küche', emoji: '🔪' },
  { de: 'die Gabel', uk: 'виделка', category: 'Küche', emoji: '🍴' },
  { de: 'der Löffel', uk: 'ложка', category: 'Küche', emoji: '🥄' },

  { de: 'die Dusche', uk: 'душ', category: 'Bad', emoji: '🚿' },
  { de: 'die Seife', uk: 'мило', category: 'Bad', emoji: '🧼' },
  { de: 'das Shampoo', uk: 'шампунь', category: 'Bad', emoji: '🧴' },
  { de: 'das Handtuch', uk: 'рушник', category: 'Bad', emoji: '🧖' },
  { de: 'die Zahnbürste', uk: 'зубна щітка', category: 'Bad', emoji: '🪥' },
  { de: 'die Toilette', uk: 'туалет', category: 'Bad', emoji: '🚽' },
  { de: 'das Wasser', uk: 'вода', category: 'Bad', emoji: '💧' },
  { de: 'die Waschmaschine', uk: 'пральна машина', category: 'Bad', emoji: '🧺' },

  { de: 'die Wohnung', uk: 'квартира', category: 'Gebäude', emoji: '🏢' },
  { de: 'das Haus', uk: 'будинок', category: 'Gebäude', emoji: '🏠' },
  { de: 'das Zimmer', uk: 'кімната', category: 'Gebäude', emoji: '🚪' },
  { de: 'die Miete', uk: 'оренда', category: 'Gebäude', emoji: '💶' },
  { de: 'der Nachbar', uk: 'сусід', category: 'Gebäude', emoji: '👋' },
  { de: 'der Aufzug', uk: 'ліфт', category: 'Gebäude', emoji: '🛗' },
  { de: 'die Treppe', uk: 'сходи', category: 'Gebäude', emoji: '🪜' },
  { de: 'der Garten', uk: 'сад', category: 'Gebäude', emoji: '🌳' },

  { de: 'wohnen', uk: 'жити', category: 'Verben', emoji: '🏠' },
  { de: 'schlafen', uk: 'спати', category: 'Verben', emoji: '😴' },
  { de: 'kochen', uk: 'готувати', category: 'Verben', emoji: '👨‍🍳' },
  { de: 'putzen', uk: 'прибирати', category: 'Verben', emoji: '🧹' },
  { de: 'aufräumen', uk: 'прибирати по місцях', category: 'Verben', emoji: '🧺' },
  { de: 'waschen', uk: 'мити', category: 'Verben', emoji: '🧼' },
  { de: 'öffnen', uk: 'відкривати', category: 'Verben', emoji: '🔓' },
  { de: 'schließen', uk: 'закривати', category: 'Verben', emoji: '🔒' },

  { de: 'sauber', uk: 'чистий', category: 'Zimmer', emoji: '✨' },
  { de: 'schmutzig', uk: 'брудний', category: 'Zimmer', emoji: '🫧' },
  { de: 'groß', uk: 'великий', category: 'Zimmer', emoji: '↔️' },
  { de: 'klein', uk: 'маленький', category: 'Zimmer', emoji: '🤏' },
  { de: 'hell', uk: 'світлий', category: 'Zimmer', emoji: '☀️' },
  { de: 'dunkel', uk: 'темний', category: 'Zimmer', emoji: '🌙' },
  { de: 'ruhig', uk: 'тихий', category: 'Zimmer', emoji: '🤫' },
  { de: 'bequem', uk: 'зручний', category: 'Zimmer', emoji: '😌' },
]

export const categories: Category[] = ['Räume', 'Möbel', 'Dinge', 'Küche', 'Bad', 'Gebäude', 'Verben', 'Zimmer']

export const categoryLabels: Record<Category, string> = {
  'Räume': 'Räume',
  'Möbel': 'Möbel',
  'Dinge': 'Dinge zu Hause',
  'Küche': 'In der Küche',
  'Bad': 'Im Bad',
  'Gebäude': 'Wohnung & Gebäude',
  'Verben': 'Verben zu Hause',
  'Zimmer': 'Im Zimmer',
}

export const sentenceQuestions = [
  { text: 'Im Schlafzimmer steht ein ___.', answer: 'Bett', options: ['Bett', 'Herd', 'Spiegel', 'Aufzug'], uk: 'У спальні стоїть ліжко.' },
  { text: 'Wir kochen in der ___.', answer: 'Küche', options: ['Küche', 'Treppe', 'Dusche', 'Tasche'], uk: 'Ми готуємо на кухні.' },
  { text: 'Das Essen ist im ___.', answer: 'Kühlschrank', options: ['Kühlschrank', 'Schrank', 'Fernseher', 'Garten'], uk: 'Їжа в холодильнику.' },
  { text: 'Ich trinke Wasser aus einem ___.', answer: 'Glas', options: ['Glas', 'Teller', 'Messer', 'Handtuch'], uk: 'Я п’ю воду зі склянки.' },
  { text: 'Die Bücher stehen im ___.', answer: 'Regal', options: ['Regal', 'Balkon', 'Bad', 'Herd'], uk: 'Книги стоять на полиці.' },
  { text: 'Ich öffne die Tür mit dem ___.', answer: 'Schlüssel', options: ['Schlüssel', 'Löffel', 'Shampoo', 'Bild'], uk: 'Я відкриваю двері ключем.' },
  { text: 'Wir fahren mit dem ___ nach oben.', answer: 'Aufzug', options: ['Aufzug', 'Flur', 'Garten', 'Tisch'], uk: 'Ми їдемо ліфтом нагору.' },
  { text: 'Nach dem Duschen brauche ich ein ___.', answer: 'Handtuch', options: ['Handtuch', 'Buch', 'Sofa', 'Fenster'], uk: 'Після душу мені потрібен рушник.' },
  { text: 'Am Abend sehe ich ___.', answer: 'fern', options: ['fern', 'sauber', 'Wasser', 'Tasse'], uk: 'Увечері я дивлюся телевізор.' },
  { text: 'Das Zimmer ist nicht dunkel, es ist ___.', answer: 'hell', options: ['hell', 'klein', 'schmutzig', 'ruhig'], uk: 'Кімната не темна, вона світла.' },
  { text: 'Am Samstag ___ ich die Wohnung.', answer: 'putze', options: ['putze', 'wohne', 'schlafe', 'öffne'], uk: 'У суботу я прибираю квартиру.' },
  { text: 'Auf dem Balkon stehen zwei ___.', answer: 'Stühle', options: ['Stühle', 'Betten', 'Duschen', 'Computer'], uk: 'На балконі стоять два стільці.' },
]

const grammarExercises: GrammarExercise[] = [
  { question: 'Das ist ___ Küche.', answer: 'meine', options: ['mein', 'meine', 'meinen'], explanation: '„Küche“ ist feminin: meine Küche.' },
  { question: 'Im Zimmer ___ ein Bett.', answer: 'steht', options: ['steht', 'stehen', 'stehst'], explanation: 'Ein Bett ist Singular: es steht.' },
  { question: 'Die Lampe hängt ___ dem Tisch.', answer: 'über', options: ['über', 'aus', 'ohne'], explanation: '„Über dem Tisch“ beschreibt die Position.' },
  { question: 'Wir ___ die Wohnung.', answer: 'putzen', options: ['putze', 'putzt', 'putzen'], explanation: 'Mit „wir“ steht der Infinitiv: putzen.' },
  { question: 'Der Schlüssel liegt ___ der Tasche.', answer: 'in', options: ['in', 'an', 'aus'], explanation: 'Der Schlüssel befindet sich in der Tasche.' },
  { question: 'Ich brauche ___ Handtuch.', answer: 'ein', options: ['ein', 'eine', 'einen'], explanation: '„Handtuch“ ist neutral: ein Handtuch.' },
  { question: 'Das Sofa ist sehr ___.', answer: 'bequem', options: ['bequeme', 'bequem', 'bequemen'], explanation: 'Nach „ist“ bleibt das Adjektiv unverändert.' },
  { question: 'Bitte ___ das Fenster!', answer: 'öffne', options: ['öffne', 'öffnet', 'öffnen'], explanation: 'Der Imperativ mit „du“ lautet: öffne!' },
]

const sentenceBuildExercises: SentenceBuildExercise[] = [
  { words: ['Das', 'Wohnzimmer', 'ist', 'groß', '.'], answer: 'Das Wohnzimmer ist groß.', uk: 'Вітальня велика.' },
  { words: ['Der', 'Schlüssel', 'liegt', 'auf', 'dem', 'Tisch', '.'], answer: 'Der Schlüssel liegt auf dem Tisch.', uk: 'Ключ лежить на столі.' },
  { words: ['Ich', 'koche', 'in', 'der', 'Küche', '.'], answer: 'Ich koche in der Küche.', uk: 'Я готую на кухні.' },
  { words: ['Wir', 'wohnen', 'in', 'einer', 'Wohnung', '.'], answer: 'Wir wohnen in einer Wohnung.', uk: 'Ми живемо у квартирі.' },
  { words: ['Das', 'Bad', 'ist', 'sauber', 'und', 'hell', '.'], answer: 'Das Bad ist sauber und hell.', uk: 'Ванна кімната чиста і світла.' },
  { words: ['Am', 'Samstag', 'räume', 'ich', 'mein', 'Zimmer', 'auf', '.'], answer: 'Am Samstag räume ich mein Zimmer auf.', uk: 'У суботу я прибираю свою кімнату.' },
]

const dialogues = [
  {
    title: 'Die neue Wohnung',
    emoji: '🏠',
    lines: [
      { speaker: 'Lena', de: 'Wie ist deine neue Wohnung?', uk: 'Яка твоя нова квартира?' },
      { speaker: 'Du', de: 'Sie ist hell, ruhig und sehr gemütlich.', uk: 'Вона світла, тиха і дуже затишна.' },
      { speaker: 'Lena', de: 'Hast du einen Balkon?', uk: 'У тебе є балкон?' },
      { speaker: 'Du', de: 'Ja, der Balkon ist klein, aber schön.', uk: 'Так, балкон маленький, але гарний.' },
    ],
  },
  {
    title: 'In der Küche',
    emoji: '🍳',
    lines: [
      { speaker: 'Tom', de: 'Wo sind die Teller?', uk: 'Де тарілки?' },
      { speaker: 'Du', de: 'Die Teller sind im Schrank.', uk: 'Тарілки у шафі.' },
      { speaker: 'Tom', de: 'Und wo ist das Wasser?', uk: 'А де вода?' },
      { speaker: 'Du', de: 'Das Wasser ist im Kühlschrank.', uk: 'Вода в холодильнику.' },
    ],
  },
  {
    title: 'Aufräumen',
    emoji: '🧹',
    lines: [
      { speaker: 'Mia', de: 'Dein Zimmer ist schmutzig.', uk: 'Твоя кімната брудна.' },
      { speaker: 'Du', de: 'Ja, ich räume jetzt auf.', uk: 'Так, я зараз приберу.' },
      { speaker: 'Mia', de: 'Bitte öffne auch das Fenster.', uk: 'Будь ласка, також відкрий вікно.' },
      { speaker: 'Du', de: 'Gute Idee!', uk: 'Гарна ідея!' },
    ],
  },
]

const hausTopic: TopicData = {
  id: 'haus',
  title: 'Haus und',
  subtitle: 'Wohnen',
  lesson: 'Lektion 2',
  heroDescription: 'Lerne Wörter für Wohnung, Möbel und den Alltag zu Hause. Praktisch, verständlich und direkt anwendbar.',
  featuredWords: [
    { de: 'das Wohnzimmer', uk: 'вітальня', category: 'Räume', emoji: '🛋️' },
    { de: 'der Schlüssel', uk: 'ключ', category: 'Dinge', emoji: '🔑' },
  ],
  coursePreview: {
    labels: ['der Tisch', 'das Bett'],
    headline: 'Zuhause',
    emoji: '🏠🛋️',
  },
  words,
  categories,
  categoryLabels,
  sentenceQuestions,
  grammarExercises,
  sentenceBuildExercises,
  dialogues,
}

export default hausTopic
