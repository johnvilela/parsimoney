import Link from "next/link";
import { ReactNode } from "react";

const style = {
	primary: "bg-md-l-primary border-md-l-primary text-md-l-on-primary",
	"primary-border": "bg-md-l-surface border-md-l-outline text-md-l-primary",
	error: "bg-md-l-error border-md-l-error text-md-l-on-error",
};

interface NavigationButtonProps {
	children: ReactNode;
	href: string;
	variant?: "primary" | "primary-border" | "error";
	additionalClasses?: string;
}

const NavigationButton = ({
	children,
	href,
	variant = "primary",
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
