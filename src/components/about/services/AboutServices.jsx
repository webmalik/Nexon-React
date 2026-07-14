import './style.scss';

import { aboutServicesData } from '../../../data/aboutData';

const AboutServices = ({ data = aboutServicesData }) => {
    return (
        <section className="about-services not-sticky">
            <div className="container">
                <div className="about-services__inner">
                    <div className="about-services__head">
                        <h2 className="about-services__title ttt">{data.title}</h2>

                        <p className="about-services__subtitle">{data.subtitle}</p>

                        <p className="about-services__text">{data.text}</p>
                    </div>

                    <div className="about-services__grid">
                        {data.groups.map((group) => (
                            <div className="about-services__card" key={group.id}>
                                {group.items.map((item) => (
                                    <p className="about-services__item" key={item}>
                                        {item}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>

                    <p className="about-services__bottom-text">{data.bottomText}</p>
                </div>
            </div>
        </section>
    );
};

export default AboutServices;
