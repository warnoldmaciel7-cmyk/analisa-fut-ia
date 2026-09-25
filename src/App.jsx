const features = [
  'Dashboard inicial',
  'Estrutura pronta para evoluir',
  'Componentes reutilizáveis',
  'Base para integração com IA'
]

export default function App() {
  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">Analisa Fut IA</p>
        <h1>Estrutura inicial do projeto pronta.</h1>
        <p className="subtitle">
          Este projeto foi configurado como uma base moderna para desenvolvimento
          web com React + Vite.
        </p>

        <div className="feature-list">
          {features.map((feature) => (
            <span key={feature} className="feature-item">
              {feature}
            </span>
          ))}
        </div>
      </section>
    </main>
  )
}
