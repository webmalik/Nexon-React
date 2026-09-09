import React, { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

import axios from 'axios';

import './style.scss';

import mailArrowIMG from './mail-arrow.png';

import { defaultData } from '../../../data/homeData';

const TURNSTILE_SITE_KEY = process.env.REACT_APP_TURNSTILE_SITE_KEY;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Mail = ({ data = defaultData.mail, variant = '' }) => {
    const mail = data;

    const [email, setEmail] = useState('');
    const [captchaToken, setCaptchaToken] = useState('');

    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);

    const [isInputValid, setIsInputValid] = useState(true);
    const [isInputVoid, setIsInputVoid] = useState(true);

    const sectionClassName = ['mail', 'p-sticky', variant ? `mail--${variant}` : '']
        .filter(Boolean)
        .join(' ');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const trimmedEmail = email.trim();

        if (!trimmedEmail) {
            setError(mail.messages.emptyEmail);
            return;
        }

        if (!emailPattern.test(trimmedEmail)) {
            setError(mail.messages.invalidEmail);
            return;
        }

        if (!captchaToken) {
            setError('Підтвердіть, що ви не робот.');
            return;
        }

        try {
            await axios.post('/api/contact', {
                type: 'mail',
                email: trimmedEmail,
                captchaToken,
            });

            setIsSent(true);
            setError(null);
        } catch {
            setError(mail.messages.error);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;

        setEmail(value);
        setIsInputVoid(!value.trim());
        setIsInputValid(!value.trim() || emailPattern.test(value.trim()));
        setError(null);
    };

    const isButtonDisabled = isInputVoid || !isInputValid || !captchaToken || isSent;

    return (
        <section className={sectionClassName} id="mail">
            <div className="container">
                <div className="mail__wrapper">
                    <h2 className="mail__title ttt">
                        {mail.title[0]}
                        <br /> <span>{mail.title[1]}</span>
                    </h2>

                    {mail.text && <p className="mail__text">{mail.text}</p>}

                    <div className="mail__form">
                        <img src={mailArrowIMG} alt="" />

                        <div
                            className={`mail__input-wrapper ${
                                isInputVoid ? 'empty' : !isInputValid ? 'invalid' : ''
                            }`}>
                            {!isSent ? (
                                <>
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            type="email"
                                            placeholder={error || mail.placeholder}
                                            autoComplete="email"
                                            value={email}
                                            onChange={handleInputChange}
                                            onBlur={handleInputChange}
                                            disabled={isSent}
                                        />

                                        <button
                                            type="submit"
                                            disabled={isButtonDisabled}
                                            className={
                                                isButtonDisabled ? 'mail__button-disabled' : ''
                                            }>
                                            {mail.button}

                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none">
                                                    <path
                                                        d="M2 14L14 2M14 2L14 14M14 2L2 2"
                                                        stroke="white"
                                                        strokeWidth="3"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </form>

                                    {TURNSTILE_SITE_KEY && (
                                        <Turnstile
                                            siteKey={TURNSTILE_SITE_KEY}
                                            onSuccess={(token) => {
                                                setCaptchaToken(token);
                                                setError(null);
                                            }}
                                            onExpire={() => setCaptchaToken('')}
                                            onError={() => setCaptchaToken('')}
                                            options={{
                                                theme: 'auto',
                                                appearance: 'interaction-only',
                                            }}
                                        />
                                    )}
                                </>
                            ) : (
                                <p>{mail.messages.success}</p>
                            )}
                        </div>
                    </div>

                    {mail.privacyText && <div className="mail__info">{mail.privacyText}</div>}
                </div>
            </div>
        </section>
    );
};

export default Mail;
