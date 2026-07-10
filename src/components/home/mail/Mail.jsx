import React, { useState } from 'react';

import axios from 'axios';

import './style.scss';

import mailArrowIMG from './mail-arrow.png';

import { defaultData } from '../../../data/homeData';

const TELEGRAM_BOT_TOKEN = '7173317613:AAG4KDxp5DPHb6B6gFBRGrJ73BOsdrYhWDM';

const TELEGRAM_CHAT_IDS = ['1605354843', '5922657292'];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Mail = () => {
    const { mail } = defaultData;

    const [email, setEmail] = useState('');
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);
    const [isInputValid, setIsInputValid] = useState(true);
    const [isInputVoid, setIsInputVoid] = useState(true);

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

        if (!TELEGRAM_BOT_TOKEN) {
            setError(mail.messages.error);
            return;
        }

        try {
            const requests = TELEGRAM_CHAT_IDS.map((chatId) =>
                axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                    chat_id: chatId,
                    text: `<b>На сайті новий запит на зв'язок.\n\n<i>E-Mail: </i></b> <a href="mailto:${trimmedEmail}">${trimmedEmail}</a>`,
                    parse_mode: 'HTML',
                }),
            );

            await Promise.all(requests);

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
        setIsInputValid(!value.trim() || emailPattern.test(value));
        setError(null);
    };

    return (
        <section className="mail p-sticky" id="mail">
            <div className="container">
                <div className="mail__wrapper">
                    <h2 className="mail__title ttt">
                        {mail.title[0]}
                        <br />
                        <span>{mail.title[1]}</span>
                    </h2>

                    <div className="mail__form">
                        <img src={mailArrowIMG} alt="" />

                        <div
                            className={`mail__input-wrapper ${
                                isInputVoid ? 'empty' : !isInputValid ? 'invalid' : ''
                            }`}>
                            {!isSent ? (
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
                                        disabled={!isInputValid || isSent}
                                        className={isInputVoid ? 'mail__button-disabled' : ''}>
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
                            ) : (
                                <p>{mail.messages.success}</p>
                            )}
                        </div>
                    </div>

                    <div className="mail__info">{mail.privacyText}</div>
                </div>
            </div>
        </section>
    );
};

export default Mail;
