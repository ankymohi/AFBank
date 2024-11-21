import React, { useState } from 'react';
import './SellersListing.css';
import SellerProfile from './SellerProfile'; // Importar o componente de perfil
import image1 from '../assets/rsz_depositphotos_144013763_xl-2015_optimized.jpg';

const SellersListing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeller, setSelectedSeller] = useState(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleViewProfile = (seller) => {
    setSelectedSeller(seller); // Define o vendedor a ser exibido na visualização de perfil
  };

  const handleCloseProfile = () => {
    setSelectedSeller(null); // Fecha a visualização do perfil ao redefinir o estado
  };

  const sellers = [
    {
      id: 1,
      name: 'Vendedor 1',
      image: image1,
      revenue: '$500K',
      growthRate: '20%',
      profitMargins: '30%',
      type: 'SaaS',
      description: 'Vendedor 1 é uma empresa SaaS com crescimento consistente.',
    },
    {
      id: 2,
      name: 'Vendedor 2',
      image: 'image1',
      revenue: '$800K',
      growthRate: '25%',
      profitMargins: '40%',
      type: 'Marketplace',
      description: 'Vendedor 2 é um marketplace em rápido crescimento com alto engajamento.',
    },
    {
      id: 3,
      name: 'Vendedor 3',
      image: 'image1',
      revenue: '$1M',
      growthRate: '30%',
      profitMargins: '35%',
      type: 'Aplicativo Móvel',
      description: 'Vendedor 3 é especializado no desenvolvimento de aplicativos móveis.',
    },
    {
      id: 4,
      name: 'Vendedor 4',
      image: 'image1',
      revenue: '$700K',
      growthRate: '15%',
      profitMargins: '25%',
      type: 'Ecommerce',
      description: 'Vendedor 4 administra um ecommerce com receita constante.',
    },
  ];

  return (
    <>
      {/* Seção de Fundo */}
      <div className="background-section">
        <div className="background-content">
          <h1>Negócios Online à Venda</h1>
          <p>Negócios online lucrativos de vendedores confiáveis</p>
          <button className="cta-button">Cadastre-se para Acesso Completo</button>
        </div>
      </div>

      {/* Seção Principal */}
      <div className="sellers-listing-fullpage">
        <h2 className='listings-header'>Explore os Vendedores</h2>

        {/* Barra de Pesquisa */}
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Pesquisar Vendedores..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        <div className="content-container">
          {/* Seção de Filtros */}
          <div className="filters-section">
            <div className="filter-group">
              <h4>Tipo</h4>
              <select>
                <option value="all">Todos</option>
                <option value="saas">SaaS</option>
                <option value="marketplace">Marketplace</option>
                <option value="mobile-app">Aplicativo Móvel</option>
                <option value="shopify-app">Aplicativo Shopify</option>
                <option value="ecommerce">Ecommerce</option>
                <option value="agency">Agência</option>
                <option value="other">Outro</option>
              </select>
            </div>

            <div className="filter-group">
              <h4>Preço</h4>
              <input type="number" placeholder="Mínimo" />
              <input type="number" placeholder="Máximo" />
            </div>

            <div className="filter-group">
              <h4>Destaques</h4>
              <label>
                <input type="checkbox" /> Métricas Conectadas
              </label>
              <label>
                <input type="checkbox" /> Sob Consultoria M&A
              </label>
              <label>
                <input type="checkbox" /> Negócio Verificado
              </label>
            </div>
          </div>

          {/* Seção de Grade de Vendedores */}
          <div className="sellers-grid-section">
            <div className="sellers-grid">
              {sellers.map((seller) => (
                <div key={seller.id} className="seller-card">
                  <img src={image1} alt={seller.name} className="seller-image" />
                  <h3>{seller.name}</h3>
                  <div className="seller-stats">
                    <p>Receita Anual: {seller.revenue}</p>
                    <p>Taxa de Crescimento: {seller.growthRate}</p>
                    <p>Margem de Lucro: {seller.profitMargins}</p>
                  </div>
                  <button
                    className="view-profile-button"
                    onClick={() => handleViewProfile(seller)}
                  >
                    Ver Perfil
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visualização de Perfil */}
        {selectedSeller && (
          <SellerProfile seller={selectedSeller} onClose={handleCloseProfile} />
        )}
      </div>
    </>
  );
};

export default SellersListing;
