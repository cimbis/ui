import { InputHTMLAttributes} from 'react';
import cx from 'classnames';

import './Checkbox.css';

export type CheckboxProps = {} & InputHTMLAttributes<HTMLDivElement>;
export const Checkbox = ({ className, children, ...props }: CheckboxProps) => {
    return (
        <div className={cx('ui checkbox', className)} {...props}>
            {children}
        </div>
    );
};
