import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { recruitData } from '../data/content';
import PositionCard from './PositionCard';
import { FaBriefcase, FaYenSign, FaMapMarkerAlt } from 'react-icons/fa';

const Content = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="content">
      {/* Introduction */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInVariant}
      >
        <div className="container">
          <h2>{recruitData.introduction.title}</h2>
          <ReactMarkdown>{recruitData.introduction.content}</ReactMarkdown>
        </div>
      </motion.section>

      {/* About */}
      <motion.section
        id="about"
        className="section section-about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInVariant}
      >
        <div className="container">
          <h2>{recruitData.about.title}</h2>
          {recruitData.about.content.map((item, index) => (
            <ReactMarkdown key={index}>{item.paragraph}</ReactMarkdown>
          ))}
        </div>
      </motion.section>

      {/* Wanted */}
      <motion.section
        className="section section-wanted"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInVariant}
      >
        <div className="container">
          <h2>{recruitData.wanted.title}</h2>
          <ul className="wanted-list">
            {recruitData.wanted.items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section
        className="section section-benefits"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInVariant}
      >
        <div className="container">
          <h2>{recruitData.benefits.title}</h2>
          <div className="benefits-grid">
            {recruitData.benefits.items.map((item, index) => (
              <motion.div
                key={index}
                className="benefit-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="benefit-number">{index + 1}</span>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Positions */}
      <motion.section
        id="positions"
        className="section section-positions"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInVariant}
      >
        <div className="container">
          <h2>{recruitData.positions.title}</h2>
          <ReactMarkdown>{recruitData.positions.description}</ReactMarkdown>
          <div className="positions-grid">
            {recruitData.positions.items.map((position, index) => (
              <PositionCard key={index} position={position} index={index} />
            ))}
          </div>
          <div className="positions-note">
            <p>{recruitData.positions.note}</p>
            <a href={recruitData.positions.allPositionsLink} target="_blank" rel="noopener noreferrer">
              募集職種一覧はこちらからご覧ください
            </a>
          </div>
        </div>
      </motion.section>

      {/* Requirements */}
      <motion.section
        className="section section-requirements"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInVariant}
      >
        <div className="container">
          <h2>{recruitData.requirements.title}</h2>
          <dl className="requirements-list">
            {recruitData.requirements.items.map((item, index) => {
              const getIcon = () => {
                if (item.label === '雇用形態') return <FaBriefcase className="requirement-icon" />;
                if (item.label === '給与') return <FaYenSign className="requirement-icon" />;
                if (item.label === '勤務地') return <FaMapMarkerAlt className="requirement-icon" />;
                return null;
              };
              
              return (
                <div key={index} className="requirement-item">
                  <dt>
                    {getIcon()}
                    <span>{item.label}</span>
                  </dt>
                  <dd>{item.value}</dd>
                </div>
              );
            })}
          </dl>
        </div>
      </motion.section>

      {/* Application */}
      <motion.section
        id="application"
        className="section section-application"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInVariant}
      >
        <div className="container">
          <h2>{recruitData.application.title}</h2>
          <p>{recruitData.application.description}</p>
          <p className="application-note">{recruitData.application.note}</p>
          <div className="application-form-link">
            <p>▼応募フォームはこちら</p>
            <a href={recruitData.application.formLink} target="_blank" rel="noopener noreferrer" className="form-button">
              {recruitData.application.formText}
            </a>
          </div>
          <div className="selection-process">
            <h3>■{recruitData.application.process.title}</h3>
            <ol>
              {recruitData.application.process.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <ul className="process-notes">
              {recruitData.application.process.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Closing */}
      <motion.section
        className="section section-closing"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInVariant}
      >
        <div className="container">
          <h2>{recruitData.closing.title}</h2>
          {recruitData.closing.content.map((paragraph, index) => (
            <ReactMarkdown key={index}>{paragraph}</ReactMarkdown>
          ))}
          <p className="signature">{recruitData.closing.signature}</p>
        </div>
      </motion.section>
    </main>
  );
};

export default Content;