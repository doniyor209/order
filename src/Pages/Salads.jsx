import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Salads.css';
import { q, w, ePng } from '../assets';


function Salads() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const salads = [
    {
      title: t('salads.achchiq_chuchuk'),
      description: t('salads.achchiq_chuchuk_desc'),
      price: '15 SAR',
      img: w,
    },
    {
      title: t('salads.greek'),
      description: t('salads.greek_desc'),
      price: '22 SAR',
      img: q,
    },
    {
      title: t('salads.suzma'),
      description: t('salads.suzma_desc'),
      price: '18 SAR',
      img: ePng,
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

        {/* Заголовок страницы */}
        <h1 className="dish-title">{t('salads.title')}</h1>
        <p className="dish-subtitle">{t('salads.subtitle')}</p>

        {/* Сетка салатов */}
        <div className="salads-grid">
          {salads.map((item, index) => (
            <div key={index} className="salad-item">
              <img
                src={item.img}
                alt={item.title}
                className="salad-img"
                loading="lazy"
              />
              <div className="salad-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="extra-info">
          <p>{t('salads.serving')}</p>
          <p>{t('salads.fresh')}</p>
        </div>


      </div>
    </div>
  );
}

export default Salads;