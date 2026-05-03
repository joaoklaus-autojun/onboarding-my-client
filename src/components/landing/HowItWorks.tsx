const steps = [
  { n: "01", title: "Crie um fluxo", desc: "Defina etapas, documentos e responsáveis para cada tipo de cliente." },
  { n: "02", title: "Convide o cliente", desc: "O cliente acessa um portal próprio e preenche tudo em um só lugar." },
  { n: "03", title: "Acompanhe em tempo real", desc: "Lembretes automáticos, status visíveis e comunicação centralizada." },
  { n: "04", title: "Conclua e celebre", desc: "Onboarding finalizado com histórico completo e dados prontos." },
];

export const HowItWorks = () => (
  <section id="como-funciona" className="border-y border-border bg-gradient-soft py-24">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Como funciona</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Quatro passos para transformar seu onboarding
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="relative rounded-2xl border border-border bg-card p-7 shadow-card">
            <span className="font-display text-4xl font-bold text-transparent [-webkit-text-stroke:1px_hsl(var(--primary))]">
              {s.n}
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
