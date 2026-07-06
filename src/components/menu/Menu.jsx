import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useStateContext } from '../../StateContext';
import { navigationData } from '../../data/navigation';

import './style.scss';

import instagram from './instagram.svg';
import telegram from './telegram.svg';

import { ReactComponent as CloseIcon } from './close.svg';

const socialIcons = {
    instagram,
    telegram,
};

const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
        behavior: 'smooth',
    });
};

const Menu = () => {
    const { isOpen, toggleMenu } = useStateContext();
    const location = useLocation();
    const navigate = useNavigate();

    const [targetId, setTargetId] = useState('');

    const pathname = location.pathname.replace(/\/$/, '');
    const isHomePage = pathname === '';

    useEffect(() => {
        if (isOpen || !targetId || !isHomePage) return;

        document.body.style.overflow = 'visible';

        const timeoutId = setTimeout(() => {
            scrollToSection(targetId);
            setTargetId('');
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isOpen, targetId, isHomePage]);

    const handlePageClick = (path) => {
        toggleMenu();

        setTimeout(() => {
            navigate(path);
        }, 600);
    };

    const handleSectionClick = (id) => {
        setTargetId(id);
        toggleMenu();

        if (!isHomePage) {
            setTimeout(() => {
                navigate(`/#${id}`);
            }, 600);
        }
    };

    const handleMenuClick = (item) => {
        if (item.type === 'page') {
            handlePageClick(item.path);
            return;
        }

        if (item.type === 'section') {
            handleSectionClick(item.id);
        }
    };

    const handleInstantScrollTo = (item) => {
        if (item.type !== 'section' || !isHomePage) return;

        const element = document.getElementById(item.id);

        if (!element) return;

        const elementTop = element.offsetTop;

        document.documentElement.scrollTop = elementTop;
        document.body.scrollTop = elementTop;
    };

    return (
        <div className={`menu__body ${isOpen ? 'active' : ''}`}>
            <div className="menu__close" onClick={toggleMenu}>
                <CloseIcon width="25" height="25" fill="currentColor" />
            </div>

            <div className="menu__nav">
                <ol>
                    {navigationData.menuItems.map((item) => (
                        <li key={item.path || item.id}>
                            <button
                                type="button"
                                onMouseEnter={() => handleInstantScrollTo(item)}
                                onClick={() => handleMenuClick(item)}>
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ol>
            </div>

            <div className="menu__footer">
                {navigationData.socials.map((social) => (
                    <a
                        className="menu__icon"
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={social.label}
                        key={social.id}>
                        <img src={socialIcons[social.icon]} alt="" />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Menu;
