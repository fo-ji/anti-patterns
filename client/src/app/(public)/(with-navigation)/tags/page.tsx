import { TagsList, getTags } from '@/features/tags';

export default async function PublicTagsPage() {
  const tags = await getTags(500);

  return (
    <section className="w-3/4 flex-1 rounded-md bg-white py-6">
      <h1 className="ml-4">Tagの一覧(max: 500件)</h1>
      <p className="m-4">tagの検索実装する？</p>
      <div className="m-4">
        <TagsList tags={tags} />
      </div>
    </section>
  );
}
