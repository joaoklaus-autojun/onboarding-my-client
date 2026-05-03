import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => (
  <section className="relative overflow-hidden">
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute right-0 top-40 h-[320px] w-[320px] rounded-full bg-primary-glow/20 blur-3xl" />
    </div>
    <div className="container flex flex-col items-center py-24 text-center md:py-32">
      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
        <Sparkles className="h-3.5 w-3.5 text-primary" />
        Onboarding de clientes, sem caos
      </span>
      <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
        Receba seus clientes <br className="hidden md:block" />
        com <span className="bg-gradient-hero bg-clip-text text-transparent">processo e clareza</span>
      </h1>
      <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
        Centralize coleta de documentos, etapas e comunicação em um único fluxo profissional. Para agências, consultorias e negócios B2B.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Button size="lg" className="bg-gradient-hero px-8 shadow-elegant hover:opacity-95">
          Começar grátis <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline">Ver demonstração</Button>
      </div>
      <p className="mt-6 text-xs text-muted-foreground">Sem cartão de crédito • Configuração em minutos</p>
    </div>
  </section>
);
