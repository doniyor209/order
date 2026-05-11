import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./App.css";
import "./i18n";

import Menu from "./Pages/Menu";
import Kaboblar from "./Pages/Kaboblar";
import Osh from "./Pages/Osh";
import Somsa from "./Pages/Somsa";
import Salads from "./Pages/Salads";
import Tea from "./Pages/Tea";
import Drinks from "./Pages/Drinks";


function Home() {
  const { t, i18n } = useTranslation();

  const openLocation = () => {
    window.open(
      "https://maps.google.com/maps?q=21.372038,39.835457&ll=21.372038,39.835457&z=16",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openMenuPDF = () => {
    window.open(
      "../../../src/Menu PDF.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="app-container">
      <div className="card">
        <div className="lang-container">
          <select
            value={i18n.language}
            onChange={changeLanguage}
            className="lang-select"
          >
            <option value="ru">Русский</option>
            <option value="uz">O'zbek</option>
            <option value="en">English</option>
          </select>
        </div>

        <h1>UzbekHouse & QarsillamaSomsa</h1>
        <p className="subtitle">{t("subtitle")}</p>

        <div className="links">
          {/* ВНЕШНИЕ ССЫЛКИ → <a> */}
          <a
            href="https://www.instagram.com/uzbekhouse.ksa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn instagram"
          >
            <img src="/a.JPG" alt="Instagram" width="32" />
            {t("instagram_uzbekhouse")}
          </a>

          <a
            href="https://www.instagram.com/qarsillamasomsa.ksa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn instagram"
          >
            <img
              src="https://avatars.mds.yandex.net/get-altay/14165812/2a000001928bb613d236257e9651d8d56e86/L_height"
              alt="Instagram"
              width="32"
            />
            {t("instagram_qarsillama")}
          </a>

          <a
            href="https://t.me/Qarsillamasomsa_uz/269"
            target="_blank"
            rel="noopener noreferrer"
            className="btn telegram"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
              alt="Telegram"
              width="32"
            />
            {t("telegram")}
          </a>

          <button onClick={openLocation} className="btn location">
            📍 {t("location")}
          </button>

          {/* КНОПКА ДЛЯ ОТКРЫТИЯ PDF МЕНЮ */}
          <button onClick={openMenuPDF} className="btn pdf">
            📄 {t("menu_pdf") || "PDF Menu"}
          </button>

          {/* ВНУТРЕННИЙ РОУТ → Link */}
          <Link to="/menu" className="btn menu">
            {t("Menu")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <div className="card">
        <h1>404</h1>
        <p>{t("not_found")}</p>
        <Link to="/" className="btn">
          {t("back_home")}
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/kaboblar" element={<Kaboblar />} />
        <Route path="/menu/osh" element={<Osh />} />
        <Route path="/menu/somsa" element={<Somsa />} />
        <Route path="/menu/salads" element={<Salads />} />
        <Route path="/menu/tea" element={<Tea />} />
        {/* Добавленный роут для напитков */}
        <Route path="/menu/drinks" element={<Drinks />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;