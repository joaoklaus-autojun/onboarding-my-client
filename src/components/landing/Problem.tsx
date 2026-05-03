import { FileWarning, MailX, ClipboardX, Clock } from "lucide-react";

const items = [
  { icon: FileWarning, title: "Documentos perdidos", desc: "Anexos espalhados em emails, chats e drives diferentes." },
  { icon: MailX, title: "Comunicação fragmentada", desc: "Conversas se diluem entre WhatsApp, email e planilhas." },
  { icon: ClipboardX, title: "Etapas sem controle", desc: "Ninguém sabe ao certo onde cada cliente está no processo." },
  { icon: Clock, title: "Atrasos no go-live", desc: "Onboardings que deveriam levar dias acabam levando semanas." },
];

export const Problem = () => (
  <section id="problema" className="border-y border-border bg-gradient-soft py-24">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">O problema</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Onboarding manual custa caro — e seus clientes sentem
        </h2>
        <p className="mt-4 text-muted-foreground">
          Processos espalhados em planilhas, emails e mensagens criam atrito logo no momento mais delicado: a primeira impressão.
        </p>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-base font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
