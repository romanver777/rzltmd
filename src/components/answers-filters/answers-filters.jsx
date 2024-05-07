import crossIcon from "../../assets/icons/multiply.svg";
import searchIcon from "../../assets/icons/search.svg";
import style from "./answers-filters.module.scss";

const specs = [
  {
    title: "Аллерголог",
    count: 12312,
  },
  {
    title: "Андролог",
    count: 12312,
  },
  {
    title: "Венеролог",
    count: 12312,
  },
  {
    title: "Врач УЗИ",
    count: 12312,
  },
  {
    title: "Гастроэнтеролог",
    count: 12312,
  },
  {
    title: "Гематолог",
    count: 12312,
  },
  {
    title: "Генетик",
    count: 12312,
  },
  {
    title: "Гинеколог",
    count: 12312,
  },
  {
    title: "Дерматолог",
    count: 12312,
  },
  {
    title: "Диетолог",
    count: 12312,
  },
  {
    title: "Инфекционист",
    count: 12312,
  },
  {
    title: "Кардиолог",
    count: 12312,
  },
  {
    title: "ЛОР",
    count: 12312,
  },
  {
    title: "Маммолог",
    count: 12312,
  },
  {
    title: "Нарколог",
    count: 12312,
  },
];

const AnswersFilters = () => {
  return (
    <div className={style.answersFilters}>
      <header className={style.answersFilters__header}>
        <h3 className={style.answersFilters__title}>
          Фильтрация по&nbsp;направлениям
        </h3>
        <button className={style.answersFilters__btn}>
          <img src={crossIcon} alt="cross icon" />
          <span>Сбросить</span>
        </button>
      </header>
      <div className={style.answersFilters__search}>
        <input
          type="text"
          placeholder="Поиск направления"
          className={style.answersFilters__inp}
        />
        <img
          src={searchIcon}
          alt="search icon"
          className={style.answersFilters__icon}
        />
      </div>
      <ul className={style.answersFilters__specList}>
        {specs.map((item, ind) => (
          <li key={ind} className={style.answersFilters__specItem}>
            <input
              id={`cb${ind}`}
              type="checkbox"
              className={style.answersFilters__cb}
            />
            <label htmlFor={`cb${ind}`} className={style.answersFilters__label}>
              {item.title}
            </label>
            <div className={style.answersFilters__count}>({item.count})</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnswersFilters;
