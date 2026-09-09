import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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

    const isHomePage = location.pathname === '/';

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

    const handlePageClick = (event, path) => {
        event.preventDefault();

        toggleMenu();

        setTimeout(() => {
            navigate(path);
        }, 600);
    };

    const handleSectionClick = (event, id) => {
        event.preventDefault();

        setTargetId(id);
        toggleMenu();

        if (!isHomePage) {
            setTimeout(() => {
                navigate(`/#${id}`);
            }, 600);
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

    const renderMenuLink = (item) => {
        if (item.type === 'page') {
            return (
                <Link
                    to={item.path}
                    onClick={(event) => {
                        handlePageClick(event, item.path);
                    }}>
                    {item.label}
                </Link>
            );
        }

        if (item.type === 'section') {
            const href = isHomePage ? `#${item.id}` : `/#${item.id}`;

            return (
                <a
                    href={href}
                    onMouseEnter={() => {
                        handleInstantScrollTo(item);
                    }}
                    onClick={(event) => {
                        handleSectionClick(event, item.id);
                    }}>
                    {item.label}
                </a>
            );
        }

        return null;
    };

    return (
        <div className={`menu__body ${isOpen ? 'active' : ''}`}>
            <button
                className="menu__close"
                type="button"
                aria-label="Menü schließen"
                onClick={toggleMenu}>
                <CloseIcon width="25" height="25" fill="currentColor" />
            </button>

            <nav className="menu__nav" aria-label="Hauptnavigation">
                <ol>
                    {navigationData.menuItems.map((item) => (
                        <li key={item.path || item.id}>{renderMenuLink(item)}</li>
                    ))}
                </ol>
            </nav>

            <div className="menu__footer">
                {navigationData.socials.map((social) => (
                    <a
                        className="menu__icon"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
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
