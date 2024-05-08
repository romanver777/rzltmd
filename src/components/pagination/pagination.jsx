import cn from "classnames";
import arrowIcon from "../../assets/icons/angle-left-b.svg";
import style from "./pagination.module.scss";

const list = ["prev", 1, 2, 3, 4, "...", "next"];

const Pagination = () => {
  return (
    <div className={style.pagination}>
      <ul className={style.pagination__list}>
        {list.map((item) => (
          <li key={item} className={style.pagination__item}>
            <button
              className={cn(style.pagination__btn, {
                [style.pagination__btn_active]: item === 1,
                [style.pagination__btn_nohover]:
                  item === "prev" || item === "next" || item === "...",
                [style.pagination__btn_bgcolor_accent]:
                  item === "prev" || item === "next",
                [style.pagination__btn_noevent]: item === "...",
              })}
            >
              {item === "prev" ? (
                <img
                  src={arrowIcon}
                  alt="prev icon"
                  className={style.pagination__btn_img}
                />
              ) : item === "next" ? (
                <img
                  src={arrowIcon}
                  alt="next icon"
                  className={cn(
                    style.pagination__btn_img,
                    style.pagination__btn_img_next
                  )}
                />
              ) : (
                item
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
