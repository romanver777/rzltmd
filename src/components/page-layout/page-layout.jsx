import style from "./page-layout.module.scss";

const PageLayout = ({ children }) => {
  return <div className={style.pageLayout}>{children}</div>;
};

export default PageLayout;
