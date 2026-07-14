import './style.scss';

import { aboutFounderData } from '../../../data/aboutData';

const AboutFounder = ({ data = aboutFounderData }) => {
    return (
        <section className="about-founder not-sticky">
            <div className="container">
                <h2 className="about-founder__title ttt">{data.title}</h2>

                <div className="about-founder__wrapper">
                    <div className="about-founder__person">
                        <div className="about-founder__image">
                            <img src={data.person.image} alt={data.person.imageAlt} />
                        </div>

                        <div className="about-founder__person-content">
                            <h3 className="about-founder__name">{data.person.name}</h3>
                            <p className="about-founder__role">{data.person.role}</p>
                            <p className="about-founder__text">{data.person.text}</p>
                        </div>
                    </div>

                    <div className="about-founder__items">
                        {data.items.map((item) => (
                            <article className="about-founder__item" key={item.id}>
                                <span className="about-founder__number">{item.number}</span>

                                <p className="about-founder__item-text">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutFounder;
