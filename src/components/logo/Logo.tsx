import { useMemo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classnames from 'classnames';

import LogoSVG from '../../assets/components/logo.svg?react';

import './Logo.css';

export const Logo = ({ className, to }: LinkProps) => {
    const computedClassname = useMemo(() => {
        return classnames('ui logo', className);
    }, [className]);

    return (
        <Link className={computedClassname} to={to}>
            <LogoSVG />
        </Link>
    );
};
