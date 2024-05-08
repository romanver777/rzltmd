import Button from "../button/button";
import AnswersItem from "../answers-item/answers-item";
import Pagination from "../pagination/pagination";
import style from "./answers-list.module.scss";

const answers = [1, 2, 3, 4, 5];

const AnswersList = () => {
  return (
    <div className={style.answersList}>
      <header className={style.answersList__header}>
        <h2 className={style.answersList__title}>
          Список последних ответов на вопросы{" "}
          <span className={style.answersList__title_color}>(12&nbsp;493)</span>
        </h2>
        <div className={style.answersList__btnWrap}>
          <Button text="Y" icon="filter" size="s" color="grey" />
          <Button text="Сортировать&nbsp;по" icon="sort" size="s" color="grey" />
        </div>
      </header>
      <div className={style.answersList__search}>
        <input
          type="text"
          placeholder="Искать по тексту в вопросе"
          className={style.answersList__input}
        />
        <Button type="accent" text="Поиск" icon="search_w" />
      </div>
      <ul className={style.answersList__list}>
        {answers.map((item, ind) => (
          <li key={ind}>
            <AnswersItem item={item} />
          </li>
        ))}
      </ul>
      <Pagination />
    </div>
  );
};

export default AnswersList;
