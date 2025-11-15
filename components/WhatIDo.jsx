import './WhatIDo.css';

function WhatIDo() {
  const services = [
    {
      title: 'Графический дизайнер',
      description: 'Фирменный стиль, логотипы, маркетинговые материалы и визуальные коммуникации, которые отражают вашу сущность.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#3182ce" />
          <path d="M2 17L12 22L22 17" stroke="#3182ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12L12 17L22 12" stroke="#3182ce" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      bgColor: '#e6f3ff'
    },
    {
      title: 'UI/UX Дизайн',
      description: 'Дизайнерские решения, ориентированные на пользователя, которые оставляют прекрасные впечатления.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="2" width="14" height="20" rx="2" stroke="#805ad5" strokeWidth="2" />
          <path d="M12 18H12.01" stroke="#805ad5" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      bgColor: '#f3e8ff'
    }
  ];

  return (
    <section className="what-i-do" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Что я делаю</h2>
          <p className="section-subtitle">
            Специализируюсь на создании цифровых работ, которые меняют мир к лучшему
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ backgroundColor: service.bgColor }}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;


