import cn from "classnames";
import appIcon from "../../assets/icons/apps.svg";
import searchIcon from "../../assets/icons/search.svg";
import sortIcon from "../../assets/icons/sort-amount-up.svg";
import starIcon from "../../assets/icons/star.svg";
import questIcon from "../../assets/icons/question-circle.svg";
import filesIcon from "../../assets/icons/files-landscapes-alt.svg";
import style from "./button.module.scss";

const Button = ({ type = "primary", data, icon = "", size = "m" }) => {
  const getIcon = (icon) => {
    switch (icon) {
      case "app":
        return appIcon;
      case "search":
        return searchIcon;
      case "sort":
        return sortIcon;
      case "star":
        return starIcon;
      case "question":
        return questIcon;
      case "files":
        return filesIcon;
      default:
        return "";
    }
  };
  return (
    <button
      className={cn(
        style.button,
        {
          [style.button_primary]: type === "primary",
          [style.button_accent]: type === "accent",
        },
        {
          [style.button_size_s]: size === "s",
          [style.button_size_m]: size === "m",
          [style.button_size_b]: size === "b",
        }
      )}
    >
      {icon && (
        <img src={getIcon(icon)} alt="icon" className={style.button__icon} />
      )}
      <span className={style.button__text}>{data.text}</span>
    </button>
  );
};

export default Button;
