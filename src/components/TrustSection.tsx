import React from 'react';
import { Lock, Truck, Award, Headphones, CreditCard, ShieldCheck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section id="garantias" className="py-16 bg-[#F9F7F2] border-t border-b border-[#E6E1D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#3F4238] bg-[#E6E1D3] px-3 py-1 rounded-full inline-block mb-3">
            Transparência & Segurança
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#3F4238] tracking-tight">
            Compre com total tranquilidade
          </h2>
          <p className="text-sm text-[#6B705C] mt-2">
            Estrutura planejada para você adquirir seus materiais escolares e de escritório sem complicação.
          </p>
        </div>

        {/* 4 Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div id="trust-card-payment" className="bg-white p-6 rounded-2xl border border-[#E6E1D3] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#6B705C] text-white flex items-center justify-center mb-4">
                <Lock className="w-5 h-5 text-[#F9F7F2]" />
              </div>
              <h3 className="text-lg font-serif text-[#3F4238] mb-2">Checkout Oficial Stripe</h3>
              <p className="text-xs text-[#6B705C] leading-relaxed">
                Seus dados financeiros não passam por intermediários. A cobrança é feita diretamente na infraestrutura segura da Stripe.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F0EEE6] flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#6B705C]">
              <ShieldCheck className="w-3.5 h-3.5" />
              Criptografia SSL 256-bit
            </div>
          </div>

          <div id="trust-card-shipping" className="bg-white p-6 rounded-2xl border border-[#E6E1D3] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#6B705C] text-white flex items-center justify-center mb-4">
                <Truck className="w-5 h-5 text-[#F9F7F2]" />
              </div>
              <h3 className="text-lg font-serif text-[#3F4238] mb-2">Envio Rápido & Rastreável</h3>
              <p className="text-xs text-[#6B705C] leading-relaxed">
                Assim que seu pagamento é confirmado pelo Stripe, seu pedido é separado e despachado com código de rastreio direto no seu e-mail.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F0EEE6] flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#6B705C]">
              <ShieldCheck className="w-3.5 h-3.5" />
              Pronta Entrega
            </div>
          </div>

          <div id="trust-card-original" className="bg-white p-6 rounded-2xl border border-[#E6E1D3] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#6B705C] text-white flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-[#F9F7F2]" />
              </div>
              <h3 className="text-lg font-serif text-[#3F4238] mb-2">Produtos 100% Originais</h3>
              <p className="text-xs text-[#6B705C] leading-relaxed">
                Trabalhamos com marcas reconhecidas no mercado: Bic, Chamex, Pentel, Cis e fabricantes de alta reputação.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F0EEE6] flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#6B705C]">
              <ShieldCheck className="w-3.5 h-3.5" />
              Garantia do Fabricante
            </div>
          </div>

          <div id="trust-card-support" className="bg-white p-6 rounded-2xl border border-[#E6E1D3] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#6B705C] text-white flex items-center justify-center mb-4">
                <Headphones className="w-5 h-5 text-[#F9F7F2]" />
              </div>
              <h3 className="text-lg font-serif text-[#3F4238] mb-2">Suporte Especializado</h3>
              <p className="text-xs text-[#6B705C] leading-relaxed">
                Precisa de ajuda com o pedido, compras corporativas ou tirar dúvidas? Nossa equipe está à disposição via WhatsApp.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F0EEE6] flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#6B705C]">
              <CreditCard className="w-3.5 h-3.5" />
              Cartões, Pix & Boleto
            </div>
          </div>
        </div>

        {/* Proof metrics */}
        <div className="mt-12 bg-[#3F4238] text-white rounded-2xl p-8 border border-[#3F4238] shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-serif text-3xl text-[#E6E1D3] mb-1">+10.000</div>
              <div className="text-xs text-[#A5A58D] uppercase tracking-wider font-medium">Itens Entregues</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-[#E6E1D3] mb-1">100%</div>
              <div className="text-xs text-[#A5A58D] uppercase tracking-wider font-medium">Checkout Seguro</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-[#E6E1D3] mb-1">4.9 / 5.0</div>
              <div className="text-xs text-[#A5A58D] uppercase tracking-wider font-medium">Satisfação dos Clientes</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-[#E6E1D3] mb-1">24h</div>
              <div className="text-xs text-[#A5A58D] uppercase tracking-wider font-medium">Tempo Médio de Envio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
