import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => (
  <section className="py-24">
    <div className="container">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero px-8 py-16 text-center shadow-elegant md:px-16 md:py-20">
        <div aria-hidden className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative">
          <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Pronto para profissionalizar seu onboarding?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Comece em minutos. Sem cartão. Cancele quando quiser.
          </p>
          <Button size="lg" variant="secondary" className="mt-8">
            Testar agora <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);
