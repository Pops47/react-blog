import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Article from "./interfaces/data/Article";
import Mail from "./interfaces/data/Mail";
import MailForm from "./interfaces/data/MailForm";
import AddArticlePage from "./pages/AddArticlePage/AddArticlePage";
import MailPage from "./pages/ArticlePage/MailPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import HomePage from "./pages/Homepage/HomePage";

function App() {
  const [mails, setMails] = useState<Mail[]>([]);
  const [mailForm, setMailForm] = useState<MailForm>({
    sender: "",
    subject: "",
    message: "",
  });

  const [articles, setArticles] = useState<Article[]>([]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              articles={articles}
              mailForm={mailForm}
              setMailForm={setMailForm}
              mails={mails}
              setMails={setMails}
            />
          }
        ></Route>
        <Route path="/blog" element={<BlogPage articles={articles} />}></Route>
        <Route
          path="/add_article"
          element={
            <AddArticlePage articles={articles} setArticles={setArticles} />
          }
        ></Route>
        <Route path="/mail/:mailId" element={<MailPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
