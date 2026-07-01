import { useStateContext } from '../../StateContext';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getHomePath, isHomePath } from '../../helpers/routes';

import './style.scss';

import instagram from './instagram.svg';
import telegram from './telegram.svg';

import { ReactComponent as CloseIcon } from './close.svg';

const Menu = () => {
    const { isOpen, toggleMenu } = useStateContext();
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const [targetId, setTargetId] = useState('');

    const getHomePath = () => {
        const pathname = window.location.pathname;

        if (pathname.startsWith('/ua')) return '/ua/';
        if (pathname.startsWith('/ru')) return '/ru/';

        return '/';
    };

    const isHomePage = () => {
        const pathname = window.location.pathname.replace(/\/$/, '');

        return pathname === '' || pathname === '/' || pathname === '/ua' || pathname === '/ru';
    };

    useEffect(() => {
        if (!isOpen && targetId && isHomePage) {
            document.body.style.overflow = 'visible';

            const element = document.getElementById(targetId);

            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 500);
            }

            setTargetId('');
        }
    }, [isOpen, targetId, isHomePage]);

    const handleScrollTo = (id) => {
        if (isHomePage()) {
            setTargetId(id);
            toggleMenu();
            return;
        }

        toggleMenu();

        setTimeout(() => {
            navigate(`${getHomePath()}#${id}`);
        }, 600);
    };

    const handleInstantScrollTo = (id) => {
        if (!isHomePage) return;

        const element = document.getElementById(id);

        if (element) {
            const elementTop = element.offsetTop;

            document.documentElement.scrollTop = elementTop;
            document.body.scrollTop = elementTop;
        }
    };

    const menuItems = [
        {
            id: 'info',
            label: t('menu-item-1'),
        },
        {
            id: 'portfolio',
            label: t('menu-item-2'),
        },
        {
            id: 'services',
            label: t('menu-item-3'),
        },
        {
            id: 'mail',
            label: t('menu-item-4'),
        },
        {
            id: 'process',
            label: t('menu-item-5'),
        },
        {
            id: 'faq',
            label: t('menu-item-6'),
        },
        {
            id: 'contacts',
            label: t('menu-item-7'),
        },
    ];

    return (
        <div className={`menu__body ${isOpen ? 'active' : ''}`}>
            <div className="menu__close" onClick={toggleMenu}>
                <CloseIcon width="25" height="25" fill="currentColor" />
            </div>

            <div className="menu__nav">
                <ol>
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onMouseEnter={() => handleInstantScrollTo(item.id)}
                                onClick={() => handleScrollTo(item.id)}>
                                {item.label}
                            </button>
                        </li>
                    ))}
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
