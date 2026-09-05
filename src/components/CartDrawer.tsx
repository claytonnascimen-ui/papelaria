import React from 'react';
import { X, Trash2, ExternalLink, ShoppingBag, ShieldCheck, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { formatPrice } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div
      id="cart-drawer-backdrop"
      className="fixed inset-0 z-50 bg-[#3F4238]/60 backdrop-blur-sm flex justify-end"
      onClick={onClose}
    >
      <div
        id="cart-drawer-panel"
        role="dialog"
        aria-label="Sacola de Compras"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#F9F7F2] h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-200"
      >
        {/* Header */}
        <div className="p-5 border-b border-[#E6E1D3] flex items-center justify-between bg-[#F9F7F2]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#6B705C] text-white flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-[#F9F7F2]" />
            </div>
            <div>
              <h2 className="text-xl font-serif text-[#3F4238]">Sua Sacola</h2>
              <p className="text-xs text-[#6B705C]">
                {totalCount} {totalCount === 1 ? 'item selecionado' : 'itens selecionados'}
              </p>
            </div>
          </div>
          <button
            id="close-cart-drawer"
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#E6E1D3]/70 hover:bg-[#E6E1D3] text-[#3F4238] flex items-center justify-center transition-colors"
            aria-label="Fechar sacola"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#6B705C] space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#E6E1D3]/50 flex items-center justify-center text-[#6B705C]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-serif text-[#3F4238]">Sua sacola está vazia</h3>
              <p className="text-xs text-[#6B705C] max-w-xs">
                Navegue pela seleção e adicione os materiais essenciais de papelaria que você precisa.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 px-5 py-2.5 bg-[#6B705C] text-white text-xs uppercase tracking-wider font-bold rounded-full hover:bg-[#3F4238]"
              >
                Explorar Materiais
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center text-xs text-[#6B705C] pb-1">
                <span className="uppercase tracking-wider text-[10px] font-semibold">Lista de Materiais Escolhidos</span>
                <button
                  type="button"
                  onClick={onClearCart}
                  className="text-[#A5A58D] hover:text-rose-600 transition-colors text-[11px]"
                >
                  Limpar lista
                </button>
              </div>

              {cartItems.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  id={`cart-item-${product.id}`}
                  className="p-3.5 bg-white border border-[#E6E1D3] rounded-2xl flex gap-3 items-center justify-between shadow-xs"
                >
                  {/* Thumbnail */}
                  <div className="w-14 h-14 bg-[#FDFCFB] rounded-xl p-1.5 border border-[#E6E1D3] flex items-center justify-center shrink-0">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0 pr-2">
                    <h4 className="text-xs font-serif text-[#3F4238] truncate font-medium">
                      {product.name}
                    </h4>
                    <p className="text-[11px] text-[#6B705C]">
                      {formatPrice(product.price)} un
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-1.5">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                        className="w-5 h-5 rounded-full bg-[#E6E1D3] text-[#3F4238] flex items-center justify-center text-xs font-bold hover:bg-[#A5A58D]"
                        title="Diminuir quantidade"
                      >
                        -
                      </button>
                      <span className="text-xs font-semibold text-[#3F4238] w-4 text-center">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                        className="w-5 h-5 rounded-full bg-[#E6E1D3] text-[#3F4238] flex items-center justify-center text-xs font-bold hover:bg-[#A5A58D]"
                        title="Aumentar quantidade"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="text-right flex flex-col items-end gap-1.5 shrink-0">
                    <span className="text-xs font-serif text-[#3F4238] font-bold">
                      {formatPrice(product.price * quantity)}
                    </span>

                    <div className="flex items-center gap-1">
                      <a
                        href={product.paymentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold text-white bg-[#6B705C] hover:bg-[#3F4238] px-2.5 py-1 rounded-full transition-colors"
                        title={`Pagar ${product.name} no Stripe`}
                      >
                        Pagar <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(product.id)}
                        className="text-[#A5A58D] hover:text-rose-600 p-1 transition-colors"
                        title="Remover da sacola"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Footer Summary */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-[#E6E1D3] bg-[#F9F7F2] space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#6B705C] text-xs uppercase tracking-wider font-medium">Total acumulado:</span>
              <span className="text-2xl font-serif text-[#3F4238]">
                {formatPrice(totalAmount)}
              </span>
            </div>

            <div className="p-3.5 bg-white rounded-2xl border border-[#E6E1D3] text-xs text-[#6B705C] space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[#3F4238]">
                <ShieldCheck className="w-4 h-4 text-[#6B705C] shrink-0" />
                <span className="text-xs">Checkout Individual Stripe</span>
              </div>
              <p className="text-[11px] text-[#6B705C] leading-relaxed">
                Cada item possui link direto e exclusivo para pagamento seguro criptografado no Stripe. Clique em <strong>Pagar</strong> no item desejado acima.
              </p>
            </div>

            {/* Quick action for first item */}
            <a
              id="cart-primary-checkout-first-item"
              href={cartItems[0]?.product.paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-full bg-[#6B705C] hover:bg-[#3F4238] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all text-center"
            >
              <span>Comprar 1º Item ({cartItems[0]?.product.name})</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E6E1D3]" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
