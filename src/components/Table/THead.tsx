import { TableHTMLAttributes } from 'react';
import cx from 'classnames';

import './THead.css';

export type THeadProps = {} & TableHTMLAttributes<HTMLTableSectionElement>;
export const THead = ({ className, ...props }: THeadProps) => {
    return <thead className={cx('ui table-head', className)} {...props}></thead>;
};
