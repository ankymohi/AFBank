import React, { useState } from 'react'
import './Sellers.css';

const Sellers = () => {
  const [activePrice, setActivePrice] = useState('below250k');
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "Por que há uma taxa de listagem?", answer: "A taxa de listagem garante vendedores sérios e apoia as operações da plataforma." },
    { question: "Eu pago uma taxa se não conseguir vender minha startup?", answer: "Não, você paga uma taxa de sucesso apenas se sua startup for vendida com sucesso." },
    { question: "Quem paga pelo serviço de escrow?", answer: "As taxas de escrow geralmente são compartilhadas entre o comprador e o vendedor." },
    { question: "Como o meu conselheiro especializado me ajuda?", answer: "Seu conselheiro ajuda com precificação, negociação e garante um processo de transação tranquilo." },
    { question: "Preciso de serviços profissionais (como corretor) ao vender com AF Bank.com?", answer: "Não, o serviço Guided by AF Bank oferece toda a assistência necessária sem corretores adicionais." },
    { question: "Como o Guided by AF Bank funciona?", answer: "Guided by AF Bank oferece assistência personalizada ao longo da sua jornada de venda." },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="pricing-container">
        {/* Título fora do cartão */}
        <div className="pricing-heading">
          <h2>Um Plano de Aquisição Personalizado que Escala com Você</h2>
          <p>Preços escaláveis com base no preço solicitado pela sua startup.</p>
        </div>

        {/* Cartão */}
        <div className="pricing-card">
          {/* Seção esquerda */}
          <div className="pricing-left">
            <div className="price-tabs">
              <button
                className={`price-tab ${activePrice === 'below250k' ? 'active' : ''}`}
                onClick={() => setActivePrice('below250k')}
              >
                $250k
              </button>
              <button
                className={`price-tab ${activePrice === '250kTo1M' ? 'active' : ''}`}
                onClick={() => setActivePrice('250kTo1M')}
              >
                $250k-$1M
              </button>
              <button
                className={`price-tab ${activePrice === 'above1M' ? 'active' : ''}`}
                onClick={() => setActivePrice('above1M')}
              >
                $1M+
              </button>
            </div>

            <div className="pricing-details">
              {activePrice === 'below250k' && (
                <>
                  <h3>Para preços abaixo de $250k</h3>
                  <div className="percentage-highlight">12%</div>
                  <p>taxa de fechamento quando você vender<hr className='hr' ></hr></p>
                  <p>Mais 99 reais./mês para listar</p>
                </>
              )}
              {activePrice === '250kTo1M' && (
                <>
                  <h3>Para preços entre $250k-$1M</h3>
                  <div className="percentage-highlight">10%</div>
                  <p>taxa de fechamento quando você vender</p>
                  <hr className='hr' ></hr>
                  <p>Mais 199 reais/mês para listar</p>
                </>
              )}
              {activePrice === 'above1M' && (
                <>
                  <h3>Para preços acima de $1M</h3>
                  <div className="percentage-highlight">8%</div>
                  <p>taxa de fechamento quando você vender</p>
                  <hr className='hr' ></hr>
                  <p>Mais 299 reais/mês para listar</p>
                </>
              )}
            </div>

            <a href="#" className="cta-button">Começar</a>
          </div>

          {/* Seção direita */}
          <div className="pricing-right">
            <div className="featur">
              <h3>💼 Maior Interesse</h3>
              <p>Atraia mais compradores com marketing e suporte para listagem.</p>
            </div>

            <div className="featur">
              <h3>🔑 Orientação Especializada</h3>
              <p>Venda pelo maior preço e melhores condições com a nossa ajuda.</p>
            </div>

            <div className="featur">
              <h3>🔒 Escrow Seguro e Gratuito</h3>
              <p>Feche com segurança e facilidade com parceiros confiáveis de escrow.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-container">
        <h2>Perguntas Frequentes</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className="faq-toggle">{activeIndex === index ? "-" : "+"}</span>
              </div>
              {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sellers;
