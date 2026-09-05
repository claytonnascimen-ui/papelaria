import React from 'react';
import { ArrowDown, CheckCircle2, CreditCard, PackageCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#E6E1D3] overflow-hidden bg-[#F9F7F2]">
      {/* Subtle organic tonal ambient glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E6E1D3]/60 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#A5A58D]/20 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 max-w-3xl">
            {/* Tag pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6E1D3]/70 border border-[#E6E1D3] text-[#3F4238] text-[11px] font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B705C]" />
              Curadoria de Materiais • Coleção 2026
            </div>

            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#3F4238] tracking-tight leading-[1.12] mb-6">
              Essenciais para sua <span className="italic text-[#6B705C]">Escrita</span> & Criatividade.
            </h1>

            <p id="hero-description" className="text-base sm:text-lg text-[#6B705C] leading-relaxed mb-8 max-w-2xl font-normal">
              Uma seleção refinada de materiais escolares, papéis e instrumentos de precisão das marcas mais confiáveis. Pagamento seguro e instantâneo através da plataforma oficial <strong>Stripe</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                id="hero-cta-catalog"
                href="#catalogo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6B705C] hover:bg-[#3F4238] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:translate-y-[-1px]"
              >
                <span>Explorar Coleções</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#E6E1D3]" />
              </a>
              <a
                id="hero-cta-security"
                href="#garantias"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#E6E1D3]/60 text-[#3F4238] border border-[#E6E1D3] font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <CreditCard className="w-3.5 h-3.5 text-[#6B705C]" />
                <span>Checkout Seguro</span>
              </a>
            </div>
          </div>

          {/* Natural Tones banner callout */}
          <div className="lg:col-span-4 pb-10">
            <div className="bg-white/80 backdrop-blur-sm border border-[#E6E1D3] p-5 rounded-2xl shadow-sm">
              <span className="text-[10px] uppercase tracking-widest text-[#A5A58D] font-bold block mb-1">
                Garantia de Qualidade
              </span>
              <p className="font-serif italic text-xl text-[#3F4238] leading-snug">
                Itens originais e pronta entrega com envio rastreado
              </p>
              <div className="mt-3 pt-3 border-t border-[#F0EEE6] flex items-center justify-between text-xs text-[#6B705C]">
                <span>Despacho ágil</span>
                <span className="font-semibold text-[#3F4238]">100% Verificado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Value Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E6E1D3] text-[#3F4238] text-xs">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#6B705C] shrink-0" />
            <span className="font-medium">Itens 100% Originais das Marcas</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Zap className="w-4 h-4 text-[#6B705C] shrink-0" />
            <span className="font-medium">Checkout Stripe Instantâneo</span>
          </div>
          <div className="flex items-center gap-2.5">
            <PackageCheck className="w-4 h-4 text-[#6B705C] shrink-0" />
            <span className="font-medium">Embalagem Cuidadosa & Envio Rápido</span>
          </div>
        </div>
      </div>
    </section>
  );
};
