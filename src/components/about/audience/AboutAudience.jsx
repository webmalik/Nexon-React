import './style.scss';

import { aboutAudienceData } from '../../../data/aboutData';

const AboutAudience = ({ data = aboutAudienceData }) => {
    return (
        <section className="about-audience not-sticky">
            <div className="container">
                <div className="about-audience__inner">
                    <h2 className="about-audience__title ttt">{data.title}</h2>

                    <div className="about-audience__items">
                        {data.items.map((item) => (
                            <article className="about-audience__item" key={item.id}>
                                <h3 className="about-audience__item-title">{item.title}</h3>

                                <p className="about-audience__item-text">{item.text}</p>
                            </article>
                        ))}
                    </div>

                    <p className="about-audience__text">{data.text}</p>
                </div>
            </div>
        </section>
    );
};

export default AboutAudience;
