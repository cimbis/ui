import { createContext, ReactNode, useCallback, useState } from 'react';

export const DevicesViewContext = createContext({
    devicesView: 'list',
    setListView: () => {},
    setGridView: () => {},
});
export const DevicesViewContextProvider = ({ children }: { children: ReactNode }) => {
    const [devicesView, setDevicesView] = useState('list');

    const setListView = useCallback(() => {
        setDevicesView('list');
    }, [setDevicesView]);

    const setGridView = useCallback(() => {
        setDevicesView('grid');
    }, [setDevicesView]);

    const value = {
        devicesView,
        setListView,
        setGridView,
    };

    return <DevicesViewContext.Provider value={value}>{children}</DevicesViewContext.Provider>;
};
