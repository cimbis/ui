import { Logo } from '../components/logo/Logo.tsx';
import {IconButton} from "../components/Icon/IconButton.tsx";

import './ComponentList.css';

export const ComponentList = () => {
    return (
        <div className="row">
            <div className="col">
                <Logo to={'#'} />
                <Logo to={'#'} className={'is-hovered'} />
                <Logo to={'#'} className={'is-focused'} />
            </div>
            <div className="col">
                <IconButton icon={"search"} />
                <IconButton icon={"list"} className={'is-hovered'}/>
                <IconButton icon={"grid"} className={'is-focused'}/>
                <IconButton icon={"search"} className={'is-active'}/>
            </div>
        </div>
    );
};
