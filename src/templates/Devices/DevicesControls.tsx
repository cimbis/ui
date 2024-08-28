import { Link } from 'react-router-dom';

import { Searchbox } from '../../components/Search/Searchbox.tsx';
import { IconButton } from '../../components/Icon/IconButton.tsx';

import './DevicesControls.css';

export const DevicesControls = () => {
    return (
        <div className="ui devices-controls flex-row justify-space-between align-center gap-16 w-100">
            <div className="ui flex-row align-center align-self-start gap-16">
                <Searchbox className="ui nearly-responsive-searchbox" />
                <div className="ui text-color-light text-size-sm">100 Devices</div>
            </div>

            <div className="ui flex-row align-self-end">
                <Link to={'/devices/list'}>
                    <IconButton icon={'list'} />
                </Link>
                <Link to={'/devices/grid'}>
                    <IconButton icon={'grid'} />
                </Link>
            </div>
        </div>
    );
};
