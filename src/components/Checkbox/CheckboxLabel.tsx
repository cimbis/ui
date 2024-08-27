import { LabelHTMLAttributes } from 'react';

export type CheckboxLabelProps = {} & LabelHTMLAttributes<HTMLLabelElement>;
export const CheckBoxLabel = ({ children, htmlFor, ...props }: CheckboxLabelProps) => {
    return (
        <label htmlFor={htmlFor} {...props}>
            {children}
        </label>
    );
};
