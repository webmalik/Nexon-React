import React, { useState, useEffect } from 'react';
import './style.scss';
import arrow from './arrow.png';

const Review = ({ isOpen, toggleAccordion, title, nikname, description, image }) => {
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        if (isOpen) {
            setContentHeight(contentRef.current.scrollHeight);
        } else {
            setContentHeight(0);
        }
    }, [isOpen]);

    const contentRef = React.createRef();

    return (
        <div className={`review ${isOpen ? 'active' : ''}`} onClick={toggleAccordion}>
            <div className="review__header">
                <div className="review__image">
                    <img src={image} alt="" />
                </div>
                <div className="review__inner">
                    <div className="review__title">{title}</div>
                    <div className="review__nikname">{nikname}</div>
                </div>
                <div className="review__arrow">
                    <img src={arrow} alt="" />
                </div>
            </div>
            <div
                className="review__content"
                style={{ maxHeight: isOpen ? contentHeight + 'px' : '0' }}
                ref={contentRef}>
                {description}
            </div>
        </div>
    );
};

export default Review;
