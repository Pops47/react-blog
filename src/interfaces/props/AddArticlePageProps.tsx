import Article from "../data/Article";

export default interface AddArticlePageProps {
  articles: Article[];
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
}
