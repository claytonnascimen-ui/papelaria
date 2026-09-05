import { useState, useMemo, useEffect } from 'react';
import { 
  SlidersHorizontal, 
  Sparkles, 
  ShoppingBag, 
  CheckCircle2, 
  ArrowUpDown,
  FilterX
} from 'lucide-react';
import { PRODUCTS } from './data/products';
import { Product, CartItem, SortOption } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { TrustSection } from './components/TrustSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('Todos');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cart state with local storage persistence
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('papelaria_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('papelaria_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 2800);
  };

  // Categories list
  const categories = useMemo(() => {
    const list = ['Todos'];
    PRODUCTS.forEach((p) => {
      if (!list.includes(p.subCategory)) {
        list.push(p.subCategory);
      }
    });
    return list;
  }, []);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.subCategory.toLowerCase().includes(q)
      );
    }

    // Subcategory filter
    if (selectedSubCategory !== 'Todos') {
      list = list.filter((p) => p.subCategory === selectedSubCategory);
    }

    // Sorting
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
      list.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
    }

    return list;
  }, [searchQuery, selectedSubCategory, sortBy]);

  // Cart actions
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showToast(`"${product.name}" adicionado à sacola!`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartTotalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F2] text-[#3F4238] selection:bg-[#E6E1D3] selection:text-[#3F4238]">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          id="toast-notification"
          role="status"
          className="fixed bottom-6 right-6 z-50 bg-[#3F4238] text-[#F9F7F2] px-5 py-3 rounded-full shadow-xl flex items-center gap-2.5 text-xs font-semibold border border-[#4E5345] animate-in slide-in-from-bottom-5 duration-200"
        >
          <CheckCircle2 className="w-4 h-4 text-[#E6E1D3] shrink-0" />
          <span>{toastMessage}</span>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="ml-2 text-[#E6E1D3] hover:underline font-bold uppercase tracking-wider text-[11px]"
          >
            Ver Sacola
          </button>
        </div>
      )}

      {/* Navbar */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Hero Section */}
      <Hero />

      {/* Main Catalog Section */}
      <main id="catalogo" className="flex-1 py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#6B705C] bg-[#E6E1D3]/50 px-3 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Itens Selecionados</span>
            </div>
            <h2 id="catalog-title" className="text-3xl sm:text-4xl font-serif text-[#3F4238] tracking-tight">
              Catálogo de Materiais de Papelaria
            </h2>
            <p className="text-sm text-[#6B705C] mt-1">
              Escolha seu produto e conclua seu pagamento seguro via Stripe em poucos segundos.
            </p>
          </div>

          {/* Quick Stats Indicator */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#6B705C] bg-white px-3.5 py-1.5 rounded-full border border-[#E6E1D3] shadow-xs shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#6B705C]" />
            <span>{filteredProducts.length} produtos disponíveis</span>
          </div>
        </div>

        {/* Filters & Sorting Controls */}
        <div
          id="catalog-filters-bar"
          className="bg-white p-3.5 rounded-2xl border border-[#E6E1D3] mb-8 shadow-xs flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center"
        >
          {/* Subcategory Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-2 lg:pb-0 scrollbar-none">
            <span className="text-xs font-bold text-[#6B705C] mr-1 shrink-0 flex items-center gap-1 uppercase tracking-wider text-[10px]">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Categorias:
            </span>
            {categories.map((cat) => {
              const count =
                cat === 'Todos'
                  ? PRODUCTS.length
                  : PRODUCTS.filter((p) => p.subCategory === cat).length;
              const isSelected = selectedSubCategory === cat;
              return (
                <button
                  key={cat}
                  id={`filter-chip-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  type="button"
                  onClick={() => setSelectedSubCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                    isSelected
                      ? 'bg-[#6B705C] text-white shadow-xs'
                      : 'bg-[#F9F7F2] hover:bg-[#E6E1D3] text-[#3F4238] border border-[#E6E1D3]'
                  }`}
                >
                  {cat} <span className="opacity-70 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Sorting Dropdown */}
          <div className="flex items-center gap-2 shrink-0 w-full lg:w-auto justify-end">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#A5A58D] shrink-0" />
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#6B705C] shrink-0">Ordenar:</span>
            <select
              id="sort-select-dropdown"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-[#F9F7F2] border border-[#E6E1D3] text-[#3F4238] text-xs font-semibold rounded-full px-3.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#6B705C]/20 focus:border-[#6B705C]"
            >
              <option value="featured">Destaques da Loja</option>
              <option value="price-asc">Menor Preço</option>
              <option value="price-desc">Maior Preço</option>
              <option value="name-asc">Nome (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div
            id="empty-results-state"
            className="bg-white rounded-2xl border border-[#E6E1D3] p-12 text-center max-w-md mx-auto my-8 shadow-xs space-y-4"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-[#F9F7F2] flex items-center justify-center text-[#A5A58D]">
              <FilterX className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-serif text-[#3F4238]">Nenhum produto encontrado</h3>
            <p className="text-xs text-[#6B705C] leading-relaxed">
              Não encontramos resultados para sua busca ou filtro atual. Tente buscar por outro termo ou limpe os filtros.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedSubCategory('Todos');
              }}
              className="px-5 py-2.5 bg-[#6B705C] hover:bg-[#3F4238] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
            >
              Ver Todos os Produtos
            </button>
          </div>
        ) : (
          <div
            id="products-grid-container"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product) => {
              const isAdded = cartItems.some((item) => item.product.id === product.id);
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenDetails={setActiveModalProduct}
                  onAddToCart={handleAddToCart}
                  isAddedToCart={isAdded}
                />
              );
            })}
          </div>
        )}

        {/* Floating helper strip */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E6E1D3] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#6B705C] text-white flex items-center justify-center shrink-0">
              <ShoppingBag className="w-5 h-5 text-[#F9F7F2]" />
            </div>
            <div>
              <h4 className="text-lg font-serif text-[#3F4238]">
                Precisa de uma lista de materiais personalizada?
              </h4>
              <p className="text-xs text-[#6B705C]">
                Adicione todos os produtos que deseja à sacola ou pague cada um de forma independente no Stripe com 1 clique.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="px-5 py-2.5 bg-[#6B705C] hover:bg-[#3F4238] text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-xs whitespace-nowrap"
          >
            Abrir Sacola ({cartTotalCount})
          </button>
        </div>
      </main>

      {/* Trust & Guarantee Section */}
      <TrustSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onAddToCart={handleAddToCart}
        isAddedToCart={
          activeModalProduct
            ? cartItems.some((item) => item.product.id === activeModalProduct.id)
            : false
        }
      />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
