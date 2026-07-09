import useScrollTo from '../../useScrollTo/useScrollTo';

import './style.scss';

import { defaultData } from '../../../data/homeData';

const Info = () => {
    const { handleScrollToMain } = useScrollTo();

    const { info, buttons } = defaultData;
    const infoItems = info.items;

    return (
        <section className="info not-sticky" id="info">
            <div className="container">
                <div className="info__grid">
                    <div className="info__item">
                        <h2 className="info__header ttt">{info.title}</h2>
                    </div>

                    {infoItems.slice(0, 4).map((item) => (
                        <div className="info__item" key={item.id}>
                            <h3 className="info__title ttt">
                                {item.value}
                                {item.suffix && <span>{item.suffix}</span>}
                            </h3>
                            <p className="info__text ttt">{item.text}</p>
                        </div>
                    ))}

                    <div className="info__item">
                        <button
                            className="info__button"
                            type="button"
                            onClick={() => handleScrollToMain('contacts')}>
                            {buttons.request}
                        </button>
                    </div>

                    {infoItems.slice(4).map((item) => (
                        <div className="info__item" key={item.id}>
                            <h3 className="info__title ttt">
                                {item.value}
                                {item.suffix && <span>{item.suffix}</span>}
                            </h3>
                            <p className="info__text ttt">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Info;
