import type { ReactNode } from 'react';

import NextLink from 'next/link';

import { HashtagIcon } from '@heroicons/react/24/solid';

export type TagProps = {
  href: string;
  children: ReactNode;
  shallow?: boolean;
};

export const Tag = ({ href, children, shallow }: TagProps) => {
  return (
    <NextLink shallow={shallow} href={href} passHref>
      <button className="inline-flex items-center gap-2 rounded-full border border-basic bg-white p-2 text-xs hover:bg-basic">
        <HashtagIcon className="h-4 w-4" />
        {children}
      </button>
    </NextLink>
  );
};
