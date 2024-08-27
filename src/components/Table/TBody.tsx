import { TableHTMLAttributes } from 'react';
import cx from 'classnames';

import './TBody.css';

export type TBodyProps = {} & TableHTMLAttributes<HTMLTableSectionElement>;
export const TBody = ({ className, ...props }: TBodyProps) => {
    return <tbody className={cx('ui table-body', className)} {...props}></tbody>;
};
