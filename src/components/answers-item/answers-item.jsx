import cn from "classnames";
import arrowIcon from "../../assets/icons/angle-down.svg";
import maleIcon from "../../assets/icons/male.svg";
import femaleIcon from "../../assets/icons/female.svg";
import specImg from "../../assets/img/ava.png";
import style from "./answers-item.module.scss";

const AnswersItem = ({ item }) => {
  return (
    <article className={style.answersItem}>
      <header className={style.answersItem__header}>
        <div className={style.answersItem__quest}>Вопрос: {21408}</div>
        <div className={style.answersItem__date}>Январь 27, 2024 9:41 pm</div>
      </header>
      <div className={style.answersItem__body}>
        <div className={style.answersItem__content}>
          <div className={style.answersItem__questionWrap}>
            <div className={style.answersItem__question}>
              <div className={style.answersItem__questionHead}>
                <div className={style.answersItem__questionCount}>
                  Получено ответов (3)
                </div>
                <div className={style.answersItem__questionUser}>
                  {item % 2
                    ? "Lorri Warf (26 лет)"
                    : "Kimberly Mastrangelo (24 лет)"}
                </div>
              </div>
              <div className={style.answersItem__questionBody}>
                Здравствуйте, доктор. В последнее время я заметил(а), что
                стал(а) быстро уставать и появилась постоянная усталость,
                несмотря на полноценный сон. К тому же, у меня снизился аппетит,
                и я замечаю периодические головные боли. Могли бы вы подсказать,
                что это может быть и какие обследования мне стоит пройти для
                уточнения...{" "}
                <button className={style.answersItem__questionBtn}>
                  Читать полностью
                </button>
              </div>
            </div>
            <div
              className={cn(style.answersItem__questionAva, {
                [style.answersItem__questionAva_bgcolor_blue]: item % 2 === 1,
                [style.answersItem__questionAva_bgcolor_pink]: item % 2 === 0,
              })}
            >
              {item % 2 ? (
                <img src={maleIcon} alt="male icon" />
              ) : (
                <img src={femaleIcon} alt="female icon" />
              )}
            </div>
          </div>
          <div className={style.answersItem__questionWrap}>
            <div
              className={cn(
                style.answersItem__question,
                style.answersItem__question_color_accent,
                style.answersItem__question_orderLast
              )}
            >
              <div
                className={cn(
                  style.answersItem__questionHead,
                  style.answersItem__questionHead_bbcolor
                )}
              >
                <div className={style.answersItem__questionSpec}>
                  Mary Freund (Гастроинтеролог)
                </div>
                <div
                  className={cn(
                    style.answersItem__questionUser,
                    style.answersItem__questionUser_color_white
                  )}
                >
                  Январь 27, 2024 9:41 pm
                </div>
              </div>
              <div className={style.answersItem__questionBody}>
                Можете ли вы, пожалуйста, объяснить, какие могут быть причины
                моих текущих симптомов (укажите свои симптомы), какие
                диагностические тесты вы рекомендуете для подтверждения
                диагноза, и какие методы лечения или изменения в образе жизни вы
                считаете наиболее эффективными для улучшения моего...{" "}
                <button
                  className={cn(
                    style.answersItem__questionBtn,
                    style.answersItem__questionBtn_color_white
                  )}
                >
                  Читать полностью
                </button>
              </div>
            </div>
            <div
              className={cn(
                style.answersItem__questionAva,
                style.answersItem__questionAva_img,
                style.answersItem__questionAva_orderPrev
              )}
            >
              <img src={specImg} alt="sex icon" />
            </div>
          </div>
        </div>
        <button className={style.answersItem__btn}>
          <span>Смотреть все ответы (2)</span>
          <img src={arrowIcon} alt="arrow icon" />
        </button>
      </div>
    </article>
  );
};

export default AnswersItem;
