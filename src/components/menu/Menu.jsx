import { useStateContext } from '../../StateContext';
import { useTranslation } from 'react-i18next';

import './style.scss';

import close from './close.svg';
import instagram from './instagram.svg';
import telegram from './telegram.svg';

const Menu = () => {
    const { isOpen, toggleMenu } = useStateContext();
    const { t } = useTranslation();
    return (
        <div className={`menu__body ${isOpen ? 'active' : ''}`}>
            <div className="menu__close" onClick={toggleMenu}>
                <img src={close} alt="" />
            </div>
            <div className="menu__nav">
                <ol>
                    <li>
                        <a href="">{t('menu-item-1')}</a>
                    </li>
                    <li>
                        <a href="">{t('menu-item-2')}</a>
                    </li>
                    <li>
                        <a href="">{t('menu-item-3')}</a>
                    </li>
                    <li>
                        <a href="">{t('menu-item-4')}</a>
                    </li>
                    <li>
                        <a href="">{t('menu-item-5')}</a>
                    </li>
                    <li>
                        <a href="">{t('menu-item-6')}</a>
                    </li>
                </ol>
            </div>
            <div className="menu__footer">
                <a href="#" className="menu__icon">
                    <img src={instagram} alt="" />
                </a>
                <a href="#" className="menu__icon">
                    <img src={telegram} alt="" />
                </a>
            </div>
        </div>
    );
};

export default Menu;
