import { Link } from "react-router-dom";
import markerIcon from "../../assets/icons/map-marker.svg";
import ruIcon from "../../assets/icons/ru.svg";
import arrowIcon from "../../assets/icons/angle-down.svg";
import logoIcon from "../../assets/icons/logo.svg";
import appIcon from "../../assets/icons/apps.svg";
import style from "./header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__top}>
        <div className={style.header__direction}>
          <img src={markerIcon} alt="marker icon" width={16} height={16} />
          <button className={style["header__direction-btn"]}>Ташкент</button>
          <img src={arrowIcon} alt="arrow icon" width={16} height={16} />
        </div>
        <div className={style.header__lang}>
          <img src={ruIcon} alt="marker icon" width={26} height={18} />
          <button className={style["header__direction-btn"]}>
            Язык: Русский
          </button>
          <img src={arrowIcon} alt="arrow icon" width={16} height={16} />
        </div>
      </div>
      <div className={style.header__main}>
        <div className={style.header__logoWrap}>
          <Link className={style.header__logoLink} to="">
            <img
              className={style.header__logo}
              src={logoIcon}
              width={216}
              height={40}
            />
          </Link>
          <div className={style.header__logoText}>Консультация от врачей</div>
        </div>
        <nav className={style.header__nav}>
          <Link className={style.header__catalogLink} to="">
            <img src={appIcon} alt="app icon" width={16} height={16} />
            <span>Каталог услуг</span>
          </Link>
          <ul className={style.header__menu}>
            <li className={style.header__menuItem}>
              <Link to="">О проекте</Link>
            </li>
            <li className={style.header__menuItem}>
              <Link to="">Партнерство</Link>
            </li>
            <li className={style.header__menuItem}>
              <Link to="">Контакты</Link>
            </li>
          </ul>
          <div className={style.header__auth}>
            <Link to="">Вход / Регистрация</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
