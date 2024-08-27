import { TableHTMLAttributes } from 'react';
import cx from 'classnames';

import './Table.css';

export type TableProps = {} & TableHTMLAttributes<HTMLTableElement>;
export const Table = ({ className, ...props }: TableProps) => {
    return <table className={cx('ui table', className)} {...props}></table>;
};
