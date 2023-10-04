import { NoData } from '@/components/no-data';

import type { Category } from '@prisma/client';

export type CategoryInfoProps = {
  category: Category | null;
};

export const CategoryInfo = ({ category }: CategoryInfoProps) => {
  if (!category) return <NoData />;
  return (
    <div className="rounded-md border-basic bg-white p-4">
      <h1 className="text-center">{category.name}</h1>
    </div>
  );
};
