import React from 'react';
import { ShieldCheck, Mail, Phone, Lock, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="site-footer" className="bg-[#3F4238] text-[#E6E1D3] pt-14 pb-8 border-t border-[#3F4238]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#4E5345]">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#6B705C] text-white flex items-center justify-center font-serif italic text-xl shadow-sm">
                P
              </div>
              <span className="font-serif italic text-2xl text-white tracking-tight">
                Papelaria Central
              </span>
            </div>
            <p className="text-xs text-[#A5A58D] max-w-md leading-relaxed">
              Sua loja especializada em materiais escolares, de escritório e papelaria técnica. Curadoria de itens com garantia de procedência, pronta entrega e checkout seguro criptografado oficial da Stripe.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#E6E1D3] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#A5A58D]" />
              <span>Ambiente Protegido com Criptografia SSL e Checkout Stripe</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-2 text-xs text-[#A5A58D]">
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">
                  Catálogo de Produtos
                </a>
              </li>
              <li>
                <a href="#garantias" className="hover:text-white transition-colors">
                  Segurança & Pagamentos
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="https://stripe.com/br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Sobre a Segurança Stripe
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Atendimento</h4>
            <ul className="space-y-2.5 text-xs text-[#A5A58D]">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E6E1D3] shrink-0" />
                <span>contato@papelariacentral.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E6E1D3] shrink-0" />
                <span>(11) 99999-9999 (WhatsApp)</span>
              </li>
              <li className="text-[11px] text-[#A5A58D]/80 pt-1">
                Atendimento de Segunda a Sexta das 08h às 18h
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A5A58D]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Papelaria Central. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-[#E6E1D3]">
              <Lock className="w-3 h-3 text-[#A5A58D]" />
              Pagamentos processados com segurança pela Stripe
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
