import React from 'react';
import './Footer.css';
import logoImage from '../assets/logo1.png'; // Adjust path as needed

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logoImage} alt="Logo" />
          <p>O #1 Mercado Online Curado de Negócios</p>
        </div>
        <div className="footer-about">
          <p>A AF Bank ajuda milhares de pessoas a comprar e vender empresas no mercado digital.</p>
          <div className="footer-badges">
            <span>Inc-500</span>
            <span>IBBA</span>
            <span>Bitcoin</span>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h3>Links do Site</h3>
          <br></br>
          <ul>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Podcasts</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Recursos</h3>
          <br></br>
          <ul>
            <li><a href="#">Venda Seu Site</a></li>
            <li><a href="#">Ferramenta de Avaliação</a></li>
            <li><a href="#">FAQ para Compradores</a></li>
            <li><a href="#">FAQ para Vendedores</a></li>
            <li><a href="#">Changelog</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Newsletter</h3>
          <br></br>
          <p>Quer receber as últimas notícias e dicas do setor?</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Digite seu e-mail" />
            <button type="submit">Inscrever-se</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-social">
          <h3>Redes Sociais</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>Copyright © AF Bank, LLC 2024</p>
          <ul>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">Política de Copyright</a></li>
            <li><a href="#">Política de Privacidade</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
