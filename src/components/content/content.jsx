import style from "./content.module.scss";

const Content = ({ children }) => {
  return <main className={style.content}>{children}</main>;
};

export default Content;
