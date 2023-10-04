import { CreateUser } from '@/features/auth';

export default function AuthSignUpPage() {
  return (
    <div className="p-24">
      <div className="flex flex-col items-center justify-between gap-12 rounded-lg bg-white p-8">
        <h1>サインアップ</h1>
        <CreateUser />
      </div>
    </div>
  );
}
