import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, CheckCircle, Dog, Home, ShieldCheck, MapPin, Star, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

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
    tutor1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    tutor2: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    tutor3: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
  }
};

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const getWaLink = (msg: string) => `${CONFIG.whatsappUrl}?text=${encodeURIComponent(msg)}`;

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2B2118] font-sans selection:bg-[#E8862D]/20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FFFDF9]/90 border-b border-[#5C4632]/10 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-xl text-[#5C4632]">Adestrador Lucas Martins</a>
          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#servicos" className="hover:text-[#E8862D] transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-[#E8862D] transition-colors">Sobre</a>
            <a href="#depoimentos" className="hover:text-[#E8862D] transition-colors">Depoimentos</a>
            <a href="#faq" className="hover:text-[#E8862D] transition-colors">FAQ</a>
          </nav>
          <a href={CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#E8862D] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#E8862D]/90 transition-all flex items-center gap-2 text-sm shadow-sm">
            <MessageSquare size={18} />
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#E8862D] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
            Adestramento • Hospedagem • Lar temporário
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 leading-tight text-[#2B2118]">
            Seu cão bem treinado,<br className="hidden md:block" /> cuidado e feliz
          </h1>
          <p className="mt-6 text-lg text-[#5C4632]/80 max-w-2xl mx-auto">
            Transformamos a convivência com seu pet através de métodos positivos e personalizados para cada necessidade.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#E8862D] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2">
              Falar no WhatsApp
            </a>
            <a href="#servicos" className="border-2 border-[#5C4632] text-[#5C4632] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#5C4632]/5 transition-colors flex items-center justify-center">
              Conhecer os serviços
            </a>
          </div>
          <div className="mt-16 relative">
            <img src={CONFIG.images.hero} alt="Adestramento de cães" className="rounded-3xl w-full h-[300px] md:h-[500px] object-cover shadow-2xl" />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-2xl shadow-xl border border-[#5C4632]/10 flex items-center gap-6 whitespace-nowrap">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />)}
              </div>
              <span className="text-sm font-semibold">+ de 100 pets atendidos em SP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-[#FFFDF9]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: CheckCircle, title: "Cuidado e carinho", desc: "Seu cão tratado como parte da família" },
              { icon: Dog, title: "Treino personalizado", desc: "Planos focados na raça e comportamento" },
              { icon: ShieldCheck, title: "Segurança total", desc: "Ambiente monitorado e controlado" },
              { icon: Star, title: "Resultados reais", desc: "Evolução visível a cada sessão" }
            ].map((d, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 bg-[#E8862D]/10 rounded-full flex items-center justify-center mb-4">
                  <d.icon className="text-[#E8862D]" size={24} />
                </div>
                <h3 className="font-bold mb-2">{d.title}</h3>
                <p className="text-sm text-[#5C4632]/70">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-[#5C4632]/80 text-lg">Oferecemos soluções completas para o bem-estar e educação do seu cão.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Adestramento", img: CONFIG.images.adestramento, desc: "Aulas individuais focadas em obediência e correção de comportamento.", msg: "Olá! Vi o serviço de Adestramento no site e gostaria de saber mais." },
              { title: "Hospedagem / Hotel", img: CONFIG.images.hospedagem, desc: "Seu cão hospedado com conforto e atividades recreativas diárias.", msg: "Olá! Vi o serviço de Hospedagem no site e gostaria de saber mais." },
              { title: "Internato", img: CONFIG.images.internato, desc: "Adestramento intensivo com hospedagem inclusa para resultados rápidos.", msg: "Olá! Vi o serviço de Internato no site e gostaria de saber mais." }
            ].map((s, i) => (
              <div key={i} className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-[#5C4632]/5 transition-all bg-[#FFFDF9]">
                <div className="h-56 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                  <p className="text-[#5C4632]/70 mb-6 leading-relaxed">{s.desc}</p>
                  <a href={getWaLink(s.msg)} target="_blank" rel="noopener noreferrer" className="w-full bg-[#E8862D] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#E8862D]/90 transition-colors">
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 bg-[#FFFDF9]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="md:w-1/2">
              <img src={CONFIG.images.about} alt="Lucas Martins" className="rounded-3xl shadow-2xl w-full h-[500px] object-cover" />
            </div>
            <div className="md:w-1/2">
              <span className="text-[#E8862D] font-bold uppercase tracking-widest text-sm">O Profissional</span>
              <h2 className="text-4xl font-bold mt-4 mb-6 leading-tight">Olá, eu sou Lucas Martins</h2>
              <p className="text-lg text-[#5C4632]/80 mb-6 leading-relaxed">
                Especialista em comportamento canino com anos de experiência em São Paulo. Meu método foca no respeito ao animal e na educação do tutor, garantindo resultados duradouros e uma relação saudável.
              </p>
              <div className="bg-[#5C4632]/5 p-6 rounded-2xl border-l-4 border-[#E8862D] mb-8">
                <p className="italic font-medium text-[#5C4632]">"Atendimento próximo e personalizado para cada pet."</p>
              </div>
              <a href={CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#E8862D] font-bold text-lg hover:gap-4 transition-all">
                Falar comigo <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Como funciona</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Contato", desc: "Você nos conta as necessidades do seu cão via WhatsApp." },
              { step: "02", title: "Avaliação", desc: "Marcamos uma visita para conhecer o pet e seu comportamento." },
              { step: "03", title: "Plano", desc: "Criamos um cronograma de treino ou hospedagem sob medida." },
              { step: "04", title: "Resultado", desc: "Acompanhamos a evolução e garantimos um cão mais feliz." }
            ].map((p, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-black text-[#5C4632]/5 absolute -top-10 left-1/2 -translate-x-1/2 select-none">{p.step}</div>
                <h3 className="text-xl font-bold mb-4 relative z-10">{p.title}</h3>
                <p className="text-[#5C4632]/70">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-24 bg-[#FFFDF9]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">O que os tutores dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "[Nome do tutor]", img: CONFIG.images.tutor1, text: "O placeholder para o depoimento real do cliente sobre como o Lucas ajudou o cão dele." },
              { name: "[Nome do tutor]", img: CONFIG.images.tutor2, text: "Espaço reservado para o segundo depoimento real de um tutor satisfeito com o serviço." },
              { name: "[Nome do tutor]", img: CONFIG.images.tutor3, text: "Terceiro placeholder para fechar a prova social da landing page." }
            ].map((d, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-[#5C4632]/5">
                <div className="flex items-center gap-4 mb-6">
                  <img src={d.img} alt={d.name} className="w-12 h-12 rounded-full object-cover bg-gray-100" />
                  <div>
                    <h4 className="font-bold">{d.name}</h4>
                    <div className="flex text-[#E8862D]">
                      {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
                <p className="text-[#5C4632]/80 leading-relaxed italic">"{d.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Dúvidas Frequentes</h2>
            <p className="text-[#5C4632]/70">Respondemos às principais perguntas dos tutores.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Quais raças e idades vocês atendem?</AccordionTrigger>
              <AccordionContent>
                Atendemos cães de todas as raças e idades, desde filhotes em fase de socialização até cães idosos que precisam de cuidados especiais.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Como funciona a hospedagem?</AccordionTrigger>
              <AccordionContent>
                Nosso hotel oferece um ambiente seguro e acolhedor, com rotina de atividades, socialização controlada e monitoramento constante para o seu pet.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Quanto tempo dura o adestramento?</AccordionTrigger>
              <AccordionContent>
                O tempo varia de acordo com o objetivo e o comportamento do cão, mas logo nas primeiras sessões já é possível notar evoluções significativas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Como é feito o orçamento?</AccordionTrigger>
              <AccordionContent>
                O orçamento é personalizado após uma breve avaliação inicial das necessidades do seu pet e o tipo de serviço desejado.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Onde vocês estão localizados?</AccordionTrigger>
              <AccordionContent>
                Estamos localizados em São Paulo, SP, atendendo diversas regiões da cidade com conforto e praticidade.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-12 text-center">
            <p className="text-[#5C4632]/70 mb-4">Ainda ficou com dúvida?</p>
            <a href={CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#E8862D] font-bold underline hover:no-underline">Fale comigo pelo WhatsApp</a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-[#E8862D]">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-[#5C4632] text-white p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Seu cão merece o melhor cuidado</h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">Não deixe para depois. Transforme a vida do seu melhor amigo hoje mesmo.</p>
              <a href={CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#E8862D] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-lg inline-flex items-center gap-3">
                <MessageSquare /> Agendar Agora
              </a>
              <p className="mt-6 text-sm text-white/60">Resposta rápida pelo WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5C4632] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b border-white/10 pb-12">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-2xl mb-2">Adestrador Lucas Martins</h3>
              <p className="text-white/60">Cuidando do seu pet como ele merece.</p>
            </div>
            <div className="flex gap-6 text-white/80">
              <a href={CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#E8862D] transition-colors flex items-center gap-2">
                Instagram
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={20} /> {CONFIG.city}
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} Adestrador Lucas Martins. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Flutuante */}
      <a
        href={CONFIG.whatsappUrl}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#25D366] p-4 text-white shadow-xl hover:scale-110 active:scale-95 transition-all md:p-5"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contato pelo WhatsApp"
      >
        <MessageSquare className="h-7 w-7 md:h-8 md:h-8" />
      </a>
    </div>
  );
}
