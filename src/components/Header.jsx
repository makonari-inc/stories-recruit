import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="株式会社Surprise" />
        </div>
        <nav className="nav">
          <button onClick={() => scrollToSection('about')}>会社について</button>
          <button onClick={() => scrollToSection('positions')}>募集ポジション</button>
          <button onClick={() => scrollToSection('application')}>応募方法</button>
          <button className="cta-button" onClick={() => scrollToSection('application')}>
            応募する
          </button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;