import React, { useState } from 'react';
import { useStateContext } from '../../StateContext';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import './style.scss';

import menu from './menu.svg';

const Header = () => {
    const { t } = useTranslation();
    const { isOpen, toggleMenu } = useStateContext();

    const changeLanguage = (lng) => {
        i18next.changeLanguage(lng);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header__menu">
                    <span className="header__menu-button" onClick={toggleMenu}>
                        <img src={menu} alt="" />
                        <span>{t('menu')}</span>
                    </span>
                    <div className="header__menu-wrapper">
                        <div className="header__lang">
                            <span onClick={() => changeLanguage('ua')}>Ua</span>
                            <span onClick={() => changeLanguage('en')}>En</span>
                        </div>
                        <div className="header__button">{t('button')}</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
