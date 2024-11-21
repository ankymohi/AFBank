import React from 'react';
import './ForSellers.css';
import { FaTools, FaListAlt } from 'react-icons/fa'; // Example icons

const ForSellers = () => {
  return (
    <>
      <div className="sell-business-section">
        {/* Background image section */}
        <div className="sell-business-header">
          <div className="header-content">
            <i className="icon-center"><FaTools /></i>
            <br />
            <h1>Venda Seu Negócio Online</h1>
            <p>Facilitamos a compra e venda de negócios online.</p>
          </div>
        </div>

        {/* Two divs below */}
        <div className="sell-business-options">
          {/* Yellow box */}
          <div className="option yellow-box">
            <i className="option-icon"><FaTools /></i>
            <br />
            <h3>Ferramenta de Valoração</h3>
            <p>Descubra o valor do seu negócio online hoje com esta ferramenta.</p>
            <button className="yellow-button">Experimentar Agora</button>
          </div>

          {/* Blue box */}
          <div className="option blue-box">
            <i className="option-icon"><FaListAlt /></i>
            <h3>Liste Seu Negócio Online</h3>
            <p>
              Liste seu negócio online e alcance milhares de compradores qualificados e ávidos.
            </p>
            <button className="blue-button">Começar Agora</button>
          </div>
        </div>
      </div>

      <div className="why-sell-section">
        <div className="why-sell-header">
          <h2>Por Que Vender Com AF Bank?</h2>
          <p>
            Você ganha mais dinheiro conosco do que vendendo seu site ou negócio online sozinho.
          </p>
        </div>

        <div className="why-sell-content">
          <div className="highlighted-formula">
            <h3>Como Determinamos o Preço do Seu Negócio</h3>
            <p>
              Normalmente, listamos um site calculando a média dos últimos 6 a 12 meses de lucro líquido e 
              multiplicando esse valor por um múltiplo que varia de 20X a 60X+, dependendo de vários fatores.
            </p>
            <p className="formula">
              [Média de Lucro Líquido de 6-12 Meses] x (20 a 60+) = <strong>Preço de Listagem</strong>
            </p>
          </div>

          <div className="why-sell-points">
            <div className="point">
              <h4>Alcance Milhares de Compradores Ávidos</h4>
              <p>
                Sempre que listamos novos sites, enviamos e-mails para milhares de compradores interessados. 
                Esses compradores inundam o marketplace, desbloqueando seus anúncios e competindo para fechar um negócio.
              </p>
            </div>

            <div className="point">
              <h4>Conhecemos Nossos Compradores</h4>
              <p>
                Nosso relacionamento com os compradores nos permite fazer recomendações personalizadas, 
                aumentando suas chances de uma venda bem-sucedida.
              </p>
            </div>

            <div className="point">
              <h4>Sem Curiosos ou Golpistas</h4>
              <p>
                Gerenciamos todas as comunicações, economizando seu tempo e garantindo que você só interaja com 
                compradores sérios e verificados.
              </p>
            </div>

            <div className="point">
              <h4>Sua Ideia de Negócio Fica Protegida</h4>
              <p>
                Escondemos o URL do seu site e outras informações sensíveis para evitar que imitadores copiem 
                seu modelo de negócio.
              </p>
            </div>

            <div className="point">
              <h4>O Menor Período de Exclusividade da Indústria</h4>
              <p>
                Nosso período de exclusividade é de apenas 2 meses. Se seu negócio não for vendido, você 
                pode listá-lo em outros lugares sem restrições.
              </p>
            </div>

            <div className="point">
              <h4>Negociações de Alta Qualidade</h4>
              <p>
                Ajudamos a estruturar e negociar negócios, garantindo que ambas as partes fiquem satisfeitas. 
                Nossa experiência assegura que o acordo não seja prejudicado por detalhes menores.
              </p>
            </div>

            <div className="point">
              <h4>Relaxe Enquanto Cuidamos da Transferência</h4>
              <p>
                Cuidamos da migração do seu site ou negócio para o comprador. É um serviço completo, para que 
                você possa relaxar enquanto fazemos tudo por você.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="business-sell-section">
        <div className="overlay">
          <div className="container">
            <h2>Tem um Negócio Online para Vender?</h2>
            <p>Confira as ferramentas online abaixo para vender ou avaliar seu negócio</p>
            <div className="button-group">
              <button className="btn-primary">Vender Meu Negócio Online</button>
              <button className="btn-secondary">Experimentar Ferramenta de Valoração</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForSellers;
