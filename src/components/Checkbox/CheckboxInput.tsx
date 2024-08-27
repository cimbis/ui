import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import cx from 'classnames';

import './CheckboxInput.css';

export type CheckboxInputProps = {} & HTMLAttributes<HTMLInputElement>;

export const CheckboxInput = forwardRef(
    ({ className, ...props }: CheckboxInputProps, ref: ForwardedRef<HTMLInputElement>) => {
        return (
            <input
                type="checkbox"
                ref={ref}
                className={cx('ui checkbox-input', className)}
                {...props}
            />
        );
    },
);
