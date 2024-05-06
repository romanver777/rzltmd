import AnswersFilters from "../answers-filters/answers-filters";
import AnswersList from "../../components/answers-list/answers-list";
import style from "./answers.module.scss";

const Answers = () => {
  return (
    <section className={style.answers}>
      <AnswersFilters />
      <AnswersList />
    </section>
  );
};

export default Answers;
