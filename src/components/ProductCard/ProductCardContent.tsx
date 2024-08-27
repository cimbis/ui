import cx from "classnames";
import {HTMLAttributes} from "react";

export type ProductCardContentProps = {} & HTMLAttributes<HTMLDivElement>;

import "./ProductCardContent.css"
export const ProductCardContent = ({className, children, ...props}: ProductCardContentProps) => {
    return (
        <div className={cx('ui product-card-content', className)} {...props}>
            {children}
        </div>
    )
}
