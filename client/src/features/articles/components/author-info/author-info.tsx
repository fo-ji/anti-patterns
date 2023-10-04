import { FolderIcon, StarIcon } from '@heroicons/react/24/outline';
import {
  UserCircleIcon,
  CalendarIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/solid';
import { format } from 'date-fns';

import { NoData } from '@/components/no-data';

import type { ArticleWithRelations } from '../../types';

export type AuthorInfoProps = {
  article?: ArticleWithRelations;
};

export const AuthorInfo = ({ article }: AuthorInfoProps) => {
  if (!article) return <NoData />;
  return (
    <aside className="block min-h-[calc(100vh_-_156px)] w-1/4">
      <dl
        role="list"
        className="max-w-md divide-y divide-basic rounded-md bg-white p-4"
      >
        <div className="flex flex-col pb-3">
          <dt className="mb-1 flex items-center gap-2">
            <UserCircleIcon className="h-5 w-5" />
            <span>投稿者</span>
          </dt>
          <dd className="truncate text-right font-semibold">
            {article.user.name}
          </dd>
        </div>
        <div className="flex flex-col py-3">
          <dt className="mb-1 flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            <span>投稿日</span>
          </dt>
          <dd className="text-right font-semibold">
            {format(new Date(article.createdAt), 'yyyy/MM/dd')}
          </dd>
        </div>
        <div className="flex flex-col py-3">
          <dt className="mb-1 flex items-center gap-2">
            <ArrowPathIcon className="h-5 w-5" />
            <span>更新日</span>
          </dt>
          <dd className="text-right font-semibold">
            {format(new Date(article.updatedAt), 'yyyy/MM/dd')}
          </dd>
        </div>
        <div className="flex flex-col py-3">
          <dt className="mb-1 flex items-center gap-2">
            <FolderIcon className="h-5 w-5" />
            <span>カテゴリ</span>
          </dt>
          <dd className="truncate text-right font-semibold">
            {article.category.name}
          </dd>
        </div>
        <div className="flex flex-col pt-3">
          <dt className="mb-1 flex items-center gap-2">
            <StarIcon className="h-5 w-5" />
            <span>お気に入り</span>
          </dt>
          <dd className="truncate text-right font-semibold">
            {article.favorites.length}
          </dd>
        </div>
      </dl>
    </aside>
  );
};
