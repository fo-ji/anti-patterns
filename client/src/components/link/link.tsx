import type { ReactNode } from 'react';

import NextLink from 'next/link';

const variants = {
  link: 'text-font-link hover:underline',
  solid: 'bg-main hover:bg-main-dark active:bg-main-light text-white',
  outline:
    'bg-white hover:bg-main text-main hover:text-white border border-main hover:border-transparent',
};

export type LinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  icon?: JSX.Element;
  shallow?: boolean;
};

export const Link = ({
  href,
  children,
  variant = 'link',
  icon,
  shallow = false,
}: LinkProps) => {
  return (
    <NextLink shallow={shallow} href={href} passHref>
      <button
        className={`
          inline-flex items-center gap-2 rounded px-4 py-2
          ${variants[variant]}
        `}
      >
        {icon && <span className="h-6 w-6">{icon}</span>}
        {children}
      </button>
    </NextLink>
  );
};
