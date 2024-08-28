import { Outlet } from 'react-router-dom';
import { DevicesControls } from './DevicesControls.tsx';

import './Devices.css';

export const Devices = () => {
    return (
        <div className={'ui w-100'}>
            <DevicesControls />
            <div className="ui devices-container">
                <Outlet />
            </div>
        </div>
    );
};
