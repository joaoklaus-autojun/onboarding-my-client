import { LayoutGrid, Zap, Heart, ShieldCheck, BarChart3, Users } from "lucide-react";

const benefits = [
  { icon: LayoutGrid, title: "Organização total", desc: "Cada cliente, cada etapa, cada documento — em um único painel." },
  { icon: Zap, title: "Mais agilidade", desc: "Automatize lembretes e reduza o tempo de onboarding pela metade." },
  { icon: Heart, title: "Experiência premium", desc: "Portais personalizados que encantam o cliente desde o primeiro dia." },
  { icon: ShieldCheck, title: "Documentos seguros", desc: "Coleta com criptografia e trilha de auditoria completa." },
  { icon: BarChart3, title: "Visibilidade do processo", desc: "Saiba exatamente onde cada cliente está, em tempo real." },
  { icon: Users, title: "Colaboração da equipe", desc: "Atribua tarefas, comente e acompanhe sem perder o fio." },
];

export const Benefits = () => (
  <section id="beneficios" className="py-24">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Benefícios</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Tudo o que sua operação precisa para escalar com qualidade
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground shadow-elegant">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
