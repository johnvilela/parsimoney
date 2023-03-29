"use client";

import React, { forwardRef, InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import { MdErrorOutline } from "react-icons/md";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    error?: string;
    hint?: string;
    icon?: React.ComponentType<IconBaseProps>;
}

const Textfield = forwardRef<HTMLInputElement, InputProps>(
    ({ id, label, hint, icon: Icon, error, ...rest }, ref) => {
        const hasErrorStyle = error ? "border-md-l-error" : "border-md-l-outline";
        const hasIconStyle = Icon ? "has-icon-animation" : "has-not-icon-animation";

        return (
            <div className="w-full mb-3">
                <div
                    className={`box-border flex gap-2 items-center justify-between w-full py-2 px-4 duration-200 border h-14 text-md-l-on-surface focus-within:border-md-l-primary bg-md-l-surface rounded ${hasErrorStyle}`}
                >
                    {Icon && (
                        <div>
                            <Icon size={20} />
                        </div>
                    )}
                    <div className="relative flex-1 h-full">
                        <input
                            ref={ref}
                            className="w-full h-full bg-transparent outline-none placeholder:text-transparent"
                            placeholder={label}
                            id={id}
                            type="text"
                            {...rest}
                        />
                        <label
                            className={`absolute max-w-full text-left top-2 left-2 line-clamp-1  ${hasIconStyle}`}
                            htmlFor={id}
                        >
                            {label}
                        </label>
                    </div>
                    {error && (
                        <div className="w-5">
                            <MdErrorOutline className="text-md-l-error" size={20} />
                        </div>
                    )}
                </div>
                {error && (
                    <span className="flex items-center ml-4 text-sm text-md-l-error">
                        {error}
                    </span>
                )}
                {hint && !error && (
                    <span className="flex items-center ml-4 text-sm text-md-l-on-surface-variant">
                        {hint}
                    </span>
                )}
            </div>
        );
    }
);
Textfield.displayName = "Textfield";

export { Textfield };
