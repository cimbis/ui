import { useContext, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { DeviceContext } from '../../Context/DeviceContext.tsx';
import { DevicesViewContext } from '../../Context/DevicesViewContext.tsx';

// it just blew up 🤷‍♂️
// import CaretLeft from '../../assets/icons/caret-left.svg?react';
// import CaretRight from '../../assets/icons/caret-right.svg?react';
import Placeholder from '../../assets/components/placeholder.png';

import './Device.css';

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
        return id + 1 <= deviceContext ? id + 1 : id;
    }, [id, deviceContext]);

    return (
        <div className="ui device">
            <div className="ui device-nav-actions">
                <Link to={`/devices/${devicesView}`}>
                    <button className="ui device-nav-button">Back</button>
                </Link>
                <div className="ui device-nav">
                    <Link to={`/device/${previousLinkId}`}>
                        <button className="ui device-nav-button">P</button>
                    </Link>
                    <Link to={`/device/${nextLinkId}`}>
                        <button className="ui device-nav-button">N</button>
                    </Link>
                </div>
            </div>
            <div className="ui device-info">
                <div className="ui device-image">
                    <img src={Placeholder} alt="it's a device" />
                </div>
                <div className="ui device-data">
                    <div className="ui device-data-main">
                        <div className="ui device-title">It's a device</div>
                        <div className="ui device-feature">UI</div>
                    </div>
                    <div className="ui device-data-specs">
                        <div className="ui device-data-spec">
                            <div>Product Line</div>
                            <div>UI</div>
                        </div>
                        <div className="ui device-data-spec">
                            <div>ID</div>
                            <div className="ui text-color-quiet">{id}</div>
                        </div>
                        <div className="ui device-data-spec">
                            <div>Name</div>
                            <div className="ui text-color-quiet">Point 6 In-Wall</div>
                        </div>
                        <div className="ui device-data-spec">
                            <div>Short Name</div>
                            <div className="ui text-color-quiet">U6</div>
                        </div>
                        <div className="ui device-data-spec">
                            <div>Max. Power</div>
                            <div className="ui text-color-quiet">25 W</div>
                        </div>
                        <div className="ui device-data-spec">
                            <div>Speed</div>
                            <div className="ui text-color-quiet">2400 Kmh</div>
                        </div>
                        <div className="ui device-data-spec">
                            <div>Number of exhausts</div>
                            <div className="ui text-color-quiet">6</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
