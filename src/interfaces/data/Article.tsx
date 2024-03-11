import ArticleForm from "./ArticleForm";

export default interface Article extends ArticleForm {
  created_at: Date;
}
