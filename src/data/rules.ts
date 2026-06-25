export type RuleTable = {
  headers: string[]
  rows: string[][]
}

export type RuleSection = {
  id: string
  icon: string
  title: string
  summary: string
  rules: string[]
  examples?: string[]
  table?: RuleTable
}

export const ruleSections: RuleSection[] = [
  {
    id: 'cases',
    icon: '◫',
    title: 'Akkusativ und Dativ',
    summary: 'Der Akkusativ bezeichnet meist das direkte Objekt, der Dativ das indirekte Objekt.',
    rules: [
      'Akkusativ: Frage Wen? oder Was?',
      'Dativ: Frage Wem?',
      'Nach durch, für, gegen, ohne und um steht der Akkusativ.',
      'Nach mit, nach, bei, seit, von, zu und aus steht der Dativ.',
    ],
    examples: ['Ich sehe den Mann.', 'Ich helfe dem Mann.'],
  },
  {
    id: 'articles',
    icon: 'A',
    title: 'Artikel in drei Fällen',
    summary: 'Artikel verändern sich abhängig von Genus und Kasus.',
    rules: [
      'Im Akkusativ ändert sich vor allem das Maskulinum: der → den, ein → einen.',
      'Im Dativ werden der/das zu dem, die zu der und die Mehrzahl zu den.',
    ],
    table: {
      headers: ['Kasus', 'Maskulin', 'Feminin', 'Neutral', 'Plural'],
      rows: [
        ['Nominativ', 'der / ein', 'die / eine', 'das / ein', 'die'],
        ['Akkusativ', 'den / einen', 'die / eine', 'das / ein', 'die'],
        ['Dativ', 'dem / einem', 'der / einer', 'dem / einem', 'den'],
      ],
    },
  },
  {
    id: 'pronouns',
    icon: 'P',
    title: 'Persönliche Pronomen',
    summary: 'Auch Pronomen haben unterschiedliche Formen im Akkusativ und Dativ.',
    rules: ['Die Form richtet sich nach der Funktion des Pronomens im Satz.'],
    table: {
      headers: ['Nominativ', 'Akkusativ', 'Dativ'],
      rows: [
        ['ich', 'mich', 'mir'],
        ['du', 'dich', 'dir'],
        ['er / sie / es', 'ihn / sie / es', 'ihm / ihr / ihm'],
        ['wir', 'uns', 'uns'],
        ['ihr', 'euch', 'euch'],
        ['sie / Sie', 'sie / Sie', 'ihnen / Ihnen'],
      ],
    },
  },
  {
    id: 'present',
    icon: 'V',
    title: 'Verben im Präsens',
    summary: 'Regelmäßige Verben erhalten feste Endungen. Das Verb steht im Hauptsatz auf Position 2.',
    rules: [
      'Endungen: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.',
      'sein: bin, bist, ist, sind, seid, sind.',
      'haben: habe, hast, hat, haben, habt, haben.',
      'Bei trennbaren Verben steht die Vorsilbe am Satzende.',
    ],
    examples: ['Ich lerne Deutsch.', 'Heute arbeite ich nicht.', 'Er steht um 7 Uhr auf.'],
  },
  {
    id: 'modal',
    icon: 'M',
    title: 'Modalverben',
    summary: 'Das Modalverb wird konjugiert, der Infinitiv steht am Satzende.',
    rules: [
      'können: kann, kannst, kann, können, könnt, können.',
      'müssen: muss, musst, muss, müssen, müsst, müssen.',
      'wollen: will, willst, will, wollen, wollt, wollen.',
    ],
    examples: ['Ich kann Deutsch lernen.', 'Wir müssen heute arbeiten.'],
  },
  {
    id: 'negation',
    icon: '¬',
    title: 'Negation',
    summary: 'Nicht verneint Verben oder Aussagen, kein verneint Nomen mit unbestimmtem Artikel.',
    rules: ['nicht: Ich komme nicht.', 'kein / keine: Das ist kein Auto. Ich habe keine Zeit.'],
  },
  {
    id: 'perfect',
    icon: '✓',
    title: 'Perfekt',
    summary: 'Das Perfekt wird mit haben oder sein und dem Partizip II gebildet.',
    rules: [
      'Grundformel: Subjekt + haben/sein + ... + Partizip II.',
      'Die meisten Verben bilden das Perfekt mit haben.',
      'Verben der Bewegung oder Veränderung bilden es häufig mit sein.',
      'Regelmäßiges Partizip II: ge- + Stamm + -t.',
      'Das Partizip II steht am Satzende.',
    ],
    examples: ['Ich habe Deutsch gelernt.', 'Wir sind nach Hause gefahren.'],
  },
  {
    id: 'time',
    icon: '◷',
    title: 'Zeitpräpositionen',
    summary: 'Für Uhrzeit, Datum, Monate und Zeiträume werden unterschiedliche Präpositionen verwendet.',
    rules: [
      'um + Uhrzeit: um 7 Uhr.',
      'am + Tag oder Datum: am Montag, am 10. Mai.',
      'im + Monat oder Jahreszeit: im Juni, im Sommer.',
      'von ... bis ... + Zeitraum: von Montag bis Freitag.',
      'ab bezeichnet einen Startpunkt, seit einen Beginn in der Vergangenheit.',
    ],
  },
  {
    id: 'places',
    icon: '⌖',
    title: 'Orte und Wechselpräpositionen',
    summary: 'Wo? verlangt den Dativ. Wohin? verlangt bei Wechselpräpositionen den Akkusativ.',
    rules: [
      'Wo? in, an, auf, unter, vor, hinter, neben, zwischen + Dativ.',
      'Wohin? dieselben Wechselpräpositionen + Akkusativ.',
      'zu + Dativ, nach + Stadt/Land, bei + Person/Firma.',
      'von und aus stehen mit Dativ.',
    ],
    examples: ['Das Buch liegt auf dem Tisch.', 'Ich lege das Buch auf den Tisch.', 'Ich fahre nach Berlin.'],
  },
  {
    id: 'contractions',
    icon: '↔',
    title: 'Kontraktionen',
    summary: 'Häufige Kombinationen aus Präposition und Artikel werden zusammengezogen.',
    rules: ['in dem → im', 'an dem → am', 'zu dem → zum', 'zu der → zur', 'bei dem → beim', 'von dem → vom'],
  },
]
