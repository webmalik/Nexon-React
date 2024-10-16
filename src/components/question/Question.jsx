import React, { useState, useEffect } from 'react';
import './style.scss';

const Question = ({ isOpen, toggleAccordion, id, title, content }) => {
    const [contentHeight, setContentHeight] = useState(0);
    const faqRef = React.createRef();
    useEffect(() => {
        if (isOpen) {
            setContentHeight(faqRef.current.scrollHeight);
        } else {
            setContentHeight(0);
        }
    }, [isOpen, faqRef]);

    return (
        <div className={`question ${isOpen ? 'active' : ''}`} onClick={toggleAccordion}>
            <div className="question__number">{id < 9 ? '0' + id : id}</div>
            <div className="question__wrapper">
                <div className="question__header">
                    <div className="question__title">{title}</div>
                </div>
                <div
                    className="question__content"
                    style={{ maxHeight: isOpen ? contentHeight + 'px' : '0' }}
                    ref={faqRef}>
                    <p dangerouslySetInnerHTML={{ __html: content }} />
                </div>
                <div className="question__icon">
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default Question;
