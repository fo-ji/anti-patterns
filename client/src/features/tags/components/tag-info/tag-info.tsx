import { NoData } from '@/components/no-data';

import type { Tag } from '@prisma/client';

export type TagInfoProps = {
  tag: Tag | null;
  relatedArticleSize: number;
};

export const TagInfo = ({ tag, relatedArticleSize }: TagInfoProps) => {
  if (!tag) return <NoData />;
  return (
    <div className="rounded-md border-basic bg-white p-4">
      <h1 className="text-center"># {tag.name}</h1>
      <p className="text-right">{relatedArticleSize} 投稿</p>
    </div>
  );
};
