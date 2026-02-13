import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Osh.css'; // создай или используй Kaboblar.css

function Osh() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    const oshItems = [
        {
            title: t('osh.lazir'),
            description: t('osh.lazir_desc'),
            price: '25 SAR',
            img: 'https://arbuz.com/wp-content/uploads/2009/12/Uzbek-Palov.jpg',
        },
        {
            title: t('osh.devzira'),
            description: t('osh.devzira_desc'),
            price: '30 SAR',
            img: 'https://arbuz.com/wp-content/uploads/2009/07/Uzbek-Plov.jpg',
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
                <h1 className="dish-title">{t('osh.title')}</h1>
                <p className="dish-subtitle">{t('osh.subtitle')}</p>

                {/* Сетка */}
                <div className="kaboblar-grid">
                    {oshItems.map((item, index) => (
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

                {/* Доп. информация */}
                <div className="extra-info">
                    <p>{t('osh.serving')}</p>
                    <p>{t('osh.cooked_in_kazan')}</p>
                </div>

                {/* Заказ */}
              
            </div>
        </div>
    );
}

export default Osh;