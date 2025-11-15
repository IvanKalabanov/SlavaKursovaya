import { useState } from 'react';
import './Feedback.css';

function Feedback() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: '',
    rating: '',
    feedback: '',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь можно добавить логику отправки формы
    alert('Спасибо за ваш отзыв!');
    setFormData({
      fullName: '',
      email: '',
      projectType: '',
      rating: '',
      feedback: '',
      consent: false
    });
  };

  return (
    <section className="feedback" id="feedback">
      <div className="container">
        <div className="feedback-card">
          <div className="feedback-header">
            <h2 className="feedback-title">Поделитесь своими впечатлениями</h2>
            <p className="feedback-subtitle">
              Ваши мысли и отзывы помогают мне совершенствоваться и расти. Я хотел бы услышать о вашем опыте работы со мной.
            </p>
          </div>
          <form className="feedback-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Полное имя</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Ваше полное имя"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Адрес электронной почты</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="projectType">Тип проекта</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Выберите тип проекта</option>
                  <option value="graphic-design">Графический дизайн</option>
                  <option value="ui-ux">UI/UX Дизайн</option>
                  <option value="branding">Брендинг</option>
                  <option value="web-design">Веб-дизайн</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="rating">Общая оценка</label>
                <select
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  required
                >
                  <option value="">Оцените свой опыт</option>
                  <option value="5">Отлично (5)</option>
                  <option value="4">Хорошо (4)</option>
                  <option value="3">Удовлетворительно (3)</option>
                  <option value="2">Плохо (2)</option>
                  <option value="1">Очень плохо (1)</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="feedback">Ваши отзывы</label>
              <textarea
                id="feedback"
                name="feedback"
                rows="6"
                placeholder="Пожалуйста, поделитесь своими мыслями о проекте, общении, качестве работы и общем впечатлении..."
                value={formData.feedback}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-checkbox">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
              />
              <label htmlFor="consent">
                Я даю разрешение на использование этого отзыва в маркетинговых материалах.
              </label>
            </div>
            <button type="submit" className="submit-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Отправить отзыв
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Feedback;


