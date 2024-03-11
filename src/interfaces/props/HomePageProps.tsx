import Article from "../data/Article";
import Mail from "../data/Mail";
import MailForm from "../data/MailForm";

export default interface HomePageProps {
  articles: Article[];
  mailForm: MailForm;
  setMailForm: React.Dispatch<React.SetStateAction<MailForm>>;
  mails: Mail[];
  setMails: React.Dispatch<React.SetStateAction<Mail[]>>;
}
