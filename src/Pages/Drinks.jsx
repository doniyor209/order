import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Tea.css'; // Можно переименовать в Drinks.css, но если стили общие, оставь так
import {  kinzaDrink,  suv } from '../assets';



function Drinks() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  // Массив с данными для напитков
  const drinks = [
    {
      title: t('drinks.kinza'), // Напиток Кинза
      description: t('drinks.kinza_desc'),
      price: '3 SAR',
      img: kinzaDrink,
    },
    {
      title: t('drinks.water'), // Вода
      description: t('drinks.water_desc'),
      price: '2 SAR',
      img: suv,
    },
  ];

  return (
    <div className="dish-detail-page">
      <div className="dish-container">

        {/* Переключатель языка */}
        <div className="lang-container">
          <select
            value={i18n.language || 'ru'}
            onChange={changeLanguage}
            className="lang-select"
          >
            <option value="ru">Русский (RU)</option>
            <option value="uz">O'zbek (UZ)</option>
            <option value="en">English (EN)</option>
          </select>
        </div>

        {/* Кнопка назад */}
        <Link to="/menu" className="back-btn">
          ← {t('back_to_menu')}
        </Link>

        {/* Заголовок */}
        <h1 className="dish-title">{t('drinks.title')}</h1>
        <p className="dish-subtitle">{t('drinks.subtitle')}</p>

        {/* Сетка напитков (используем tea-grid, т.к. CSS класс общий) */}
        <div className="tea-grid">
          {drinks.map((item, index) => (
            <div key={index} className="tea-item">
              <img
                src={item.img}
                alt={item.title}
                className="tea-img"
                loading="lazy"
              />
              <div className="tea-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="extra-info">
          <p>{t('drinks.serving')}</p>
          <p>{t('drinks.additional')}</p>
        </div>

      </div>
    </div>
  );
}

export default Drinks;