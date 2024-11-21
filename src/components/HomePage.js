import React from 'react';
import './HomePage.css';
import macbookImage from '../assets/macbook.png';
import buyingbusiness from '../assets/buying-business-2.png';
import sellers from '../assets/sellers.png';
import amazon from '../assets/amazon-associates.svg';
import startup from '../assets/A-Startups-Guide-to-Ecommerce-Inventory-Management-506x296.jpg';
import future from '../assets/The-Future-of-E-commerce-Trends-and-Predictions-for-Shopify-Businesses-506x296.jpg';
import why from '../assets/Why-choose-us.jpg';
import right from '../assets/AI_Generated_Image_2024-11-19_469708523007201.png';
import left from '../assets/AI_Generated_Image_2024-11-19_469709646017201.png';
 import amazonfbm from '../assets/amazon-fbm.svg';
 import amazonkdp from '../assets/amazon-kdp.svg';
 import displayadvertising from '../assets/display-advertising.svg';
 import dropshipping from '../assets/dropshipping.svg';
import ecommerce from '../assets/e-commerce.svg';
 import amazonmerch from '../assets/amazon-merch.svg';
 import icon2 from '../assets/icon2.png';
 import icon3 from '../assets/icon5.png';
 import icon1 from '../assets/icon1.png';
 import icon4 from '../assets/icon4.jpg';
 import icon6 from '../assets/icon6.png';
