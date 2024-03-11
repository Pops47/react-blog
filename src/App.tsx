import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Article from "./interfaces/Article";
import Mail from "./interfaces/Mail";
import AddArticlePage from "./pages/AddArticlePage/AddArticlePage";
import MailPage from "./pages/ArticlePage/MailPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import HomePage from "./pages/Homepage/HomePage";

function App() {
  const [mails, setMails] = useState<Mail[]>([]);

  const [articles, setArticles] = useState<Article[]>([]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage articles={articles} mails={mails} setMails={setMails} />
          }
        ></Route>
        <Route path="/blog" element={<BlogPage articles={articles} />}></Route>
        <Route
          path="/add_article"
          element={<AddArticlePage setArticles={setArticles} />}
        ></Route>
        <Route path="/mail/:mailId" element={<MailPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
