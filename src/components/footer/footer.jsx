import { Link } from "react-router-dom";
import cn from "classnames";
import logoIcon from "../../assets/icons/Logo-w.svg";
import style from "./footer.module.scss";

const catalog = [
  "Медицинская консультация",
  "Справочник лекарств",
  "Справочник болезней",
  "Справочник лекарств",
  "Справочник Врачей и Клиник",
];

const action = [
  "Задать вопрос",
  "Лучшие консультанты",
  "Популярные вопросы",
  "Регистрация",
  "Вход в личный кабинет",
];

const project = [
  "Информация о проекте",
  "Сотрудничество",
  "Контакты для связи",
];

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__nav}>
          <div className={style.footer__brand}>
            <img
              className={style.footer__logo}
              src={logoIcon}
              width={216}
              height={40}
            />
            <div className={style.footer__logoText}>Консультация от врачей</div>
          </div>
          <div className={style.footer__catalog}>
            <h3 className={style.footer__title}>Каталог услуг</h3>
            <ul className={style.footer__list}>
              {catalog.map((item, ind) => (
                <li key={ind} className={style.footer__item}>
                  <Link
                    to=""
                    className={cn(style.footer__link, {
                      [style.footer__link_active]: ind === 0,
                    })}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.footer__action}>
            <h3 className={style.footer__title}>Выполнить</h3>
            <ul className={style.footer__list}>
              {action.map((item, ind) => (
                <li key={ind} className={style.footer__item}>
                  <Link to="" className={style.footer__link}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.footer__project}>
            <h3 className={style.footer__title}>Проект</h3>
            <ul className={style.footer__list}>
              {project.map((item, ind) => (
                <li key={ind} className={style.footer__item}>
                  <Link to="" className={style.footer__link}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={style.footer__rightsWrap}>
          <div className={style.footer__rights}>
            MedYordam 2024 - Все права защищены
          </div>
          <Link to="" className={style.footer__data}>
            Обработка данных
          </Link>
          <Link to="" className={style.footer__cond}>
            Условия использования
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
