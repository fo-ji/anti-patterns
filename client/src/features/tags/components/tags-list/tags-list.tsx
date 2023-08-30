import { Tag as UITag } from '@/components/tag';

import type { Tag } from '@prisma/client';

type TagsListProps = {
  tags: Tag[];
};

export const TagsList = ({ tags }: TagsListProps) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag.id}>
          <UITag href={`/tags/${tag.id}`}>{tag.name}</UITag>
        </li>
      ))}
    </ul>
  );
};
