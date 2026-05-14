import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Drinks.css'; // Можно переименовать в Drinks.css, но если стили общие, оставь так
import { kinzaDrink, suv , kompott, small, big } from '../assets';

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
      price: '1 SAR',
      img: suv,
    },
    {
      title: t('drinks.kompot'), // Компот
      description: t('drinks.kompot_desc'),
      price: '0.4 L - 5 SAR | 1 L - 10 SAR',
      img: kompott, // Основное фото (можно добавить позже)
      kompotImages: {
        small: small, // Сюда добавь фото для 0.4L (путь к изображению)
        large: big, // Сюда добавь фото для 1L (путь к изображению)
      },
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

        {/* Сетка напитков */}
        <div className="tea-grid">
          {drinks.map((item, index) => (
            <div key={index} className="tea-item">
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.title}
                  className="tea-img"
                  loading="lazy"
                />
              ) : (
                <div className="tea-img-placeholder">🍹</div>
              )}
              <div className="tea-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="price">{item.price}</div>
                
                {/* Дополнительные фото для компота (два размера) */}
                {item.kompotImages && (
                  <div className="kompot-sizes">
                    <div className="kompot-size-item">
                      {item.kompotImages.small ? (
                        <img
                          src={item.kompotImages.small}
                          alt="Kompot 0.4L"
                          className="kompot-size-img"
                          loading="lazy"
                        />
                      ) : (
                        <div className="kompot-size-placeholder">🍹 0.4L</div>
                      )}
                      <span className="kompot-size-label">0.4 L - 5 SAR</span>
                    </div>
                    <div className="kompot-size-item">
                      {item.kompotImages.large ? (
                        <img
                          src={item.kompotImages.large}
                          alt="Kompot 1L"
                          className="kompot-size-img"
                          loading="lazy"
                        />
                      ) : (
                        <div className="kompot-size-placeholder">🍹 1L</div>
                      )}
                      <span className="kompot-size-label">1 L - 10 SAR</span>
                    </div>
                  </div>
                )}
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