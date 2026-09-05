import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Como funciona a compra através do link Stripe?',
    answer:
      'Ao clicar no botão "Comprar Agora", você é encaminhado diretamente para o checkout oficial e protegido da Stripe. Lá, você informa seu endereço de entrega e escolhe sua forma de pagamento com criptografia bancária de ponta a ponta.'
  },
  {
    question: 'Quais as formas de pagamento disponíveis?',
    answer:
      'O checkout Stripe aceita os principais cartões de crédito nacionais e internacionais (Mastercard, Visa, Elo, American Express), além de opções locais como Pix e carteiras digitais compatíveis.'
  },
  {
    question: 'Como acompanho o envio do meu material de papelaria?',
    answer:
      'Imediatamente após a aprovação da compra, a confirmação é enviada para o e-mail cadastrado. Nossa equipe realiza a separação dos produtos em até 24 horas úteis e encaminha o código de rastreamento para você acompanhar a entrega.'
  },
  {
    question: 'Os produtos são originais e possuem garantia?',
    answer:
      'Sim, todos os itens (Canetas Bic, Sulfite Chamex, Lapiseira Cis, Grafite Pentel, réguas, etc.) são 100% originais, novos e embalados de fábrica, com garantia total contra defeitos de fabricação.'
  },
  {
    question: 'Posso comprar mais de um produto de uma só vez?',
    answer:
      'Com certeza! Você pode utilizar a "Sacola de Compras" do site para organizar sua lista escolar/escritório e abrir o checkout seguro de cada item desejado.'
  },
  {
    question: 'E se eu precisar de ajuda ou tiver alguma dúvida?',
    answer:
      'Nossa equipe de suporte está disponível via WhatsApp ou e-mail para responder quaisquer dúvidas antes, durante ou após a sua compra.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-16 bg-[#F9F7F2] border-b border-[#E6E1D3]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#3F4238] bg-[#E6E1D3] px-3 py-1 rounded-full inline-block mb-3">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#3F4238] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-sm text-[#6B705C] mt-2">
            Entenda como funciona o pedido, pagamento e envio dos seus produtos.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className="border border-[#E6E1D3] rounded-2xl overflow-hidden transition-all bg-white hover:border-[#A5A58D] shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-serif text-[#3F4238] text-base focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#A5A58D] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#6B705C]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#6B705C] leading-relaxed border-t border-[#F0EEE6]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
