import ArticleCardProps from "../interfaces/props/ArticleCardProps";

export default function ArticleBox({ article }: ArticleCardProps) {
  return (
    <div className="flex gap-12 bg-gray-300 p-5">
      <div className="w-40 h-40 bg-[url('https://picsum.photos/160')]"></div>
      <div className="flex flex-col ">
        <div className="flex gap-4">
          <div>{article.title}</div>
          <div>
            {article.created_at.toLocaleDateString()} -{" "}
            {article.created_at.toLocaleTimeString()}
          </div>
        </div>
        <div>{article.content}</div>
      </div>
    </div>
  );
}
