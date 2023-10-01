import { LoginGithub, LoginMail } from '@/features/auth';

export default function AuthLoginPage() {
  return (
    <div className="p-24">
      <div className="flex rounded-lg p-8 flex-col items-center justify-between gap-12 bg-plain">
        <h1>ログイン</h1>
        <LoginGithub />
        <LoginMail />
      </div>
    </div>
  );
}
