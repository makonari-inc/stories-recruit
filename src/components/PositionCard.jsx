import { motion } from 'framer-motion';

const PositionCard = ({ position, index }) => {
  return (
    <motion.div
      className="position-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <h3>{position.title}</h3>
      <p>{position.description}</p>
      <a href={position.link} target="_blank" rel="noopener noreferrer" className="position-link">
        詳細を見る →
      </a>
    </motion.div>
  );
};

export default PositionCard;