import { useCallback, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { DevicesViewContextProvider } from './Context/DevicesViewContext.tsx';

import { Header } from './templates/Header/Header.tsx';

export const App = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const shouldRedirect = useCallback((locationPath: string) => {
        if (locationPath.includes('list') || locationPath.includes('grid')) {
            return false;
        } else if (locationPath.split('/')[1] === 'device') {
            return false;
        }
        return true;
    }, []);

    useEffect(() => {
        if (shouldRedirect(location.pathname)) {
            navigate('/devices/list');
        }
    }, [location.pathname, navigate, shouldRedirect]);

    return (
        <>
            <Header />
            <DevicesViewContextProvider>
                <main className="ui main">
                    <Outlet />
                </main>
            </DevicesViewContextProvider>
        </>
    );
};
