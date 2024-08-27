import {ForwardedRef, forwardRef, InputHTMLAttributes} from 'react';
import cx from 'classnames';

import "./Searchbox.css"

export type SearchboxProps = {} & InputHTMLAttributes<HTMLInputElement>;
export const Searchbox = forwardRef(
    ({ className, ...props }: SearchboxProps, ref: ForwardedRef<HTMLInputElement>) => {
        return (
            <input ref={ref} type="search" className={cx('ui searchbox', className)} {...props} />
        );
    },
);
