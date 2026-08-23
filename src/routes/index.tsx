import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MessageSquare, CheckCircle, Dog, Home, ShieldCheck, MapPin, Instagram } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CONFIG = {
  phone: "5511913200125",
  whatsappUrl: "https://wa.me/5511913200125",
  instagramUrl: "https://www.instagram.com/adestrador_lucasmartins/",
  city: "São Paulo",
  images: {
    hero: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=1200",
    adestramento: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800",
    hospedagem: "https://images.unsplash.com/photo-1576201836106-db175881c565?auto=format&fit=crop&q=80&w=800",
    internato: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800",
    about: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=800",
  }
};

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2B2118] font-sans">
      <header className="sticky top-0 z-50 bg-[#FFFDF9]/90 border-b border-[#5C4632]/10 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-bold text-xl">Adestrador Lucas Martins</span>
          <nav className="hidden md:flex gap-6 font-medium">
            <a href="#servicos" className="hover:text-[#E8862D]">Serviços</a>
            <a href="#sobre" className="hover:text-[#E8862D]">Sobre</a>
            <a href="#depoimentos" className="hover:text-[#E8862D]">Depoimentos</a>
            <a href="#faq" className="hover:text-[#E8862D]">FAQ</a>
          </nav>
          <a href={CONFIG.whatsappUrl} className="bg-[#E8862D] text-white px-4 py-2 rounded-full font-semibold">Falar no WhatsApp</a>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16 text-center">
        <span className="text-[#E8862D] font-bold tracking-widest uppercase">Adestramento • Hospedagem • Lar temporário</span>
        <h1 className="text-5xl md:text-6xl font-bold mt-4">Seu cão bem treinado, cuidado e feliz</h1>
        <div className="mt-8 flex gap-4 justify-center">
          <a href={CONFIG.whatsappUrl} className="bg-[#E8862D] text-white px-8 py-4 rounded-lg font-bold">Falar no WhatsApp</a>
          <a href="#servicos" className="border border-[#5C4632] px-8 py-4 rounded-lg font-bold">Conhecer os serviços</a>
        </div>
        <img src={CONFIG.images.hero} alt="Cão feliz" className="mt-12 rounded-2xl w-full max-w-4xl mx-auto h-96 object-cover" />
      </section>

      <section id="servicos" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Adestramento", img: CONFIG.images.adestramento, msg: "Olá! Vi o serviço de Adestramento no site e gostaria de saber mais." },
              { title: "Hospedagem/Hotel", img: CONFIG.images.hospedagem, msg: "Olá! Vi o serviço de Hospedagem no site e gostaria de saber mais." },
              { title: "Internato", img: CONFIG.images.internato, msg: "Olá! Vi o serviço de Internato no site e gostaria de saber mais." }
            ].map(s => (
              <div key={s.title} className="rounded-2xl overflow-hidden shadow-lg border border-[#5C4632]/10">
                <img src={s.img} alt={s.title} className="w-full h-48 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                  <a href={`${CONFIG.whatsappUrl}?text=${encodeURIComponent(s.msg)}`} className="block w-full bg-[#E8862D] text-white py-3 rounded-lg font-bold">Solicitar</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
          <Accordion type="single" collapsible>
            {[1,2,3,4,5].map(i => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>Pergunta frequente sobre o pet {i}?</AccordionTrigger>
                <AccordionContent>Resposta explicativa sobre o serviço e cuidado do Adestrador Lucas Martins.</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="bg-[#5C4632] text-[#FFFDF9] py-12 text-center">
        <p className="mb-4">Atendendo em {CONFIG.city}</p>
        <a href={CONFIG.instagramUrl} className="inline-block text-[#E8862D] font-bold">@adestrador_lucasmartins</a>
      </footer>

      <a href={CONFIG.whatsappUrl} className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50">
        <MessageSquare size={32} />
      </a>
    </div>
  );
}
