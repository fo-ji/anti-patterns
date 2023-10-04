import type { MouseEventHandler, ReactNode } from 'react';

const variants = {
  solid: 'bg-main hover:bg-main-dark active:bg-main-light text-white',
  outline:
    'bg-white hover:bg-main text-main hover:text-white border border-main hover:border-transparent',
  circle:
    'bg-white hover:bg-accent text-accent hover:text-white rounded-full border border-accent',
};

export type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: keyof typeof variants;
  disabled?: boolean;
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
      className={`
        inline-flex items-center gap-2 rounded px-4 py-2
        disabled:cursor-not-allowed disabled:opacity-50
        ${variants[variant]}
      `}
      type={type}
    >
      {icon && <span className="h-6 w-6">{icon}</span>}
      {children}
    </button>
  );
};
