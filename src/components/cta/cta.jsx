import Button from "../button/button";
import style from "./cta.module.scss";

const features = [
  {
    icon: "star",
    text: "Лучшие консультанты",
  },
  {
    icon: "question",
    text: "Задать вопрос",
  },
  {
    icon: "files",
    text: "Популярные вопросы",
  },
];

const adv = [
  {
    num: "+1000",
    text: "Врачей различных специализаций",
  },
  {
    num: "24/7",
    text: "Доступ к медицинской помощи",
  },
  {
    num: "+95%",
    text: "Положительных отзывов",
  },
  {
    num: "+20000",
    text: "Анкет пользователей",
  },
];

const Cta = () => {
  return (
    <section className={style.cta}>
      <div className={style.cta__main}>
        <div className={style.cta__descr}>Консультация от врачей</div>
        <h2 className={style.cta__title}>
          Получайте бесплатную консультацию от&nbsp;лучших специалистов
        </h2>
        <ul className={style.cta__features}>
          {features.map((item, ind) => (
            <li key={ind}>
              <Button icon={item.icon} text={item.text} size="b" />
            </li>
          ))}
        </ul>
      </div>
      <ul className={style.cta__adv}>
        {adv.map((item, ind) => (
          <li key={ind} className={style.cta__advItem}>
            <span className={style.cta__advNum}>{item.num}</span>
            <span className={style.cta__advText}>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cta;
