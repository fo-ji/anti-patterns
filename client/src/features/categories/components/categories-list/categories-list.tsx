'use client';

import { usePathname } from 'next/navigation';

import { NavLink } from '@/components/link';

import type { Category } from '@prisma/client';

type CategoriesListProps = {
  categories: Category[];
};

export const CategoriesList = ({ categories }: CategoriesListProps) => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-2">
      {categories.map((category) => (
        <li key={category.id} className="indent-4">
          <NavLink
            href={`/categories/${category.id}`}
            isCurrent={pathname === `/categories/${category.id}`}
          >
            {category.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
