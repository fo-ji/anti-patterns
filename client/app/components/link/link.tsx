import NextLink from 'next/link';
import type { ReactNode } from 'react';

const variants = {
  link: 'text-font-link hover:opacity-90 hover:underline',
  solid: 'bg-primary hover:opacity-90 text-font-white',
  outline:
    'bg-transparent hover:bg-primary text-primary hover:text-font-white border border-primary hover:border-transparent',
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
        className={`inline-flex items-center gap-2 rounded px-4 py-2 ${variants[variant]}`}
      >
        {icon && <span className="h-6 w-6">{icon}</span>}
        {children}
      </button>
    </NextLink>
  );
};
