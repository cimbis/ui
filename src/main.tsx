import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ComponentList } from './templates/ComponentList.tsx';
import { App } from './App.tsx';
import { Devices } from './templates/Devices/Devices.tsx';
import { DevicesList } from './templates/Devices/DevicesList.tsx';
import { DevicesGrid } from './templates/Devices/DevicesGrid.tsx';
import { Device } from './templates/Device/Device.tsx';

import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'devices',
                element: <Devices />,
                children: [
                    {
                        path: 'list',
                        element: <DevicesList />,
                    },
                    {
                        path: 'grid',
                        element: <DevicesGrid />,
                    },
                ],
            },
            {
                path: '/device/:id',
                element: <Device />,
            },
        ],
    },
    {
        path: '/component-list',
        element: <ComponentList />,
    },
    {
        path: '*',
        element: <App />,
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
