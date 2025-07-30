import { motion } from 'framer-motion';
import { recruitData } from '../data/content';

const Hero = ({ eyecatchImage }) => {
  return (
    <section className="hero">
      <div className="hero-layout">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {recruitData.hero.title}
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {recruitData.hero.subtitle}
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              className="hero-cta primary"
              onClick={() => document.getElementById('application').scrollIntoView({ behavior: 'smooth' })}
            >
              エントリーはこちら
            </button>
            <button 
              className="hero-cta secondary"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              会社を知る
            </button>
          </motion.div>
        </div>
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img src={eyecatchImage} alt="株式会社Surpriseチーム" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;