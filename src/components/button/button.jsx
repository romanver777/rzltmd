import cn from "classnames";
import appIcon from "../../assets/icons/apps.svg";
import searchIcon from "../../assets/icons/search.svg";
import searchWIcon from "../../assets/icons/search-w.svg";
import sortIcon from "../../assets/icons/sort-amount-up.svg";
import starIcon from "../../assets/icons/star.svg";
import questIcon from "../../assets/icons/question-circle.svg";
import filesIcon from "../../assets/icons/files-landscapes-alt.svg";
import loginIcon from "../../assets/icons/login.svg";
import style from "./button.module.scss";

const Button = ({
  type = "primary",
  text,
  icon = "",
  size = "m",
  color = "",
  className,
  ...props
}) => {
  const getIcon = (icon) => {
    switch (icon) {
      case "app":
        return appIcon;
      case "search":
        return searchIcon;
      case "search_w":
        return searchWIcon;
      case "sort":
        return sortIcon;
      case "star":
        return starIcon;
      case "question":
        return questIcon;
      case "files":
        return filesIcon;
      case "login":
        return loginIcon;
      default:
        return "";
    }
  };
  return (
    <button
      className={cn(
        style.button,
        className,
        {
          [style.button_primary]: type === "primary",
          [style.button_accent]: type === "accent",
        },
        {
          [style.button_size_s]: size === "s",
          [style.button_size_m]: size === "m",
          [style.button_size_b]: size === "b",
        },
        {
          [style.button_colorAccent]: color === "accent",
          [style.button_colorGrey]: color === "grey",
        },
        {
          [style.button_filter]: icon === "filter",
        }
      )}
      {...props}
    >
      {icon && (
        <img
          src={getIcon(icon)}
          alt="icon"
          className={cn(style.button__icon, {
            [style.button__icon_app]: icon == "app",
            [style.button__icon_login]: icon == "login",
            [style.button__icon_search]: icon == "search_w",
            [style.button__icon_sort]: icon == "sort",
            [style.button__icon_filter]: icon == "filter",
          })}
          width={16}
          height={16}
        />
      )}
      <span className={style.button__text}>{text}</span>
    </button>
  );
};

export default Button;
