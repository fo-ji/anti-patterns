import { Link } from '@/components/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between gap-12 p-24">
      <Link href="/login">ログイン</Link>
    </div>
  );
}
