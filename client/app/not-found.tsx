import { Link } from '@/components/link';
import { NotFound } from '@/components/not-found';

export default function NotFoundPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-12">
      <NotFound />
      <p>
        <Link href="/" shallow>
          トップページにもどる
        </Link>
      </p>
    </div>
  );
}
