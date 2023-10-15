import { Loading as LoadingSkeleton } from '@/components/loading';

export default function Loading() {
  return (
    <div className="m-auto flex h-screen">
      <LoadingSkeleton />
    </div>
  );
}
