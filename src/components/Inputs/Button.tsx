'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { CgSpinner } from 'react-icons/cg';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  variant?: 'primary' | 'primary-border';
  aditionalClasses?: string;
}

const style = {
  primary: 'bg-cyan-800 border-cyan-800 text-white',
  'primary-border': 'bg-transparent border-cyan-800 text-cyan-800',
};

const disabledButton =
  'disabled:hover:brightness-100 disabled:cursor-auto disabled:bg-gray-400 disabled:border-gray-400';

export function Button({
  isLoading,
  children,
  variant = 'primary',
  aditionalClasses,
  ...rest
}: IButton) {
  return (
    <button
      className={`flex rounded-full  items-center justify-center w-full duration-200 border text-sm cursor-pointer hover:brightness-90 whitespace-nowrap p-2 my-2 font-medium  ${disabledButton} ${style[variant]} ${aditionalClasses}`}
      type="button"
      {...rest}
    >
      {!isLoading && children}
      {isLoading && <CgSpinner className="animate-spin" size="1.5rem" />}
    </button>
  );
}
