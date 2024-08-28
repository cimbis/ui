import { Logo } from '../../components/Logo/Logo.tsx';

import './Header.css';

export const Header = () => {
    return (
        <header className="ui page-header flex-row justify-space-between align-center">
            <div className="ui flex-row align-center align-self-start gap-16">
                <Logo to={'/'} />
                <span className="ui text-color-quiet">Devices</span>
            </div>
            <span className="ui text-color-quiet">Jānis Cimbulis</span>
        </header>
    );
};
