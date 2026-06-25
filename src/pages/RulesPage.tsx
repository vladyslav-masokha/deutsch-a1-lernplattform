import { PageHeader } from '../components/PageHeader'
import { ruleSections } from '../data/rules'

export function RulesPage({ onBack }: { onBack: () => void }) {
  return (
    <section className="practice-page rules-page">
      <PageHeader title="A1 Regeln" subtitle="Nur Regeln – klar, kompakt und immer griffbereit" onBack={onBack} />
      <div className="rules-intro">
        <span>REGELWERK</span>
        <h2>Die wichtigsten Regeln auf einen Blick</h2>
        <p>Grammatik ohne Übungen und ohne Vokabellisten. Öffne ein Thema und wiederhole die Regel mit kurzen Beispielen.</p>
      </div>
      <div className="rules-grid">
        {ruleSections.map((section, index) => (
          <article className="rule-card" key={section.id}>
            <div className="rule-card-heading">
              <span className="rule-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="rule-icon">{section.icon}</span>
              <div><small>REGEL</small><h3>{section.title}</h3></div>
            </div>
            <p className="rule-summary">{section.summary}</p>
            <ul>{section.rules.map((rule) => <li key={rule}>{rule}</li>)}</ul>
            {section.table && (
              <div className="rule-table-wrap">
                <table className="rule-table">
                  <thead><tr>{section.table.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead>
                  <tbody>{section.table.rows.map((row) => <tr key={row.join('-')}>{row.map((cell, cellIndex) => <td key={`${cell}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody>
                </table>
              </div>
            )}
            {section.examples && <div className="rule-examples">{section.examples.map((example) => <span key={example}>{example}</span>)}</div>}
          </article>
        ))}
      </div>
    </section>
  )
}
