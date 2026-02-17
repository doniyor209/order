import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Menu.css';
import { back, drinks, Lagman, salads, teas, uzb } from '../assets';



function Menu() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const menuItems = [
    {
      name: t('menuItems.kaboblar'),
      description: t('menuItems.kaboblar_desc'),
      price: '10-12 SAR',
      img: 'https://petersfoodadventures.com/wp-content/uploads/2017/02/russian-shashlik.jpg',
      path: '/menu/kaboblar'
    },
    {
      name: t('menuItems.lagmon'),
      description: t('menuItems.lagmon_desc'),
      price: '20 SAR',
      img: Lagman,
      path: ''
    },
    {
      name: t('menuItems.osh'),
      description: t('menuItems.osh_desc'),
      price: '25 SAR',
      img: uzb,
      path: '/menu/osh'
    },
    {
      name: t('menuItems.chuchvara'),
      description: t('menuItems.chuchvara_desc'),
      price: '20 SAR',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcwcPuousHK-BiQTrAqiuFO2ssqwJhQA55mJ_1LbvytWjTCYxe04_nZ-c7&s=10',
      path: ''
    },
    {
      name: t('menuItems.mastava'),
      description: t('menuItems.mastava_desc'),
      price: '15 SAR',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrY0cJcdf7i0-e1VznZkg0RMbuwti5e0yQMbNa7NGi-NbiVVHYrCQ1wg&s=10',
      path: ''
    },
    {
      name: t('menuItems.qarsillama_somsa'),
      description: t('menuItems.qarsillama_somsa_desc'),
      price: '3-4 SAR',
      img: back,
      path: '/menu/Somsa'
    },

    // Только один салат
    {
      name: t('menuItems.salads') || 'Ачичук',
      description: t('menuItems.salads_desc') || 'Помидоры, огурцы, лук, зелень, перец',
      price: '15 SAR',
      img: salads,
      path: '/menu/Salads'   // ← сюда сам поставишь, если нужно
    },

    // Только один чай
    {
      name: t('menuItems.kok_choy') || 'Кўк чой',
      description: t('menuItems.kok_choy_desc') || 'Зелёный чай',
      price: '8 SAR',
      img: teas,
      path: '/menu/Tea'   // ← сюда сам поставишь, если нужно
    },

    // Только один напиток
    {
      name: t('menuItems.ayron') || 'Айрон',
      description: t('menuItems.ayron_desc') || 'Прохладный айран',
      price: '2-5 SAR',
      img: drinks,
      path: '/menu/drinks'   // ← сюда сам поставишь, если нужно
    }
  ];

  return (
    <div className="menu-page">
      <div className="menu-container">

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

        <header className="menu-header">
          <h1>{t('menu') || 'Меню'}</h1>
          <p className="menu-subtitle">
            {t('menu_subtitle') || 'Настоящий вкус Узбекистана в Мекке • Uzbek House & Qarsillama Somsa'}
          </p>

          <Link to="/" className="back-button">
            ← {t('back_home') || 'На главную'}
          </Link>
        </header>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              {item.path ? (
                <Link to={item.path} className="menu-item-image-link">
                  <div className="menu-item-image-wrapper">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="menu-item-image"
                      loading="lazy"
                    />
                    <div className="image-gradient" />
                  </div>
                </Link>
              ) : (
                <div className="menu-item-image-wrapper">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="menu-item-image"
                    loading="lazy"
                  />
                  <div className="image-gradient" />
                </div>
              )}

              <div className="menu-item-content">
                <h3 className="dish-name">{item.name}</h3>
                <p className="dish-description">{item.description}</p>
                <div className="dish-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        <footer className="menu-footer">
          <div className="footer-logo">
            <span>Uzbek House</span>
            <span className="footer-and"> & </span>
            <span>Qarsillama Somsa</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Menu;