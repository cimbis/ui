import { Logo } from '../components/logo/Logo.tsx';

import './ComponentList.css';

export const ComponentList = () => {
    return (
        <div className="row">
            <div className="col">
                <Logo to={'#'} />
                <Logo to={'#'} className={'is-hovered'} />
                <Logo to={'#'} className={'is-focused'} />
            </div>
        </div>
    );
};
