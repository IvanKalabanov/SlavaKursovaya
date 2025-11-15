import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Арефьев Вячеслав</div>
        <nav className="nav">
          <a href="#about" className="nav-link">Обо мне</a>
          <a href="#portfolio" className="nav-link">Портфолио</a>
          <a href="#feedback" className="nav-link">Обратная связь</a>
          <a href="#contacts" className="nav-link">Контакты</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;


