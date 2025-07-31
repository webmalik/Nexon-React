import { useTranslation } from 'react-i18next';
import useScrollTo from '../useScrollTo/useScrollTo';

import './style.scss';

const Info = () => {
    const { t } = useTranslation();
    const { handleScrollToMain } = useScrollTo();
    return (
        <section className="info not-sticky" id="info">
            <div className="container">
                <div className="info__grid">
                    <div className="info__item">
                        <h2 className="info__header ttt">{t('info-header')}</h2>
                    </div>
                    <div className="info__item">
                        <h3 className="info__title ttt">
                            {t('info-info__title-1')}
                            <span>{t('info-info__title-1-1')}</span>
                        </h3>
                        <p className="info__text ttt"> {t('info-info__text-1')}</p>
                    </div>
                    <div className="info__item">
                        <h3 className="info__title ttt"> {t('info-info__title-2')}</h3>
                        <p className="info__text ttt">{t('info-info__text-2')}</p>
                    </div>
                    <div className="info__item">
                        <h3 className="info__title ttt">{t('info-info__title-3')}</h3>
                        <p className="info__text ttt">{t('info-info__text-3')}</p>
                    </div>
                    <div className="info__item">
                        <h3 className="info__title ttt">{t('info-info__title-4')}</h3>
                        <p className="info__text ttt">{t('info-info__text-4')}</p>
                    </div>
                    <div className="info__item">
                        <button
                            className="info__button"
                            onClick={() => handleScrollToMain('contacts')}>
                            {t('button')}
                        </button>
                    </div>
                    <div className="info__item">
                        <h3 className="info__title ttt">{t('info-info__title-5')}</h3>
                        <p className="info__text ttt">{t('info-info__text-5')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;
