import { Link } from "react-router-dom";
import Button from "../button/button";
import markerIcon from "../../assets/icons/map-marker.svg";
import ruIcon from "../../assets/icons/ru.svg";
import arrowIcon from "../../assets/icons/angle-down.svg";
import logoIcon from "../../assets/icons/logo.svg";
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
          <Button type="accent" text="Каталог услуг" icon="app"/>
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
        </nav>
        <Button size="m" text="Вход / Регистрация" color="accent"/>
      </div>
    </header>
  );
};

export default Header;
