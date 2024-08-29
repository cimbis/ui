import './DeviceData.css';

export const DeviceData = ({ id }: { id: number }) => {
    return (
        <div className="ui device-data">
            <div className="ui device-data-main">
                <div className="ui device-title">It's a device</div>
                <div className="ui device-feature">UI</div>
            </div>
            <div className="ui device-data-specs">
                <div className="ui device-data-spec">
                    <div>Product Line</div>
                    <div className="ui text-color-quiet">UI</div>
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
    );
};
