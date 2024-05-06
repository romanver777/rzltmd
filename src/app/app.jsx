import { Routes, Route } from "react-router-dom";
import PageAnswers from "./page-answers/page-answers";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageAnswers />} />
    </Routes>
  );
};

export default App;
