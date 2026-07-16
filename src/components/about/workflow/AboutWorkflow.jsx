import { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './style.scss';

import { aboutWorkflowData } from '../../../data/aboutData';

const AboutWorkflow = ({ data = aboutWorkflowData }) => {
    const swiperRef = useRef(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const updateNavigationState = (swiper) => {
        if (!swiper) return;

        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const handlePrev = () => {
        swiperRef.current?.slidePrev();
    };

    const handleNext = () => {
        swiperRef.current?.slideNext();
    };

    return (
        <section className="about-workflow not-sticky">
            <div className="container">
                <div className="about-workflow__inner">
                    <div className="about-workflow__head">
                        <h2 className="about-workflow__title ttt">{data.title}</h2>

                        <p className="about-workflow__subtitle">{data.subtitle}</p>
                    </div>

                    <div className="about-workflow__notes">
                        {data.notes.map((note) => (
                            <div className="about-workflow__note" key={note.id}>
                                {note.text}
                            </div>
                        ))}
                    </div>

                    <Swiper
                        className="about-workflow__slider"
                        slidesPerView="auto"
                        spaceBetween={30}
                        speed={700}
                        grabCursor
                        watchOverflow
                        observer
                        observeParents
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            updateNavigationState(swiper);
                        }}
                        onSlideChange={updateNavigationState}
                        onResize={updateNavigationState}
                        onReachBeginning={updateNavigationState}
                        onReachEnd={updateNavigationState}
                        onFromEdge={updateNavigationState}>
                        {data.steps.map((step) => (
                            <SwiperSlide className="about-workflow__slide" key={step.id}>
                                <article className="about-workflow__step">
                                    <span className="about-workflow__step-number">
                                        {step.number}
                                    </span>

                                    <h3
                                        className="about-workflow__step-title"
                                        dangerouslySetInnerHTML={{
                                            __html: step.title,
                                        }}
                                    />
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="about-workflow__controls">
                        <button
                            className="about-workflow__arrow"
                            type="button"
                            aria-label="Zurück"
                            disabled={isBeginning}
                            onClick={handlePrev}>
                            <svg
                                width="18"
                                height="15"
                                viewBox="0 0 18 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.292892 6.65617C-0.0976315 7.0467 -0.0976315 7.67986 0.292892 8.07039L6.65685 14.4343C7.04738 14.8249 7.68054 14.8249 8.07107 14.4343C8.46159 14.0438 8.46159 13.4107 8.07107 13.0201L2.41421 7.36328L8.07107 1.70643C8.46159 1.3159 8.46159 0.682738 8.07107 0.292213C7.68054 -0.0983109 7.04738 -0.0983109 6.65685 0.292213L0.292892 6.65617ZM18 7.36328V6.36328L1 6.36328V7.36328V8.36328L18 8.36328V7.36328Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>

                        <button
                            className="about-workflow__arrow"
                            type="button"
                            aria-label="Weiter"
                            disabled={isEnd}
                            onClick={handleNext}>
                            <svg
                                width="18"
                                height="15"
                                viewBox="0 0 18 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.7071 6.65617C18.0976 7.0467 18.0976 7.67986 17.7071 8.07039L11.3431 14.4343C10.9526 14.8249 10.3195 14.8249 9.92893 14.4343C9.53841 14.0438 9.53841 13.4107 9.92893 13.0201L15.5858 7.36328L9.92893 1.70643C9.53841 1.3159 9.53841 0.682738 9.92893 0.292213C10.3195 -0.0983109 10.9526 -0.0983109 11.3431 0.292213L17.7071 6.65617ZM0 7.36328L0 6.36328L17 6.36328V7.36328V8.36328L0 8.36328L0 7.36328Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutWorkflow;
