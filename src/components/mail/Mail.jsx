import { useTranslation } from 'react-i18next';

import './style.scss';
import mailButtonIMG from './mail-button.png';
import mailArrowIMG from './mail-arrow.png';

const Mail = () => {
    const { t } = useTranslation();
    return (
        <section className="mail">
            <div className="container">
                <div className="mail__wrapper">
                    <div className="mail__title">
                        {t('mail-title-1')}
                        <br />
                        <span>{t('mail-title-2')}</span>
                    </div>
                    <div className="mail__form">
                        <img src={mailArrowIMG} alt="" />
                        <div className="mail__input-wrapper">
                            <input type="mail" placeholder="username@gmail.com" />
                            <button>
                                Відправити
                                <span>
                                    {/* <img src={mailButtonIMG} alt="" /> */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none">
                                        <path
                                            d="M2 14L14 2M14 2L14 14M14 2L2 2"
                                            stroke="white"
                                            stroke-width="3"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mail;
