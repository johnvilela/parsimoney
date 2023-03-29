"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { CgSpinner } from "react-icons/cg";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	isLoading?: boolean;
	variant?: "primary" | "primary-border" | "error";
	aditionalClasses?: string;
}

const style = {
	primary: "bg-md-l-primary border-md-l-primary text-md-l-on-primary",
	"primary-border": "bg-md-l-surface border-md-l-outline text-md-l-primary",
	error: "bg-md-l-error border-md-l-error text-md-l-on-error",
};

const disabledButton =
	"disabled:hover:brightness-100 disabled:cursor-auto disabled:bg-gray-400 disabled:border-gray-400";

export function Button({
	isLoading,
	children,
	variant = "primary",
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
