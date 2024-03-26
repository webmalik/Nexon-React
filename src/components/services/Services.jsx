import { useTranslation } from 'react-i18next';

import './style.scss';
import headerVector from './header.png';
import Service from '../service/Service';

import { servicesList } from './../../data/servicesList';

const Services = () => {
    const { t, i18n } = useTranslation();
    const currentLanguageKey = i18n.language;

    return (
        <section className="services">
            <div className="container">
                <div className="services__header">
                    {t('services')}
                    <img src={headerVector} alt="" />
                </div>
                <div className="services__wrapper">
                    {servicesList.map((service) => {
                        return (
                            <Service
                                key={service.id}
                                title={service.title[currentLanguageKey]}
                                description={service.description[currentLanguageKey]}
                                value={service.value[currentLanguageKey]}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
