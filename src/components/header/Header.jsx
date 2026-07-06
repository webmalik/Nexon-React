import React from 'react';

import { useStateContext } from '../../StateContext';
import useScrollTo from '../useScrollTo/useScrollTo';

import { siteData } from '../../data/siteData';

import './style.scss';

import { ReactComponent as MenuIcon } from './menu.svg';

const Header = () => {
    const { toggleMenu } = useStateContext();
    const { handleScrollToMain } = useScrollTo();

    return (
        <header className="header not-sticky">
            <div className="container">
                <div className="header__menu">
                    <button className="header__menu-button" type="button" onClick={toggleMenu}>
                        <MenuIcon width="36" height="18" fill="currentColor" />
                        <span>{siteData.header.menuLabel}</span>
                    </button>
                    <div className="header__menu-wrapper">
                        <button
                            className="header__button"
                            type="button"
                            onClick={() => handleScrollToMain('contacts')}>
                            {siteData.header.buttonLabel}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
