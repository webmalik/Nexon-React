import './style.scss';

const Service = ({ title, description, value }) => {
    return (
        <div className="services__item">
            <div className="services__inner">
                <div className="services__title">{title}</div>
                <div className="services__decription">{description}</div>
            </div>
            <div className="services__inner">
                <div className="services__button-wrapper">
                    <button className="services__button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none">
                            <path
                                d="M0.868164 9.14384H17.3785M17.3785 9.14384L9.12334 0.888672M17.3785 9.14384L9.12334 17.399"
                                stroke="#151515"
                                stroke-width="1.83448"
                            />
                        </svg>
                        <span>Детальніше</span>
                    </button>
                </div>
                <div className="services__value">
                    <span>{value[0]}</span> / <span>{value[1]}</span>
                </div>
            </div>
        </div>
    );
};

export default Service;