const HomePage = () => {

  const listings = [
    { 
      monetization: "eCommerce", 
      niche: "Beleza", 
      id: "#80328", 
      profit: "R$65.406,00", 
      price: "R$1.438.910,00", 
      link: "/listing/80328" 
    },
    { 
      monetization: "Amazon FBA", 
      niche: "Arte, Crianças, Hobbies, Ocasiões & Presentes", 
      id: "#80821", 
      profit: "R$25.213,00", 
      price: "R$1.134.540,00", 
      link: "/listing/80821" 
    },
    {
      monetization: "Múltiplos",
      niche: "Boletins Informativos, Publicidade Display, Questionários, Entretenimento, Informação",
      id: "#80590",
      profit: "R$34.592,00",
      price: "R$1.037.760,00",
      link: "/listing/80590"
    },
    {
      monetization: "Amazon FBA",
      niche: "Suplementos",
      id: "#79631",
      profit: "R$9.612,00",
      price: "R$346.036,00",
      link: "/listing/79631"
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Obrigado por se inscrever!');
  };

  return (
    <>
      {/* Home Top Section */}
      <section className="homepage-section">
        <div className="content-container">
          <div className="left-column">
            <h1 className="title">
              Quer investir ou abrir um negócio? Compre um que já esteja online, pronto e faturando!
            </h1>
            <p className="description">
              Junte-se ao principal marketplace para comprar e vender negócios digitais: sites, blogs, aplicativos, serviços de assinatura, lojas Shopify, Amazon, Mercado Livre e muito mais.
            </p>
            <div className="button-group">
              <button className="btn get-started">Comece Gratuitamente</button>
              <button className="btn learn-more">Saiba Mais</button>
            </div>
            <p className="as-seen-on">Como visto em:</p>
            <div className="as-seen-logo">
            <span><img className='icon' src={icon2} alt="Exame" /></span>
            <span><img className='icon' src={icon1} alt="Exame" /></span>
            <span><img className='icon' src={icon6} alt="Exame" /></span>
            <span><img className='icon' src={icon3} alt="Exame" /></span>
              
            </div>
          </div>
          <div className="right-column">
            <img src={macbookImage} alt="Showcase" className="showcase-image" />
          </div>
        </div>
      </section>






    






{/* Latest Listings Section */}
<div className="listings-section">
  <h2>Nossas Últimas Listagens</h2>
  <p>Todas os dias publicamos novos negócios à venda em nosso marketplace.</p>

  {/* New Summary Section */}
  <div className="listings-summary">
    <div className="summary-text">
      <button><strong>8 New Listings Published</strong> <span>154 Listings Total</span></button>
    </div>
    <div className="listings-headers">
      <span>Monetization</span>
      <span>Niche</span>
      <span>Listing</span>
      <span>Monthly Net Profit</span>
      <span>Price</span>
    </div>
  </div>

  {/* Listings Container */}
  <div className="listings-container">
    {listings.map((listing, index) => (
      <div className="listing-row" key={index}>
        <span><h3>{listing.monetization}</h3></span>
        <span className="niche"><span>{listing.niche}</span></span>
        <span><h4>{listing.id}</h4></span>
        <span>{listing.profit}</span>
        <span className="price">{listing.price}</span>
      </div>
    ))}
  </div>

  {/* View All Button */}
  <div className="view-all">
    <a href="/all-listings" className="button">Ver Todas as Listagens</a>
  </div>
</div>





     






      {/* Subscription Section */}
      <div className="subscription-section">
        <h2>Publicamos Novos Negócios Todos os Dias</h2>
        <p>Insira seu e-mail abaixo para ser o primeiro a ser notificado “In the Know”.</p>
        <form className="subscription-form" onSubmit={handleSubscribe}>
          <input 
            type="email" 
            placeholder="Digite seu e-mail" 
            className="subscription-input" 
            required
          />
          <button type="submit" className="subscription-button">Receber Notificações</button>
        </form>
      </div>






      <section class="como-funciona">
  <div class="content-wrapper">
    
    <div class="text-content">
      <h2>Como Funciona</h2>
      <h3>Comprando um Negócio</h3>
      <p>
        Acesse nosso marketplace e descubra negócios online já validados e em operação. 
        Temos opções que vão desde investimentos passivos até negócios mais complexos, 
        atendendo a todos os perfis de investidores.
      </p>
      <p>
        Encontrou um negócio ou site interessante? Desbloqueie a listagem agora com nossa 
        assinatura e tenha acesso a todos os dados essenciais para avaliar sua compra 
        com segurança: URL, Google Analytics, Demonstração de Lucros e Perdas, e muito mais.
      </p>
      <a href="#" class="cta-button">Página de Cadastro</a>
    </div>

   
    <div class="image-content">
      <img src={right} alt="Marketplace" />
    </div>
  </div>
</section>




<section class="como-funciona">
  <div class="content-wrapper">
    
    <div class="image-content">
      <img src={left} alt="Marketplace" />
    </div>

   
    <div class="text-content">
      <h2>Como Funciona</h2>
      <h3>Vendendo Seu Negócio</h3>
      <p>
      Venda seu site ou negócio online de maneira prática e segura. Estamos com você em cada
etapa, assegurando que apenas compradores qualificados participem do processo. Após se
tornar assinante, cuidamos da listagem do seu negócio e até mesmo da transferência para o
novo comprador, para que você não precise se preocupar com burocracia..
      </p>
      <p>
      Vender conosco é mais seguro porque contamos com parceria de grandes bancos
custodiantes, e rentável porque é melhor do que vender por conta própria. Como assinante,
você não precisa investir em softwares caros nem se preocupar com o seu provedor de
hospedagem. Cuidamos de todos os detalhes por você, proporcionando uma experiência
tranquila e lucrativa.
      </p>
      <a href="#" class="cta-button">Página de Cadastro</a>
    </div>
  </div>
</section>








      
      <section className="popular-monetizations">
  <div className="monetizations-header">
    <h2>Monetizações populares</h2>
    <p>
    Explore uma seleção exclusiva de empresas online estabelecidas para venda 
    selecionando uma categoria na qual você está interessado abaixo.
    </p>
  </div>
  <div className="monetizations-grid">
    <div className="monetization-card">
      <img src={amazon} alt="Amazon Associates" />
      <h3>Amazon Associates</h3>
      <p>15 Listados</p>
    </div>
    <div className="monetization-card">
      <img src={amazon} alt="Amazon FBA" />
      <h3>Amazon FBA</h3>
      <p>70 Listados</p>
    </div>
    <div className="monetization-card">
      <img src={amazonfbm} alt="Amazon FBM" />
      <h3>Amazon FBM</h3>
      <p>3 Listados</p>
    </div>
    <div className="monetization-card">
      <img src={amazonkdp} alt="Amazon KDP" />
      <h3>Amazon KDP</h3>
      <p>9 Listados</p>
    </div>
    <div className="monetization-card">
      <img src={amazonmerch} alt="Amazon Merch" />
      <h3>Amazon Merch</h3>
      <p>2 Listados</p>
    </div>
    <div className="monetization-card">
      <img src={displayadvertising} alt="Display Advertising" />
      <h3>Publicidad Display</h3>
      <p>36 Listados</p>
    </div>
    <div className="monetization-card">
      <img src={dropshipping} alt="DropShipping" />
      <h3>DropShipping</h3>
      <p>10 Listados</p>
    </div>
    <div className="monetization-card">
      <img src={ecommerce} alt="eCommerce" />
      <h3>eCommerce</h3>
      <p>28 Listados</p>
    </div>
  </div>
</section>

<section class="why-choose-us">
  <div class="content-container">
    <div class="image-section">
      <img src={why} alt="Por Que Nos Escolher Imagem" />
    </div>
    <div class="text-section">
      <h2>Por Que Nos Escolher?</h2>
      <p class="highlight">Mais de 500 milhões em valuation em negócios online para vender.</p>
      <p class="description">
      A AF Bank é o primeiro mercado automatizado do Brasil para compra e venda de empresas e ativos online
      </p>
    </div>
  </div>
  <div class="features-row">
    <div class="feature">
      <h3>Negócios Legítimos</h3>
      <p>
        Rejeitamos a maioria dos negócios antes de serem publicados, garantindo 
        que você tenha as melhores opções para sua próxima aquisição.
      </p>
    </div>
    <div class="feature">
      <h3>Dados Reais</h3>
      <p>
        Para encontrar um negócio à venda na internet, registre-se para uma conta gratuita 
        e comece seu processo de diligência.
      </p>
    </div>
    <div class="feature">
      <h3>Migrações Feitas para Você</h3>
      <p>
        Nossa equipe ajudará você em cada etapa para transferir o ativo após a venda.
      </p>
    </div>
  </div>
</section>

<section class="business-sell-section">
  <div class="overlay">
    <div class="container">
      <h2>Tem um Negócio Online para Vender?</h2>
      <p>Confira as ferramentas online abaixo para vender ou avaliar seu negócio</p>
      <div class="button-group">
        <button class="btn-primary">Vender Meu Negócio Online</button>
        <button class="btn-secondary">Testar Ferramenta de Avaliação</button>
      </div>
    </div>
  </div>
</section>

<section class="latest-blog-posts">
  <div class="listings-header">
    <h2>Últimas Postagens do Blog</h2>
    <p>Veja o que há de novo no blog</p>
  </div>

  <div class="blog-container">
    <div class="blog-post">
      <div class="blog-image">
        <img src={startup} alt="Postagem do Blog 1" />
      </div>
      <br/>
      <div class="listings-header">
        <h3>Como Otimizar Sua Embalagem para Economizar Dinheiro e Melhorar a Experiência do Cliente</h3>
        <p>
          A embalagem é um componente essencial de qualquer negócio de e-commerce. 
          Quando alguém pede seu produto online, é a embalagem que garante a entrega 
          segura do armazém até o cliente. Essa embalagem externa também oferece […]
        </p>
        <br/>
        <div class="blog-meta">
          <span class="author">Tony Feitosa</span>
          <span class="category">Amazon FBA, Ecommerce</span>
        </div>
      </div>
    </div>

    <div class="blog-post">
      <div class="blog-image">
        <img src={future} alt="Postagem do Blog 2" />
      </div>
      <br/>
      <div class="listings-header">
        <h3>Técnicas para Aumentar as Taxas de Conversão no Shopify</h3>
        <p>
          A média de taxa de conversão para sites de e-commerce é de 1% a 4%. 
          Isso significa que, a cada 100 visitantes, geralmente 1 a 4 pessoas fazem uma compra. 
          Sua taxa de conversão no Shopify está dentro […].
        </p>
        <br/>
        <div class="blog-meta">
          <span class="author">Tony Feitosa</span>
          <span class="category">Ecommerce</span>
        </div>
      </div>
    </div>
  </div>

  <div class="view-all">
    <a href="#" class="view-all-link">Ver Todas as Postagens do Blog</a>
  </div>
</section>

<section class="business-consultation-section">
  <div class="container">
    <div class="left-div">
      <p class="phone-number">+1-888 658 8388</p>
      <p class="description">Simplificamos o processo para você. Clique no botão abaixo.</p>
      <button class="btn-primary">Agendar uma Chamada Gratuita</button>
    </div>
    <div class="right-div">
      <p class="heading">Nossos consultores de M&A estão prontos para ajudá-lo a dar o próximo grande passo.</p>
      <p class="subtext">Consulte nossos analistas líderes do setor hoje mesmo.</p>
    </div>
  </div>
</section>







    </>
  );
};

export default HomePage;
