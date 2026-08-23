import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Instagram, 
  CheckCircle, 
  Dog, 
  Home, 
  ShieldCheck, 
  Calendar,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const WHATSAPP_URL = "https://wa.me/5511913200125";
  
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-xl font-bold text-secondary">Lucas Martins</div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all"
          >
            <MessageSquare className="h-4 w-4" /> Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Adestramento • Hospedagem • Lar temporário</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">Seu cão bem treinado,<br />cuidado e feliz</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">Transformamos a convivência com seu melhor amigo em uma experiência harmoniosa e segura.</p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href={WHATSAPP_URL} className="rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground">Falar no WhatsApp</a>
            <a href="#servicos" className="rounded-lg border border-border px-8 py-4 font-semibold hover:bg-accent transition-colors">Conhecer os serviços</a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 text-center bg-secondary text-secondary-foreground">
        <p>&copy; {new Date().getFullYear()} Adestrador Lucas Martins. Todos os direitos reservados.</p>
      </footer>

      {/* WhatsApp Flutuante */}
      <a
        href={WHATSAPP_URL}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] p-4 text-white shadow-xl hover:scale-110 transition-transform"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageSquare className="h-8 w-8" />
      </a>
    </div>
  );
}
