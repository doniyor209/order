import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Menu.css';
import { back, drinks, Kaboblar,Lagman, salads, teas, osh } from '../assets';



function Menu() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const menuItems = [
    {
      name: t('menuItems.kaboblar'),
      description: t('menuItems.kaboblar_desc'),
      price: '10 SAR',
      img: Kaboblar,
      path: '/menu/kaboblar'
    },
    {
      name: t('menuItems.lagmon'),
      description: t('menuItems.lagmon_desc'),
      price: '25 SAR',
      img: Lagman,
      path: ''
    },
    {
      name: t('menuItems.osh'),
      description: t('menuItems.osh_desc'),
      price: '30 - 35 SAR',
      img: osh,
      path: '/menu/osh'
    },
    {
      name: t('menuItems.chuchvara'),
      description: t('menuItems.chuchvara_desc'),
      price: '20 SAR',
      img: 'https://t3.ftcdn.net/jpg/02/32/38/54/360_F_232385404_fq5uOgpY5wwDNANIS4DYicAM736DJnCp.jpg',
      path: ''
    },
    {
      name: t('menuItems.mastava'),
      description: t('menuItems.mastava_desc'),
      price: '20 SAR',
      img: 'https://png.klev.club/uploads/posts/2024-05/png-klev-club-u8jd-p-mastava-png-26.png',
      path: ''
    },
    {
      name: t('menuItems.qarsillama_somsa'),
      description: t('menuItems.qarsillama_somsa_desc'),
      price: '5 SAR',
      img: back,
      path: '/menu/Somsa'
    },

    // Только один салат
    {
      name: t('menuItems.salads') || 'Ачичук',
      description: t('menuItems.salads_desc') || 'Помидоры, огурцы, лук, зелень, перец',
      price: '5-10 SAR',
      img: salads,
      path: '/menu/Salads'   // ← сюда сам поставишь, если нужно
    },

    // Только один чай
    {
      name: t('menuItems.kok_choy') || 'Кўк чой',
      description: t('menuItems.kok_choy_desc') || 'Зелёный чай',
      price: '3-5 SAR',
      img: teas,
      path: '/menu/Tea'   // ← сюда сам поставишь, если нужно
    },

    // Только один напиток
    {
      name: t('menuItems.ayron') || 'Айрон',
      description: t('menuItems.ayron_desc') || 'Прохладный айран',
      price: '1-5 SAR',
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