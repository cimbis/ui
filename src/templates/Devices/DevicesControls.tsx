import {Link, useLocation} from 'react-router-dom';

import {Searchbox} from '../../components/Search/Searchbox.tsx';
import {IconButton} from '../../components/Icon/IconButton.tsx';

import './DevicesControls.css';

export const DevicesControls = () => {
    const location = useLocation();

    return (
        <div
            className="ui devices-controls flex-row justify-space-between align-center gap-16 w-100">
            <div className="ui flex-row align-center align-self-start gap-16">
                <Searchbox className="ui nearly-responsive-searchbox"/>
                <div className="ui text-color-light text-size-sm">100 Devices</div>
            </div>

            <div className="ui flex-row align-self-end">
                <Link to={'/devices/list'}>
                    <IconButton
                        icon={'list'}
                        className={location.pathname.includes("list") ? 'is-active' : ""}/>
                </Link>
                <Link to={'/devices/grid'}>
                    <IconButton
                        icon={'grid'}
                        className={location.pathname.includes("grid") ? 'is-active' : ""}/>
                </Link>
            </div>
        </div>
    );
};
