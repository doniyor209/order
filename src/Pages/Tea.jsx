import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Tea.css';

function Tea() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const teas = [
    {
      title: t('tea.green'),
      description: t('tea.green_desc'),
      price: '2 SAR',
      img: '../../green.png',
    },
    {
      title: t('tea.black'),
      description: t('tea.black_desc'),
      price: ' 2 SAR',
      img: '../../black.png',
    },
    {
      title: t('tea.lemon'),
      description: t('tea.lemon_desc'),
      price: '5 SAR',
      img: '../../limon.png',
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
        <h1 className="dish-title">{t('tea.title')}</h1>
        <p className="dish-subtitle">{t('tea.subtitle')}</p>

        {/* Сетка чаёв */}
        <div className="tea-grid">
          {teas.map((item, index) => (
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
          <p>{t('tea.serving')}</p>
          <p>{t('tea.traditional')}</p>
        </div>

      </div>
    </div>
  );
}

export default Tea;