import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Somsa.css';
import { d, e, f } from '../assets';
// import { e, f, d } from './assets'; // Импортируем изображения

function Somsa() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const somsaItems = [
    {
      title: t('somsa.gosht'),
      description: t('somsa.gosht_desc'),
      price: '3 SAR',
      img: e, // мясная
    },
    {
      title: t('somsa.qovoq'),
      description: t('somsa.qovoq_desc'),
      price: '2 SAR',
      img: f, // тыквенная
    },
    {
      title: t('somsa.tovuq'),
      description: t('somsa.tovuq_desc'),
      price: '3 SAR',
      img: d, // куриная
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
        <h1 className="dish-title">{t('somsa.title')}</h1>
        <p className="dish-subtitle">{t('somsa.subtitle')}</p>

        {/* Сетка самсы */}
        <div className="kaboblar-grid">
          {somsaItems.map((item, index) => (
            <div key={index} className="kabob-item">
              <img
                src={item.img}
                alt={item.title}
                className="kabob-img"
                loading="lazy"
              />
              <div className="kabob-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="extra-info">
          <p>{t('somsa.serving')}</p>
          <p>{t('somsa.crispy')}</p>
        </div>

      </div>
    </div>
  );
}

export default Somsa;