import React, { useState } from 'react';
import './Buyers.css';

const Buyers = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { 
      question: "Uma assinatura Platinum garante que eu encontre uma startup que eu goste?", 
      answer: "Embora ofereçamos listas selecionadas e verificadas, encontrar a startup certa depende de suas preferências e necessidades." 
    },
    { 
      question: "Posso cancelar uma assinatura Platinum ou Premium?", 
      answer: "Sim, você pode cancelar a qualquer momento. Seu acesso permanecerá ativo até o final do ciclo de cobrança." 
    },
    { 
      question: "Já tenho uma assinatura Premium. Posso fazer upgrade para Platinum?", 
      answer: "Sim, você pode fazer upgrade a qualquer momento. O custo será ajustado com base na sua assinatura existente." 
    },
    { 
      question: "Como funciona o suporte prioritário com a assinatura Platinum?", 
      answer: "Membros Platinum recebem respostas rápidas e suporte dedicado de nossa equipe experiente." 
    },
    { 
      question: "Preciso de uma assinatura Platinum para adquirir mais de uma startup?", 
      answer: "Não, mas o Platinum oferece ferramentas avançadas e acesso a startups de todos os tamanhos, facilitando as aquisições." 
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <div className="buyers-container">
      {/* Heading Section */}
      <div className="buyers-heading">
        <h2>Preços Simples e Transparentes</h2>
        <p>
          Seja sua primeira aquisição ou você já adquira regularmente, temos o plano certo para você.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="buyers-cards">
        {/* Basic Plan */}
        <div className="buyers-card">
          <h3>Para adquirentes aspirantes</h3>
          <h2 className="plan-title">Básico</h2>
          <div className="plan-price">Gratuito</div>
          <p className="plan-description">Explore 10 listas. Sem necessidade de cartão de crédito.</p>
          <button className="cta-button">Iniciar Avaliação Gratuita</button>
        </div>

        {/* Premium Plan (Highlighted) */}
        <div className="buyers-card premium-card">
          <div className="popular-badge">MAIS POPULAR</div>
          <h3>Para empreendedores de carreira</h3>
          <h2 className="plan-title">⭐ Premium</h2>
          <div className="plan-price">R$ 2497/ano</div>
          <p className="plan-description">Acesse startups com até R$ 250 mil em receita TTM.</p>
          <button className="cta-button">Começar com o Premium</button>
        </div>

        {/* Platinum Plan */}
        <div className="buyers-card">
          <h3>Para adquirentes em série</h3>
          <h2 className="plan-title">💎 Platinum</h2>
          <div className="plan-price">R$ 4997/ano</div>
          <p className="plan-description">Acesse startups verificadas de todos os tamanhos.</p>
          <button className="cta-button">Ir para o Platinum</button>
        </div>
      </div>
    </div>

    <div className="comparison-table-container">
      {/* Heading Section */}
      <div className="comparison-heading">
        <h2>Compare nossos planos de preços e encontre o ideal para você</h2>
      </div>

      {/* Table Section */}
      <div className="comparison-table">
        {/* Table Header */}
        <div className="table-header">
          <div className="feature-column"></div>
          <div className="plan-column">Gratuito</div>
          <div className="plan-column">Premium</div>
          <div className="plan-column">Platinum</div>
        </div>

        {/* Table Rows */}
        {[
          "Visualizar detalhes públicos de startups listadas (até o limite do plano)",
          "Filtrar listas para encontrar seu ajuste ideal",
          "Receber notificações instantâneas de novas startups que correspondem aos seus critérios de busca",
          "Explorar startups de qualidade selecionadas por nossa equipe",
          "Visualizar métricas financeiras, de clientes e de tráfego web conectadas",
          "Simplificar sua aquisição com nosso fluxo de trabalho guiado",
          "Criar, assinar e enviar LOIs e APAs em minutos",
          "Visualizar perfis de vendedores verificados (identidade, e-mail e redes sociais)",
          "Contactar fundadores de startups verificadas com até R$ 250 mil em receita",
          "Contactar fundadores de startups verificadas de todos os tamanhos",
          "Suporte ao cliente prioritário",
        ].map((feature, index) => (
          <div className="table-row" key={index}>
            <div className="feature-column">{feature}</div>
            <div className="plan-column">{index < 3 ? "✔️" : "❌"}</div>
            <div className="plan-column">{index < 6 ? "✔️" : "❌"}</div>
            <div className="plan-column">{index > 8 ? "✔️" : "❌"}</div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Buttons */}
      <div className="cta-section">
        <button className="cta-button">Iniciar Avaliação Gratuita</button>
        <button className="cta-button premium-button">Começar com o Premium</button>
        <button className="cta-button platinum-button">Ir para o Platinum</button>
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

export default Buyers;
