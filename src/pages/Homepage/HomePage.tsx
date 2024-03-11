import { Dispatch, SetStateAction } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard";
import MailCard from "../../components/MailCard";
import Article from "../../interfaces/Article";
import Mail from "../../interfaces/Mail";

interface HomePageProps {
  articles: Article[];
  mailForm: Mail;
  setMailForm: Dispatch<SetStateAction<Mail>>;
  mails: Mail[];
  setMails: Dispatch<SetStateAction<Mail[]>>;
}

export default function HomePage({
  articles,
  mailForm,
  setMailForm,
  mails,
  setMails,
}: HomePageProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setMailForm({ ...mailForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setMails([{ ...mailForm, created_at: new Date() }, ...mails]);
    setMailForm({ sender: "", subject: "", message: "" });
  };
  const lastArticle: Article = articles[0];

  const navigate: NavigateFunction = useNavigate();

  const viewMail = (index: number): void => {
    navigate(`/mail/${index}`, { state: mails[index] });
  };

  return (
    <main className=" w-5/6 m-auto">
      <section className="flex justify-between gap-12 mb-5">
        <div className="w-2/3">
          <h2 className="mb-2 text-xl">Boite de reception</h2>
          <div className="flex flex-col gap-4 bg-gray-300 min-h-96 p-5 w-full">
            {mails.length > 0 ? (
              mails.map((mail, index) => (
                <div key={index} className="flex justify-between gap-4 w-full">
                  <MailCard mail={mail} />
                  <button
                    onClick={() => viewMail(index)}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  >
                    Voir
                  </button>
                </div>
              ))
            ) : (
              <p>Aucun message</p>
            )}
          </div>
        </div>
        <div className=" w-1/3">
          <h2 className="mb-2 text-xl">Nous contacter</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4 bg-gray-300 min-h-96 p-5"
          >
            <div className="flex flex-col items-start w-full">
              <label htmlFor="sender">Nom</label>
              <input
                type="text"
                id="sender"
                name="sender"
                value={mailForm.sender}
                className="border-2 border-gray-300 w-full p-1"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label htmlFor="subject">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={mailForm.subject}
                className="border-2 border-gray-300 w-full p-1"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={mailForm.message}
                className="border-2 border-gray-300 h-24 w-full p-1"
                onChange={(e) => {
                  handleChange(e);
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
      <section>
        <h2 className="mb-2 text-xl">Le dernier article</h2>
        {articles.length > 0 ? (
          <ArticleCard article={lastArticle} />
        ) : (
          <div className=" bg-gray-300 p-5 h-52"> Aucun article </div>
        )}
      </section>
    </main>
  );
}
