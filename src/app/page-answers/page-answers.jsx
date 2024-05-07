import PageLayout from "../../components/page-layout/page-layout";
import Header from "../../components/header/header";
import Content from "../../components/content/content";
import Cta from "../../components/cta/cta";
// import Answers from "../../components/answers/answers";
// import Footer from "../../components/footer/footer";

const PageAnswers = () => {
  return (
    <PageLayout>
      <Header />
      <Content>
        <Cta />
      </Content>
      {//<Footer />
    }
    </PageLayout>
  );
};

export default PageAnswers;
