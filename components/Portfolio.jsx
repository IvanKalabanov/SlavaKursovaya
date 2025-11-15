import './Portfolio.css';

function Portfolio() {
  const projects = [
    {
      title: 'Платформа электронной коммерции',
      description: 'Современный интернет-магазин с удобным интерфейсом для пользователей и оптимизацией для мобильных устройств.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
    {
      title: 'Разработка фирменного стиля бренда',
      description: 'Полный фирменный пакет, включающий логотип, цветовую палитру и маркетинговые материалы.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop'
    },
    {
      title: 'Дизайн мобильного приложения',
      description: 'Интуитивно понятное приложение для отслеживания физической формы с понятным интерфейсом и плавной анимацией.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop'
    },
    {
      title: 'Аналитическая панель мониторинга',
      description: 'Панель мониторинга визуализации данных для бизнес-аналитики и составления отчетов.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      title: 'Веб-сайт ресторана',
      description: 'Веб-сайт ресторана с онлайн-бронированием и демонстрацией меню.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop'
    },
    {
      title: 'Творческое портфолио',
      description: 'Сайт для персонального портфолио фотографа с галереей и системой бронирования.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Портфолио</h2>
          <p className="section-subtitle">
            Подборка проектов, демонстрирующих мои навыки и креативность
          </p>
        </div>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <button className="portfolio-btn">Подробнее</button>
                </div>
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;


