export default interface Mail {
  sender: string;
  subject: string;
  message: string;
  created_at?: Date;
}
