import MailCardProps from "../interfaces/props/MailCardProps";

export default function ArticleBox({ mail }: MailCardProps) {
  return (
    <div className="flex flex-col grow p-2 bg-white ">
      <div className="flex gap-4 ">
        <div className="w-1/6 line-clamp-1">{mail.sender}</div>
        <div className="w-1/6 line-clamp-1">{mail.subject}</div>
        <div className="w-4/6 line-clamp-1">{mail.message}</div>
      </div>
      <div>
        {mail.created_at.toLocaleDateString()} -{" "}
        {mail.created_at.toLocaleTimeString()}
      </div>
    </div>
  );
}
