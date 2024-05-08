import PageLayout from "../../components/page-layout/page-layout";
import Header from "../../components/header/header";
import Content from "../../components/content/content";
import Cta from "../../components/cta/cta";
import Answers from "../../components/answers/answers";

const PageAnswers = () => {
  return (
    <PageLayout>
      <Header />
      <Content>
        <Cta />
        <Answers />
      </Content>
    </PageLayout>
  );
};

export default PageAnswers;
