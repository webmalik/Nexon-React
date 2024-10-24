import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import axios from 'axios';

import './style.scss';
import mailArrowIMG from './mail-arrow.png';

const Mail = () => {
    const { t } = useTranslation();

    const [email, setEmail] = useState('');
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);
    const [isInputValid, setIsInputValid] = useState(true);
    const [isInputVoid, setIsInputVoid] = useState(true);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const chats = [
        '1605354843', // WebMaLik
        '5922657292', // Діма
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim()) {
            setError(t('mail-message-error-valid-void'));
            return;
        }
        if (!emailPattern.test(email)) {
            setError(t('mail-message-error-valid'));
            return;
        }
        try {
            const requests = chats.map(async (chat) => {
                return axios.post(
                    `https://api.telegram.org/bot7173317613:AAG4KDxp5DPHb6B6gFBRGrJ73BOsdrYhWDM/sendMessage`,
                    {
                        chat_id: chat,
                        text: `<b>На сайті новий запит на зв'язок.\n\n<i>E-Mail:    </i></b> <a href="mailto:${email}">${email}</a> `,
                        parse_mode: 'HTML',
                    },
                );
            });

            const responses = await Promise.all(requests);

            responses.forEach(() => {
                setIsSent(true);
            });
        } catch (error) {
            setError(t('mail-message-error'));
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsInputVoid(!value.trim());
        setIsInputValid(emailPattern.test(value));
    };

    return (
        <section className="mail p-sticky" id="mail">
            <div className="container">
                <div className="mail__wrapper">
                    <div className="mail__title ttt">
                        {t('mail-title-1')}
                        <br />
                        <span>{t('mail-title-2')}</span>
                    </div>
                    <div className="mail__form">
                        <img src={mailArrowIMG} alt="" />
                        <div
                            className={`mail__input-wrapper ${
                                isInputVoid ? 'empty' : !isInputValid ? 'invalid' : ''
                            }`}>
                            {!isSent ? (
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="mail"
                                        placeholder={isInputVoid ? 'username@gmail.com' : error}
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
                                        {t('mail-button')}
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
                                <p
                                    dangerouslySetInnerHTML={{ __html: t('mail-message-success') }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mail;
