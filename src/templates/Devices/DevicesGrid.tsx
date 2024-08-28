import {useContext} from "react";

import {ProductCard} from '../../components/ProductCard/ProductCard.tsx';
import {ProductCardImage} from '../../components/ProductCard/ProductCardImage.tsx';
import {ProductCardContent} from '../../components/ProductCard/ProductCardContent.tsx';

import {DeviceContext} from "../../App.tsx";

import Placeholder from '../../assets/components/placeholder.png';

import './DevicesGrid.css';

export const DevicesGrid = () => {
    const deviceContext = useContext(DeviceContext)

    return (
        <div className="ui devices-grid">
            {[...Array(deviceContext)].map((_, index) => {
                return (
                    <ProductCard
                        key={`strictly-unique-key-based-on-index-that-will-never-change-${index}`}
                        badge={index % 3 === 0 ? 'ui' : 'ui-6g'}
                        to={`/device/${index}`}
                    >
                        <ProductCardImage imgSrc={Placeholder} imgAlt={"it's a device"}/>
                        <ProductCardContent>
                            <span
                                className="ui text-color-main text-size-md">A product</span>
                            <span className={'ui text-color-quiet text-size-sm'}>It's a name</span>
                        </ProductCardContent>
                    </ProductCard>
                );
            })}
        </div>
    );
};
