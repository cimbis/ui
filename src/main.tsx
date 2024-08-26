/// <reference types="vite-plugin-svgr/client" />

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ComponentList } from './templates/ComponentList.tsx';

import { DeviceImageContext } from './context/DeviceImageContext.ts';

import './index.css';

const router = createBrowserRouter([
    {
        path: '/component-list',
        element: <ComponentList />,
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <DeviceImageContext.Provider value={null}>
            <RouterProvider router={router} />
        </DeviceImageContext.Provider>
    </StrictMode>,
);
