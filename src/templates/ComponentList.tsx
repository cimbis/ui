import { Logo } from '../components/Logo/Logo.tsx';
import { IconButton } from '../components/Icon/IconButton.tsx';

import { ProductCard } from '../components/ProductCard/ProductCard.tsx';
import { ProductCardImage } from '../components/ProductCard/ProductCardImage.tsx';
import { ProductCardContent } from '../components/ProductCard/ProductCardContent.tsx';

import { Checkbox } from '../components/Checkbox/Checkbox.tsx';
import { CheckboxInput } from '../components/Checkbox/CheckboxInput.tsx';
import { CheckBoxLabel } from '../components/Checkbox/CheckboxLabel.tsx';

import { Searchbox } from '../components/Search/Searchbox.tsx';

import {Table} from "../components/Table/Table.tsx";
import {THead} from "../components/Table/THead.tsx";
import {TBody} from "../components/Table/TBody.tsx";
import {TR} from "../components/Table/TR.tsx";
import {TH} from "../components/Table/TH.tsx";
import {TD} from "../components/Table/TD.tsx";

import Placeholder from '../assets/components/placeholder.png';
import './ComponentList.css';

export const ComponentList = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <Logo to={'#'} />
                    <Logo to={'#'} className={'is-hovered'} />
                    <Logo to={'#'} className={'is-focused'} />
                </div>
                <div className="col">
                    <IconButton icon={'search'} />
                    <IconButton icon={'list'} className={'is-hovered'} />
                    <IconButton icon={'grid'} className={'is-focused'} />
                    <IconButton icon={'search'} className={'is-active'} />
                </div>
                <div className="col">
                    <ProductCard to={'#'} badge={'ui'}>
                        <ProductCardImage imgSrc={Placeholder} imgAlt={''} />
                        <ProductCardContent>
                            <span>123</span>
                            <span className={'ui text-color-quiet text-size-sm'}>123</span>
                        </ProductCardContent>
                    </ProductCard>

                    <ProductCard to={'#'} badge={'ui-6g'} className={'is-hovered'}>
                        <ProductCardImage imgSrc={Placeholder} imgAlt={''} />
                        <ProductCardContent>
                            <span>123</span>
                            <span className={'ui text-color-quiet text-size-sm'}>123</span>
                        </ProductCardContent>
                    </ProductCard>

                    <ProductCard to={'#'} badge={'ui-6g'} className={'is-focused'}>
                        <ProductCardImage imgSrc={Placeholder} imgAlt={''} />
                        <ProductCardContent>
                            <span>123</span>
                            <span className={'ui text-color-quiet text-size-sm'}>123</span>
                        </ProductCardContent>
                    </ProductCard>
                </div>
                <div className="col">
                    <Checkbox>
                        <CheckboxInput id={'1'} />
                        <CheckBoxLabel htmlFor={'1'}>Checkbox</CheckBoxLabel>
                    </Checkbox>
                    <Checkbox>
                        <CheckboxInput id={'2'} className={'is-hovered'} />
                        <CheckBoxLabel htmlFor={'2'}>Checkbox</CheckBoxLabel>
                    </Checkbox>
                    <Checkbox className={'is-focused'}>
                        <CheckboxInput id={'3'} />
                        <CheckBoxLabel htmlFor={'3'}>Checkbox</CheckBoxLabel>
                    </Checkbox>
                    <Checkbox>
                        <CheckboxInput id={'4'} className={'is-checked'} />
                        <CheckBoxLabel htmlFor={'4'}>Checkbox</CheckBoxLabel>
                    </Checkbox>
                </div>
                <div className="col">
                    <Searchbox placeholder={'Search'} />
                    <Searchbox className={'is-hovered'} placeholder={'Search'} />
                    <Searchbox className={'is-focused'} placeholder={'Search'} />
                    <Searchbox className={'is-active'} />
                </div>
            </div>
            <div className="row">
                <div className="col min-width-500 max-height-150">
                    <Table>
                        <THead>
                            <TR>
                                <TH scope={'col'}>First</TH>
                                <TH>Second</TH>
                            </TR>
                        </THead>
                        <TBody>
                            <TR>
                                <TD>123</TD>
                                <TD>321</TD>
                            </TR>
                            <TR>
                                <TD>123</TD>
                                <TD>321</TD>
                            </TR>
                            <TR>
                                <TD>123</TD>
                                <TD>321</TD>
                            </TR>
                            <TR>
                                <TD>123</TD>
                                <TD>321</TD>
                            </TR>
                            <TR>
                                <TD>123</TD>
                                <TD>321</TD>
                            </TR>
                            <TR>
                                <TD>123</TD>
                                <TD>321</TD>
                            </TR>
                            <TR>
                                <TD>123</TD>
                                <TD>321</TD>
                            </TR>
                        </TBody>
                    </Table>
                </div>
            </div>
        </>
    );
};
