import { Link, LinkProps } from 'react-router-dom';
import cx from 'classnames';
import './ProductCard.css';

export type ProductCardProps = {
    badge: 'ui' | 'ui-6g';
} & LinkProps;

export const ProductCard = ({ to, className, children, badge, ...props }: ProductCardProps) => {
    const badgeText = badge === 'ui' ? 'UI' : 'UI 6G';
    return (
        <Link to={to} className={cx('ui product-card', className)} {...props}>
            <div className={'ui badge'}>{badgeText}</div>
            {children}
        </Link>
    );
};
