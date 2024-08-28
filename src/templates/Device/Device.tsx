import { useContext, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { DeviceContext } from '../../App.tsx';

import Placeholder from '../../assets/components/placeholder.png';

export const Device = () => {
    const location = useLocation();
    const deviceContext = useContext(DeviceContext);

    const id = useMemo(() => {
        const paths = location.pathname.split('/');
        return Number(paths[paths.length - 1]);
    }, [location]);

    const previousLinkId = useMemo(() => {
        return id - 1 >= 0 ? id - 1 : id;
    }, [id]);

    const nextLinkId = useMemo(() => {
        return id + 1 <= deviceContext ? id + 1 : id;
    }, [id, deviceContext]);

    return (
        <div className="ui device">
            <div className="ui device-nav-actions">
                <button>back</button>
                <Link to={`/device/${previousLinkId}`}>
                    <button>previous device</button>
                </Link>
                <Link to={`/device/${nextLinkId}`}>
                    <button> next device</button>
                </Link>
            </div>
            <div className="ui device-info">
                <div className="ui device-image">
                    <img src={Placeholder} alt="it's a device" />
                </div>
                <div className="ui device-data">{id}</div>
            </div>
        </div>
    );
};
