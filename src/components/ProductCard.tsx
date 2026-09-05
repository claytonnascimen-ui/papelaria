import React, { useState } from 'react';
import { ExternalLink, ShoppingBag, Star, Check, Info, ShieldCheck, ImageOff } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../data/products';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  isAddedToCart: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetails,
  onAddToCart,
  isAddedToCart,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div
      id={`product-card-${product.id}`}
      className="group relative bg-white border border-[#E6E1D3] rounded-2xl flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md hover:border-[#A5A58D] transition-all duration-200"
    >
      {/* Top Media Area */}
      <div className="relative w-full pt-[85%] bg-[#FDFCFB] overflow-hidden border-b border-[#F0EEE6]">
        {/* Floating badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#3F4238] text-[#F9F7F2] shadow-sm">
              {product.badge}
            </span>
          </div>
        )}

        {/* Subcategory chip */}
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider bg-white/95 text-[#6B705C] border border-[#E6E1D3] shadow-xs">
            {product.subCategory}
          </span>
        </div>

        {/* Product Image */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          {!imageError ? (
            <img
              id={`product-img-${product.id}`}
              src={product.imageUrl}
              alt={product.name}
              referrerPolicy="no-referrer"
              loading="lazy"
              onLoad={() => setIsImageLoading(false)}
              onError={() => {
                setImageError(true);
                setIsImageLoading(false);
              }}
              className={`max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105 ${
                isImageLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-[#A5A58D] gap-2 text-center p-4">
              <ImageOff className="w-10 h-10 stroke-1" />
              <span className="text-xs font-medium text-[#6B705C]">{product.name}</span>
            </div>
          )}

          {/* Loading spinner placeholder */}
          {isImageLoading && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#FDFCFB]">
              <div className="w-6 h-6 border-2 border-[#E6E1D3] border-t-[#6B705C] rounded-full animate-spin" />
            </div>
          )}
        </div>

        {/* Quick detail overlay trigger on hover */}
        <button
          type="button"
          onClick={() => onOpenDetails(product)}
          className="absolute bottom-3 right-3 z-10 w-8 h-8 rounded-full bg-white/95 text-[#3F4238] hover:bg-[#F9F7F2] border border-[#E6E1D3] flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all active:scale-95"
          title="Ver detalhes do produto"
          aria-label={`Ver detalhes de ${product.name}`}
        >
          <Info className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-2">
            <div className="flex items-center text-[#A5A58D]">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-bold text-[#3F4238]">{product.rating.toFixed(1)}</span>
            <span className="text-xs text-[#A5A58D]">({product.reviewsCount} avaliações)</span>
          </div>

          {/* Product Name */}
          <h3
            id={`product-title-${product.id}`}
            className="text-lg font-serif text-[#3F4238] tracking-tight leading-snug mb-1 group-hover:text-[#6B705C] transition-colors"
          >
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-xs text-[#6B705C] line-clamp-2 leading-relaxed mb-3">
            {product.description}
          </p>

          {product.unitInfo && (
            <div className="inline-block px-2.5 py-0.5 bg-[#F9F7F2] text-[#6B705C] border border-[#E6E1D3] rounded-full text-[10px] font-medium uppercase tracking-wider mb-3">
              {product.unitInfo}
            </div>
          )}
        </div>

        {/* Pricing & Checkout Block */}
        <div className="pt-3 border-t border-[#F0EEE6] mt-2">
          <div className="flex items-baseline justify-between mb-3.5">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#A5A58D] font-medium block">Preço à vista</span>
              <span
                id={`product-price-${product.id}`}
                className="font-serif text-2xl text-[#3F4238] tracking-tight"
              >
                {formatPrice(product.price)}
              </span>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-[#6B705C] bg-[#E6E1D3]/50 px-2 py-0.5 rounded-full">
                <ShieldCheck className="w-3 h-3" />
                Stripe Checkout
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            {/* Direct Stripe Buy Button */}
            <a
              id={`buy-stripe-btn-${product.id}`}
              href={product.paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#6B705C] hover:bg-[#3F4238] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-[0.98] text-center"
              title="Comprar diretamente no Stripe seguro"
            >
              <span>Comprar Agora</span>
              <ExternalLink className="w-3 h-3 text-[#E6E1D3] shrink-0" />
            </a>

            {/* Add to Bag or View details */}
            <button
              id={`add-bag-btn-${product.id}`}
              type="button"
              onClick={() => onAddToCart(product)}
              className={`px-3.5 py-2.5 rounded-full border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                isAddedToCart
                  ? 'bg-[#E6E1D3] border-[#A5A58D] text-[#3F4238]'
                  : 'bg-white hover:bg-[#F9F7F2] border-[#E6E1D3] text-[#3F4238]'
              }`}
              title="Adicionar à sacola de compras"
              aria-label={`Adicionar ${product.name} à sacola`}
            >
              {isAddedToCart ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#6B705C]" />
                  <span className="hidden sm:inline text-xs">Na sacola</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-[#6B705C]" />
                  <span className="hidden sm:inline text-xs">Sacola</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
