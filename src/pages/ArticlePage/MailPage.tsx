import { useLocation, useParams } from "react-router-dom";

export default function MailPage() {
  const params = useParams();
  const index = params.mailId;

  const location = useLocation();
  const mail = location.state;

  return (
    <div className="flex flex-col gap-8 w-5/6 m-auto ">
      <h1>Détail du mail à l'index {index}</h1>
      <div className="flex flex-col gap-4 min-h-[80vh] bg-gray-300 p-5">
        <div>{mail.sender}</div>
        <div>{mail.subject}</div>
        <div>{mail.message}</div>
      </div>
    </div>
  );
}
