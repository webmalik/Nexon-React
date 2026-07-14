import { useRef } from 'react';

import './style.scss';

import { aboutWorkflowData } from '../../../data/aboutData';

const AboutWorkflow = ({ data = aboutWorkflowData }) => {
    const stepsRef = useRef(null);

    const handleScroll = (direction) => {
        if (!stepsRef.current) return;

        const scrollValue = direction === 'next' ? 260 : -260;

        stepsRef.current.scrollBy({
            left: scrollValue,
            behavior: 'smooth',
        });
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

                    <div className="about-workflow__steps" ref={stepsRef}>
                        {data.steps.map((step) => (
                            <article className="about-workflow__step" key={step.id}>
                                <span className="about-workflow__step-number">{step.number}</span>

                                <h3
                                    className="about-workflow__step-title"
                                    dangerouslySetInnerHTML={{ __html: step.title }}
                                />
                            </article>
                        ))}
                    </div>

                    <div className="about-workflow__controls">
                        <button
                            className="about-workflow__arrow"
                            type="button"
                            aria-label="Zurück"
                            onClick={() => handleScroll('prev')}>
                            <svg
                                width="14"
                                height="10"
                                viewBox="0 0 14 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5 1L1 5M1 5L5 9M1 5H13"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        <button
                            className="about-workflow__arrow"
                            type="button"
                            aria-label="Weiter"
                            onClick={() => handleScroll('next')}>
                            <svg
                                width="14"
                                height="10"
                                viewBox="0 0 14 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 1L13 5M13 5L9 9M13 5H1"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
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
