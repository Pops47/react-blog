import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import ArticleForm from "../../interfaces/data/ArticleForm";
import AddArticlePageProps from "../../interfaces/props/AddArticlePageProps";

export default function AddArticlePage({
  articles,
  setArticles,
}: AddArticlePageProps) {
  const [articleForm, setArticleForm] = useState<ArticleForm>({
    author: "",
    imgUrl: "",
    title: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setArticleForm({ ...articleForm, [e.target.name]: e.target.value });
  };

  const navigate: NavigateFunction = useNavigate();

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setArticles([{ ...articleForm, created_at: new Date() }, ...articles]);
    setArticleForm({
      author: "",
      imgUrl: "",
      title: "",
      content: "",
    });
    navigate("/blog");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-8 w-2/3 h-[80vh] m-auto bg-gray-300 p-12"
    >
      <div className="flex flex-col items-start w-full">
        <label htmlFor="author" className="mb-2">
          Votre Nom
        </label>
        <input
          onChange={handleChange}
          type="text"
          id="author"
          name="author"
          value={articleForm.author}
          className="border-2 border-gray-300 w-full p-2"
        />
      </div>
      <div className="flex flex-col items-start w-full">
        <label htmlFor="title" className="mb-2">
          Titre de l'article
        </label>
        <input
          onChange={handleChange}
          type="text"
          id="title"
          name="title"
          value={articleForm.title}
          className="border-2 border-gray-300 w-full p-2"
        />
      </div>
      <div className="flex flex-col items-start w-full">
        <label htmlFor="content" className="mb-2">
          Description
        </label>
        <textarea
          onChange={handleChange}
          name="content"
          id="content"
          value={articleForm.content}
          className="border-2 border-gray-300 h-40 w-full p-2 mb-4"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-1/2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-4 border border-gray-400 rounded shadow"
      >
        Envoyer
      </button>
    </form>
  );
}
