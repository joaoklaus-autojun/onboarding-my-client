import { Workflow } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border bg-background py-10">
    <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-hero text-primary-foreground">
          <Workflow className="h-3.5 w-3.5" />
        </span>
        Onbord
      </div>
      <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Onbord. Todos os direitos reservados.</p>
      <div className="flex gap-6 text-sm text-muted-foreground">
        <a href="#" className="hover:text-foreground">Privacidade</a>
        <a href="#" className="hover:text-foreground">Termos</a>
        <a href="#" className="hover:text-foreground">Contato</a>
      </div>
    </div>
  </footer>
);
