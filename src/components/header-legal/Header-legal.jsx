import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './style.scss';

import { siteData } from '../../data/siteData';

const Header = () => {
    const { pathname } = useLocation();

    const getHomePath = () => {
        return '/';
    };

    const homePath = getHomePath();

    return (
        <header className="header header-legal not-sticky">
            <div className="container">
                <div className="header__menu">
                    <Link className="header__menu-button" to={homePath}>
                        <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.5 1.06055L1.5 21.0605M21.5 21.0605L1.5 21.0605L1.5 1.06055"
                                stroke="white"
                                strokeWidth="3"
                            />
                        </svg>

                        <span>{siteData.header.backLabel}</span>
                    </Link>

                    <div className="header__menu-wrapper">
                        <Link className="header__button" to={`${homePath}#contacts`}>
                            {siteData.header.buttonLabel}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
