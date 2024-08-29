import { Link } from 'react-router-dom';

import './DeviceNav.css';
import { HTMLAttributes } from 'react';

export type DeviceNavProps = {
    devicesView: string;
    previousLinkId: number;
    nextLinkId: number;
} & HTMLAttributes<HTMLDivElement>;
export const DeviceNav = ({ devicesView, previousLinkId, nextLinkId }: DeviceNavProps) => {
    return (
        <div className="ui device-nav-actions">
            <Link to={`/devices/${devicesView}`}>
                <button className="ui device-nav-button">Back</button>
            </Link>
            <div className="ui device-selection">
                <Link to={`/device/${previousLinkId}`}>
                    <button className="ui device-nav-button">P</button>
                </Link>
                <Link to={`/device/${nextLinkId}`}>
                    <button className="ui device-nav-button">N</button>
                </Link>
            </div>
        </div>
    );
};
