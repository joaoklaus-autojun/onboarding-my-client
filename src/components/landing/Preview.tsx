import { CheckCircle2, Circle, FileText, MessageSquare, Clock } from "lucide-react";

export const Preview = () => (
  <section id="preview" className="py-24">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Preview</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Uma interface pensada para sua operação
        </h2>
        <p className="mt-4 text-muted-foreground">Painel limpo, status claros e tudo o que importa em um clique.</p>
      </div>

      <div className="mt-16 rounded-3xl border border-border bg-gradient-soft p-3 shadow-elegant md:p-6">
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          {/* window chrome */}
          <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-destructive/60" />
            <span className="h-3 w-3 rounded-full bg-primary/40" />
            <span className="h-3 w-3 rounded-full bg-primary/60" />
            <span className="ml-3 text-xs text-muted-foreground">app.onbord.io / clientes / Acme Studio</span>
          </div>

          <div className="grid gap-0 md:grid-cols-[260px_1fr]">
            {/* sidebar */}
            <aside className="hidden border-r border-border bg-background/60 p-5 md:block">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Clientes</p>
              <ul className="mt-3 space-y-1 text-sm">
                {["Acme Studio", "Northwind Co.", "Lumina Labs", "Pixel & Co"].map((c, i) => (
                  <li key={c} className={`rounded-lg px-3 py-2 ${i === 0 ? "bg-primary/10 font-medium text-primary" : "text-foreground/80 hover:bg-secondary"}`}>
                    {c}
                  </li>
                ))}
              </ul>
            </aside>

            {/* main */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">Acme Studio</h3>
                  <p className="text-sm text-muted-foreground">Onboarding • iniciado há 3 dias</p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                  <Clock className="h-3.5 w-3.5" /> 60% concluído
                </div>
              </div>

              <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-3/5 rounded-full bg-gradient-hero" />
              </div>

              <div className="mt-8 grid gap-3">
                {[
                  { done: true, label: "Contrato assinado", meta: "Documento" },
                  { done: true, label: "Dados da empresa", meta: "Formulário" },
                  { done: true, label: "Acessos compartilhados", meta: "Documento" },
                  { done: false, label: "Brief de marca", meta: "Aguardando cliente" },
                  { done: false, label: "Reunião de kickoff", meta: "Próxima etapa" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center justify-between rounded-xl border border-border bg-background p-4">
                    <div className="flex items-center gap-3">
                      {s.done ? (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      ) : (
                        <Circle className="h-5 w-5 text-muted-foreground" />
                      )}
                      <div>
                        <p className={`text-sm font-medium ${s.done ? "text-muted-foreground line-through" : "text-foreground"}`}>{s.label}</p>
                        <p className="text-xs text-muted-foreground">{s.meta}</p>
                      </div>
                    </div>
                    {s.meta === "Documento" ? <FileText className="h-4 w-4 text-muted-foreground" /> : <MessageSquare className="h-4 w-4 text-muted-foreground" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
