import { HTMLAttributes, lazy, Suspense, useMemo } from 'react';
import classnames from 'classnames';

import "./IconButton.css"

export type IconProps = {
    icon: 'search' | 'list' | 'grid';
} & HTMLAttributes<HTMLButtonElement>;

export const IconButton = ({ icon, className, ...props }: IconProps) => {
    const IconSVG = useMemo(() => {
        return lazy(() => import(`../../assets/icons/${icon}.svg?react`));
    }, [icon]);

    const computedClassname = useMemo(() => {
        return classnames('ui icon', className);
    }, [className]);

    return (
        <Suspense fallback={null}>
            <button className={computedClassname} {...props}>
                <IconSVG />
            </button>
        </Suspense>
    );
};
