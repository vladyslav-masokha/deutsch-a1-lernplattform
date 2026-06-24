export function PageHeader({ title, subtitle, onBack }: { title: string; subtitle: string; onBack: () => void }) {
  return (
    <div className="page-header">
      <button className="back" onClick={onBack} aria-label="Zurück">←</button>
      <div><span className="mini-label">{subtitle}</span><h2>{title}</h2></div>
    </div>
  )
}
