import { LoginGithub, LoginMail } from '@/features/auth';

export default function AuthLoginPage() {
  return (
    <div className="p-24">
      <div className="flex flex-col items-center justify-between gap-12 rounded-lg bg-white p-8">
        <h1>ログイン</h1>
        <LoginGithub />
        <LoginMail />
      </div>
    </div>
  );
}
