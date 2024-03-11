import ArticleCard from "../../components/ArticleCard";
import BlogPageProps from "../../interfaces/props/BlogPageProps";

export default function BlogPage({ articles }: BlogPageProps) {
  return (
    <main className="w-5/6 m-auto">
      <h1 className="mb-2 text-xl">
        {articles.length > 0
          ? "Tous les articles du plus récent au plus ancien"
          : "Aucun article enregistré"}
      </h1>
      <div className="flex flex-col gap-4">
        {articles.map((article, index) => (
          <ArticleCard article={article} key={index} />
        ))}
      </div>
    </main>
  );
}
