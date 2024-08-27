import { Link, LinkProps } from 'react-router-dom';
import classnames from 'classnames';

import LogoSVG from '../../assets/components/logo.svg?react';

import './Logo.css';

export const Logo = ({ className, to }: LinkProps) => {
    return (
        <Link className={classnames('ui logo', className)} to={to}>
            <LogoSVG />
        </Link>
    );
};
