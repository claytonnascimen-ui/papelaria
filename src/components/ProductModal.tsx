import React from 'react';
import { X, ExternalLink, ShieldCheck, Truck, RefreshCw, Star, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  isAddedToCart: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isAddedToCart,
}) => {
  if (!product) return null;

  return (
    <div
      id="product-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#3F4238]/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="product-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#E6E1D3] animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Close Button */}
        <button
          id="close-modal-button"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#F9F7F2] hover:bg-[#E6E1D3] text-[#3F4238] border border-[#E6E1D3] flex items-center justify-center transition-colors"
          aria-label="Fechar janela"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image Stage */}
          <div className="bg-[#FDFCFB] p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#E6E1D3] relative">
            {product.badge && (
              <span className="absolute top-4 left-4 bg-[#3F4238] text-[#F9F7F2] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm">
                {product.badge}
              </span>
            )}
            <img
              src={product.imageUrl}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="max-h-64 object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              {/* Category */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B705C] bg-[#E6E1D3]/50 px-2.5 py-0.5 rounded-full">
                  {product.category} • {product.subCategory}
                </span>
              </div>

              {/* Title */}
              <h2 id="modal-product-title" className="text-2xl font-serif text-[#3F4238] mb-2">
                {product.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center text-[#A5A58D]">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-xs font-bold text-[#3F4238]">{product.rating.toFixed(1)}</span>
                <span className="text-xs text-[#A5A58D]">({product.reviewsCount} avaliações de clientes)</span>
              </div>

              {/* Description */}
              <div className="space-y-2 mb-6">
                <p className="text-xs text-[#6B705C] leading-relaxed">
                  {product.description}
                </p>
                {product.unitInfo && (
                  <p className="text-[11px] text-[#6B705C] bg-[#F9F7F2] border border-[#E6E1D3] p-2 rounded-xl font-medium">
                    Especificação: {product.unitInfo}
                  </p>
                )}
              </div>

              {/* Trust Points */}
              <div className="space-y-2 text-xs text-[#6B705C] mb-6 bg-[#F9F7F2] p-3 rounded-xl border border-[#E6E1D3]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#6B705C] shrink-0" />
                  <span>Ambiente seguro de pagamento <strong>Stripe</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#6B705C] shrink-0" />
                  <span>Envio com código de rastreamento</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-[#6B705C] shrink-0" />
                  <span>Garantia de satisfação ou troca em 7 dias</span>
                </div>
              </div>
            </div>

            {/* Bottom pricing and buy */}
            <div>
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A5A58D] block font-medium">Valor total</span>
                  <span className="font-serif text-3xl text-[#3F4238] tracking-tight">
                    {formatPrice(product.price)}
                  </span>
                </div>
                <span className="text-[10px] text-[#3F4238] font-bold uppercase tracking-wider bg-[#E6E1D3]/70 px-2.5 py-1 rounded-full">
                  Em estoque
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  id="modal-buy-stripe-button"
                  href={product.paymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-[#6B705C] hover:bg-[#3F4238] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all text-center"
                >
                  <span>Pagar com Stripe Agora</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#E6E1D3]" />
                </a>

                <button
                  type="button"
                  onClick={() => onAddToCart(product)}
                  className={`w-full py-2.5 px-4 rounded-full border font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                    isAddedToCart
                      ? 'bg-[#E6E1D3] border-[#A5A58D] text-[#3F4238]'
                      : 'bg-white hover:bg-[#F9F7F2] border-[#E6E1D3] text-[#3F4238]'
                  }`}
                >
                  {isAddedToCart ? (
                    <>
                      <Check className="w-4 h-4 text-[#6B705C]" />
                      <span>Item Adicionado à Sacola</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#6B705C]" />
                      <span>Adicionar à Sacola de Compras</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
