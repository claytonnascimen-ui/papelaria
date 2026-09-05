import React from 'react';
import { ShoppingBag, Search, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  onSearchChange,
  cartCount,
  onOpenCart,
}) => {
  return (
    <header id="site-header" className="sticky top-0 z-40 bg-[#F9F7F2]/95 backdrop-blur-md border-b border-[#E6E1D3]">
      {/* Top micro-bar */}
      <div id="top-announcement-bar" className="bg-[#3F4238] text-[#F9F7F2] text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#E6E1D3] shrink-0" />
            <span>Volta às Aulas & Escritório: Curadoria de materiais com checkout seguro via Stripe</span>
          </div>
          <div className="flex items-center gap-4 text-[#E6E1D3]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A5A58D]" />
              Pagamento Verificado
            </span>
            <span className="hidden md:inline text-[#6B705C]">|</span>
            <a 
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20os%20materiais%20de%20papelaria" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-[#F9F7F2] hover:text-[#A5A58D] transition-colors"
            >
              <PhoneCall className="w-3 h-3" />
              Suporte Especializado
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo */}
          <a href="#" id="brand-logo" className="flex items-center gap-3 shrink-0 group">
            <div className="w-9 h-9 bg-[#6B705C] rounded-full flex items-center justify-center text-white font-serif italic text-xl shadow-sm group-hover:bg-[#3F4238] transition-colors">
              P
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif italic text-2xl tracking-tight text-[#3F4238]">
                  Papelaria Central
                </span>
                <span className="bg-[#E6E1D3] text-[#3F4238] text-[9px] font-bold px-2 py-0.5 rounded-full tracking-widest uppercase">
                  Curadoria
                </span>
              </div>
              <p className="text-[11px] text-[#6B705C] hidden sm:block font-medium">
                Materiais Essenciais de Escrita & Escritório
              </p>
            </div>
          </a>

          {/* Search bar */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <input
                id="search-input-header"
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Buscar canetas, sulfites, lápis, réguas..."
                className="w-full pl-10 pr-4 py-2 bg-white/90 border border-[#E6E1D3] rounded-full text-xs text-[#3F4238] focus:outline-none focus:ring-2 focus:ring-[#6B705C]/20 focus:border-[#6B705C] focus:bg-white transition-all placeholder:text-[#A5A58D]"
              />
              <Search className="w-4 h-4 text-[#A5A58D] absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] font-semibold text-[#A5A58D] hover:text-[#3F4238]"
                >
                  Limpar
                </button>
              )}
            </div>
          </div>

          {/* Action buttons & Cart */}
          <div className="flex items-center gap-3">
            <a
              id="nav-link-products"
              href="#catalogo"
              className="hidden lg:inline-flex text-xs uppercase tracking-widest font-semibold text-[#3F4238] opacity-75 hover:opacity-100 px-3 py-2 transition-opacity"
            >
              Coleções
            </a>
            <a
              id="nav-link-guarantees"
              href="#garantias"
              className="hidden lg:inline-flex text-xs uppercase tracking-widest font-semibold text-[#3F4238] opacity-75 hover:opacity-100 px-3 py-2 transition-opacity"
            >
              Garantia
            </a>
            <a
              id="nav-link-faq"
              href="#duvidas"
              className="hidden lg:inline-flex text-xs uppercase tracking-widest font-semibold text-[#3F4238] opacity-75 hover:opacity-100 px-3 py-2 transition-opacity"
            >
              Dúvidas
            </a>

            {/* Cart Button */}
            <button
              id="open-cart-button"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 py-2 bg-[#6B705C] hover:bg-[#3F4238] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
              aria-label="Ver sacola de compras"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sacola</span>
              <span id="cart-counter-badge" className="bg-[#A5A58D] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="pb-3 md:hidden">
          <div className="relative">
            <input
              id="search-input-mobile"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar no catálogo..."
              className="w-full pl-10 pr-4 py-2 bg-white/90 border border-[#E6E1D3] rounded-full text-xs text-[#3F4238] focus:outline-none focus:ring-2 focus:ring-[#6B705C]/20 focus:border-[#6B705C] focus:bg-white transition-all placeholder:text-[#A5A58D]"
            />
            <Search className="w-4 h-4 text-[#A5A58D] absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </header>
  );
};
