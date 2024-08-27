import { TableHTMLAttributes } from 'react';
import cx from 'classnames';

import './TR.css';

export type TRProps = {} & TableHTMLAttributes<HTMLTableRowElement>;
export const TR = ({ className, ...props }: TRProps) => {
    return <tr className={cx('ui table-row', className)} {...props}></tr>;
};
