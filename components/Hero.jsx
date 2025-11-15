import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Креативный <span className="highlight">дизайнер</span>
          </h1>
          <p className="hero-description">
            Я помогаю компаниям и частным лицам воплощать их идеи в жизнь с помощью продуманного дизайна, инновационных решений и исключительного внимания к деталям.
          </p>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn btn-primary">
              Посмотреть мои работы
            </a>
            <a href="#contacts" className="btn btn-secondary">
              Связаться
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-circle">
            <div className="profile-placeholder">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="50" r="25" fill="#cbd5e0" />
                <path d="M30 95 C30 80, 45 70, 60 70 C75 70, 90 80, 90 95" fill="#cbd5e0" />
              </svg>
            </div>
            <div className="icon-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#3182ce" />
                <path d="M2 17L12 22L22 17" stroke="#3182ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="#3182ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;


