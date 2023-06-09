import Link from 'next/link';
import { ReactNode } from 'react';

const style = {
  primary: 'bg-cyan-800 border-cyan-800 text-white',
  'primary-border': 'bg-transparent border-cyan-800 text-cyan-800',
  error: 'bg-error-800 border-error-800 text-white',
};

interface NavigationButtonProps {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'primary-border' | 'error';
  additionalClasses?: string;
}

const NavigationButton = ({
  children,
  href,
  variant = 'primary',
  additionalClasses,
}: NavigationButtonProps) => {
  return (
    <Link
      href={href}
      className={`flex rounded-full  items-center justify-center w-full duration-200 border text-sm cursor-pointer hover:brightness-90 whitespace-nowrap p-2 my-2 font-medium  ${style[variant]} ${additionalClasses}`}
    >
      {children}
    </Link>
  );
};

export { NavigationButton };
