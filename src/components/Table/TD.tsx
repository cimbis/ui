import { TableHTMLAttributes } from 'react';
import cx from 'classnames';

import './TD.css';

export type THProps = {} & TableHTMLAttributes<HTMLTableCellElement>;
export const TD = ({ className, ...props }: THProps) => {
    return <td className={cx('ui table-cell', className)} {...props}></td>;
};
