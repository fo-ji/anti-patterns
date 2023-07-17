import type { MouseEventHandler, ReactNode } from 'react';

const variants = {
  solid: 'bg-primary hover:opacity-90 text-font-white',
  outline:
    'bg-transparent hover:bg-primary text-primary hover:text-font-white border border-primary hover:border-transparent',
};

export type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: keyof typeof variants;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: JSX.Element;
};

export const Button = ({
  variant = 'solid',
  type = 'button',
  children,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`inline-flex items-center gap-2 rounded px-4 py-2 ${variants[variant]}`}
      type={type}
    >
      {icon && <span className="h-6 w-6">{icon}</span>}
      {children}
    </button>
  );
};
