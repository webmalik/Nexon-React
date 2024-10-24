import { useStateContext } from '../../StateContext';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

import './style.scss';

import instagram from './instagram.svg';
import telegram from './telegram.svg';

import { ReactComponent as CloseIcon } from './close.svg';

const Menu = () => {
    const { isOpen, toggleMenu } = useStateContext();
    const { t } = useTranslation();
    const [targetId, setTargetId] = useState('');

    useEffect(() => {
        if (!isOpen && targetId) {
            document.body.style.overflow = 'visible';
            const element = document.getElementById(targetId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 500);
            }
            setTargetId('');
        }
    }, [isOpen, targetId]);

    const handleScrollTo = (id) => {
        setTargetId(id);

        toggleMenu();
    };

    const handleInstantScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const elementTop = element.offsetTop;

            document.documentElement.scrollTop = elementTop;
            document.body.scrollTop = elementTop;
        }
    };

    return (
        <div className={`menu__body ${isOpen ? 'active' : ''}`}>
            <div className="menu__close" onClick={toggleMenu}>
                <CloseIcon width="25" height="25" fill="currentColor" />
            </div>
            <div className="menu__nav">
                <ol>
                    <li>
                        <button
                            // onMouseEnter={() => handleInstantScrollTo('info')}
                            onClick={() => handleScrollTo('info')}>
                            {t('menu-item-1')}
                        </button>
                    </li>
                    <li>
                        <button
                            onMouseEnter={() => handleInstantScrollTo('portfolio')}
                            onClick={() => handleScrollTo('portfolio')}>
                            {t('menu-item-2')}
                        </button>
                    </li>
                    <li>
                        <button
                            onMouseEnter={() => handleInstantScrollTo('services')}
                            onClick={() => handleScrollTo('services')}>
                            {t('menu-item-3')}
                        </button>
                    </li>
                    <li>
                        <button
                            onMouseEnter={() => handleInstantScrollTo('mail')}
                            onClick={() => handleScrollTo('mail')}>
                            {t('menu-item-4')}
                        </button>
                    </li>
                    <li>
                        <button
                            onMouseEnter={() => handleInstantScrollTo('reviews')}
                            onClick={() => handleScrollTo('reviews')}>
                            {t('menu-item-5')}
                        </button>
                    </li>
                    <li>
                        <button
                            onMouseEnter={() => handleInstantScrollTo('faq')}
                            onClick={() => handleScrollTo('faq')}>
                            {t('menu-item-6')}
                        </button>
                    </li>
                    <li>
                        <button
                            onMouseEnter={() => handleInstantScrollTo('contacts')}
                            onClick={() => handleScrollTo('contacts')}>
                            {t('menu-item-7')}
                        </button>
                    </li>
                </ol>
            </div>
            <div className="menu__footer">
                <button className="menu__icon">
                    <img src={instagram} alt="" />
                </button>
                <button className="menu__icon">
                    <img src={telegram} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Menu;
