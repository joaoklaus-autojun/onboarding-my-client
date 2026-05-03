import { Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => (
  <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
    <nav className="container flex h-16 items-center justify-between">
      <a href="#" className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero text-primary-foreground shadow-elegant">
          <Workflow className="h-4 w-4" />
        </span>
        Onbord
      </a>
      <div className="hidden items-center gap-8 md:flex">
        <a href="#problema" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Problema</a>
        <a href="#beneficios" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Benefícios</a>
        <a href="#como-funciona" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Como funciona</a>
        <a href="#preview" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Preview</a>
      </div>
      <Button size="sm" className="bg-gradient-hero shadow-elegant hover:opacity-95">Testar agora</Button>
    </nav>
  </header>
);
