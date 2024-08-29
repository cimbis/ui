import { useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { DeviceNav } from './DeviceNav.tsx';
import { DeviceData } from './DeviceData.tsx';

import Placeholder from '../../assets/components/placeholder.png';

// import CaretLeft from '../../assets/icons/caret-left.svg?react';
// import CaretRight from '../../assets/icons/caret-right.svg?react';
import './Device.css';
import { DeviceContext } from '../../Context/DeviceContext.tsx';
import { DevicesViewContext } from '../../Context/DevicesViewContext.tsx';

export const Device = () => {
    const location = useLocation();
    const deviceContext = useContext(DeviceContext);

    const { devicesView } = useContext(DevicesViewContext);

    const id = useMemo(() => {
        const paths = location.pathname.split('/');
        return Number(paths[paths.length - 1]);
    }, [location]);

    const previousLinkId = useMemo(() => {
        return id - 1 >= 0 ? id - 1 : id;
    }, [id]);

    const nextLinkId = useMemo(() => {
        return id + 1 <= deviceContext - 1 ? id + 1 : id;
    }, [id, deviceContext]);

    return (
        <div className="ui device">
            <DeviceNav
                devicesView={devicesView}
                previousLinkId={previousLinkId}
                nextLinkId={nextLinkId}
            />
            <div className="ui device-info">
                <div className="ui device-image">
                    <img src={Placeholder} alt="it's a device" />
                </div>
                <DeviceData id={id} />
            </div>
        </div>
    );
};
