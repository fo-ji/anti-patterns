import { CreateArticle } from '@/features/articles';

export default function CreateArticlePage() {
  return (
    <div className="flex w-full flex-col gap-4">
      <h1 className="text-center">記事作成</h1>
      <CreateArticle />
    </div>
  );
}
