import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="footer-content">
          <h3>Давайте работать вместе</h3>
          <p>Готовы воплотить свои идеи в жизнь? Свяжитесь с нами, и мы обсудим ваш следующий проект.</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <strong>Почта</strong>
              <span>Ekanvele@gmail.com</span>
            </div>
            <div className="contact-item">
              <strong>Телефон</strong>
              <span>+7 (643) 742 75 44</span>
            </div>
            <div className="contact-item">
              <strong>Местоположение</strong>
              <span>Россия, Москва</span>
            </div>
          </div>
          
          <div className="copyright">
            © 2025 Арафьев Вячеслав. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;