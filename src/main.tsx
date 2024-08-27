/// <reference types="vite-plugin-svgr/client" />

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ComponentList } from './templates/ComponentList.tsx';

import './index.css';

const router = createBrowserRouter([
    {
        path: '/component-list',
        element: <ComponentList />,
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
