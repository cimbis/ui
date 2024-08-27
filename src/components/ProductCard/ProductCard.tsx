import { Link, LinkProps } from 'react-router-dom';
import cx from 'classnames';
import './ProductCard.css';

export type ProductCardProps = {
    badge: 'unifi' | 'unifi-lte';
} & LinkProps;

export const ProductCard = ({ to, className, children, badge, ...props }: ProductCardProps) => {
    const badgeText = badge === 'unifi' ? 'UniFi' : 'UniFi LTE';
    return (
        <Link to={to} className={cx('ui product-card', className)} {...props}>
            <div className={'ui badge'}>{badgeText}</div>
            {children}
        </Link>
    );
};
