import Footer from "../footer/footer";
import style from "./page-layout.module.scss";

const PageLayout = ({ children }) => {
  return (
    <div className={style.pageLayout}>
      <div className={style.pageLayout__container}>{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
