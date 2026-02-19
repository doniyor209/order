import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Kaboblar.css';
// import { Nomi } from '../assets';

function Kaboblar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const kaboblar = [
    {
      title: t('kaboblar.qiyma'),
      description: t('kaboblar.qiyma_desc'),
      price: '10 SAR',
      img: 'https://tarnov.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F88a80d9c-41a9-4b90-8913-aa7ae9478677&w=640&q=75',
    },
    {
      title: t('kaboblar.tovuq'),
      description: t('kaboblar.tovuq_desc'),
      price: '10 SAR',
      img: 'https://tarnov.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F4b060e83-a3fc-43f1-9cbe-1aad97752dd0&w=640&q=75',
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
        <h1 className="dish-title">{t('section.kaboblar')}</h1>
        <p className="dish-subtitle">{t('kaboblar.subtitle')}</p>

        {/* Сетка шашлыков */}
        <div className="kaboblar-grid">
          {kaboblar.map((item, index) => (
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
          <p>{t('kaboblar.serving')}</p>
          <p>{t('kaboblar.cooked_on_coals')}</p>
        </div>

      </div>
    </div>
  );
}

export default Kaboblar;