import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './style.scss';

const Header = () => {
    const { t } = useTranslation();
    const { pathname } = useLocation();

    const getHomePath = () => {
        if (pathname.startsWith('/ua')) return '/ua/';
        if (pathname.startsWith('/ru')) return '/ru/';

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

                        <span>{t('back')}</span>
                    </Link>

                    <div className="header__menu-wrapper">
                        <Link className="header__button" to={`${homePath}#contacts`}>
                            {t('button')}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
