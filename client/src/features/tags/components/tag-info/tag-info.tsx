import { NoData } from '@/components/no-data';

import type { Tag } from '@prisma/client';

export type TagInfo = {
  tag: Tag | null;
  relatedArticleSize: number;
};

export const TagInfo = ({ tag, relatedArticleSize }: TagInfo) => {
  if (!tag) return <NoData />;
  return (
    <div className="rounded-md border-neutral bg-plain p-4">
      <h1 className="text-center"># {tag.name}</h1>
      <p className="text-right">{relatedArticleSize} 投稿</p>
    </div>
  );
};
