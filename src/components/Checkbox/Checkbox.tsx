import { HTMLAttributes } from 'react';
import cx from 'classnames';

import './Checkbox.css';

export type CheckboxProps = {} & HTMLAttributes<HTMLDivElement>;
export const Checkbox = ({ className, children, ...props }: CheckboxProps) => {
    return (
        <div className={cx('ui checkbox', className)} {...props}>
            {children}
        </div>
    );
};
