import {createContext, useCallback, useEffect} from 'react';
import {Outlet, useLocation, useNavigate} from 'react-router-dom';

import {Header} from './templates/Header/Header.tsx';

export const DeviceContext = createContext(100);

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
            <Header/>
            <main className="ui main">
                <Outlet/>
            </main>
        </>
    );
};
