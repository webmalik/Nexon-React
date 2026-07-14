import './style.scss';

import { defaultData, processList, processBenefitsList } from '../../../data/homeData';

const Process = () => {
    const { process } = defaultData;

    return (
        <section className="process" id="process">
            <div className="container process__inner">
                <div className="process__body">
                    <div className="process__content">
                        <div className="process__label">{process.label}</div>

                        <h2 className="process__header ttt">{process.title}</h2>

                        <p className="process__text">{process.text}</p>

                        <a href="#contacts" className="process__button">
                            <span className="process__button-icon">
                                <svg
                                    width="31"
                                    height="23"
                                    viewBox="0 0 31 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M30.0607 12.1066C30.6464 11.5208 30.6464 10.571 30.0607 9.98524L20.5147 0.439297C19.9289 -0.14649 18.9792 -0.14649 18.3934 0.439297C17.8076 1.02508 17.8076 1.97483 18.3934 2.56062L26.8787 11.0459L18.3934 19.5312C17.8076 20.117 17.8076 21.0667 18.3934 21.6525C18.9792 22.2383 19.9289 22.2383 20.5147 21.6525L30.0607 12.1066ZM0 11.0459L0 12.5459H29V11.0459V9.5459H0L0 11.0459Z"
                                        fill="white"
                                    />
                                </svg>
                            </span>

                            <span className="process__button-content">
                                <span>{process.buttonTitle}</span>
                                <small>{process.buttonText}</small>
                            </span>
                        </a>
                    </div>

                    <div className="process__wrapper">
                        {processList.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    className={`process__item ${
                                        item.active ? 'process__item--active' : ''
                                    }`}
                                    key={item.id}>
                                    <div className="process__item-aside">
                                        <div className="process__item-icon">
                                            <Icon />
                                        </div>

                                        <div className="process__item-number">{item.number}</div>
                                    </div>

                                    <div className="process__item-content">
                                        <h3 className="process__item-title">{item.title}</h3>

                                        <p className="process__item-text">{item.description}</p>
                                    </div>

                                    <span className="process__item-arrow">
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.03418 20.9562L20.5284 1.46191M1.03418 1.46191L20.5284 1.46191L20.5284 20.9562"
                                                stroke="#D2D2D2"
                                                strokeWidth="2.92414"
                                            />
                                        </svg>
                                    </span>
                                </article>
                            );
                        })}
                    </div>
                </div>

                <div className="process__benefits">
                    {processBenefitsList.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div className="process__benefit" key={item.id}>
                                <div className="process__benefit-icon">
                                    <Icon />
                                </div>

                                <div className="process__benefit-content">
                                    <h3 className="process__benefit-title">{item.title}</h3>

                                    <p className="process__benefit-text">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Process;
