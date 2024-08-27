import { ThHTMLAttributes } from 'react';
import cx from 'classnames';

import './TH.css';

export type THProps = {} & ThHTMLAttributes<HTMLTableCellElement>;
export const TH = ({ className, children, ...props }: THProps) => {
    return (
        <th className={cx('ui table-header-cell', className)} {...props}>
            <div className={'th-border'}>{children}</div>
        </th>
    );
};
