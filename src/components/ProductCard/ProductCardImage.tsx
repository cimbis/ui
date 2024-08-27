import { HTMLAttributes } from 'react';
import cx from "classnames";

export type ProductCardImageProps = {
    imgSrc: string;
    imgAlt: string;
} & HTMLAttributes<HTMLDivElement>;

import "./ProductCardImage.css"
export const ProductCardImage = ({ imgSrc, imgAlt, className, ...props }: ProductCardImageProps) => {
    return (
        <div className={cx('ui product-card-image-container', className)} {...props}>
            <img src={imgSrc} alt={imgAlt} className="ui product-card-image" />
        </div>
    );
};
