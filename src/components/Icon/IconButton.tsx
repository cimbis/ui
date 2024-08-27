import { HTMLAttributes, lazy, Suspense } from 'react';
import cx from 'classnames';

import './IconButton.css';

export type IconProps = {
    icon: 'search' | 'list' | 'grid';
} & HTMLAttributes<HTMLButtonElement>;

const getIcon = (icon: string) => {
    return lazy(() => import(`../../assets/icons/${icon}.svg?react`));
};

export const IconButton = ({ icon, className, ...props }: IconProps) => {
    const IconSVG = getIcon(icon);

    return (
        <Suspense fallback={null}>
            <button className={cx('ui icon', className)} {...props}>
                <IconSVG />
            </button>
        </Suspense>
    );
};
