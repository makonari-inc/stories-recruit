import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-company">
            <img src={logo} alt="株式会社Surprise" className="footer-logo" />
            <p>「人生にサプライズを」</p>
          </div>
          <div className="footer-links">
            <a href="https://surpriselife.co" target="_blank" rel="noopener noreferrer">
              コーポレートサイト
            </a>
            <a href="https://surpriselife.co/philosophy" target="_blank" rel="noopener noreferrer">
              PHILOSOPHY
            </a>
            <a href="https://surpriselife.co/recruit" target="_blank" rel="noopener noreferrer">
              採用情報
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2024 Surprise Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;