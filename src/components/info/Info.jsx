import { useTranslation } from 'react-i18next';

import './style.scss';

const Info = () => {
    const { t } = useTranslation();
    return (
        <section className="info not-sticky" id="info">
            <div className="container">
                <div className="info__grid">
                    <div className="info__item">
                        <div className="info__header">{t('info-header')}</div>
                    </div>
                    <div className="info__item">
                        <div className="info__title">
                            {t('info-info__title-1')}
                            <span>{t('info-info__title-1-1')}</span>
                        </div>
                        <div className="info__text"> {t('info-info__text-1')}</div>
                    </div>
                    <div className="info__item">
                        <div className="info__title"> {t('info-info__title-2')}</div>
                        <div className="info__text">{t('info-info__text-2')}</div>
                    </div>
                    <div className="info__item">
                        <div className="info__title">{t('info-info__title-3')}</div>
                        <div className="info__text">{t('info-info__text-3')}</div>
                    </div>
                    <div className="info__item">
                        <div className="info__title">{t('info-info__title-4')}</div>
                        <div className="info__text">{t('info-info__text-4')}</div>
                    </div>
                    <div className="info__item">
                        <button className="info__button">{t('button')}</button>
                    </div>
                    <div className="info__item">
                        <div className="info__title">{t('info-info__title-5')}</div>
                        <div className="info__text">{t('info-info__text-5')}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;
