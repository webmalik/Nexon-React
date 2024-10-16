import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import InputMask from 'react-input-mask';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

import { useTranslation } from 'react-i18next';
import axios from 'axios';

import './style.scss';
import getPhoneMask from './getPhoneMask';

const Form = () => {
    const { t } = useTranslation();

    const [user, setUser] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);
    const [isInputValidUser, setIsInputValidUser] = useState(false);
    const [isInputVoidUser, setIsInputVoidUser] = useState(true);
    const [isInputValidPhone, setIsInputValidPhone] = useState(false);
    const [isInputVoidPhone, setIsInputVoidPhone] = useState(true);
    const [isInputValidMail, setIsInputValidMail] = useState(false);
    const [isInputVoidMail, setIsInputVoidMail] = useState(true);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [countryCode, setCountryCode] = useState('UA');

    const chats = [
        '1605354843', // WebMaLik
        '5922657292', // Діма
    ];

    const isValidPhoneNumber = (phoneNumber, countryCode) => {
        const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber, countryCode);
        return parsedPhoneNumber && parsedPhoneNumber.isValid();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user.trim()) {
            setError(t('form-message-error-user'));
            return;
        }
        if (!user.length > 2) {
            setError(t('form-message-error-user'));
            return;
        }
        if (!phone.trim()) {
            setError(t('form-message-error-phone'));
            return;
        }
        if (!phone.length > 2) {
            setError(t('form-message-error-phone'));
            return;
        }
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
                        text: `<b>На сайті нове заповнення форми зворотнього зв'язку.\n\n<i>Ім'я:</i>    ${user}\n<i>Телефон:</i>    <a href="tel:${phone}">${phone}</a>\n<i>E-Mail:    </i></b> <a href="mailto:${email}">${email}</a> `,
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

    const handleInputChangeUser = (e) => {
        const value = e.target.value;
        setUser(value);
        setIsInputVoidUser(!value.trim());
        setIsInputValidUser(value.length > 2);
    };

    const handleInputChangePhone = (e) => {
        const value = e.target.value;
        setPhone(value);
        setIsInputVoidPhone(!value.trim());
        setIsInputValidPhone(value.length > 2 && isValidPhoneNumber(value, countryCode));
    };

    const handleCountryChange = (value, country) => {
        const code = country.countryCode.toUpperCase();
        setCountryCode(code);
    };

    const handleInputChangeMail = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsInputVoidMail(!value.trim());
        setIsInputValidMail(emailPattern.test(value));
    };

    return (
        <div className="form">
            {!isSent ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder={isInputVoidUser ? t('form-placeholder-name') : error}
                        className={isInputVoidUser ? '' : !isInputValidUser ? 'invalid' : ''}
                        autoComplete="name"
                        value={user}
                        onChange={handleInputChangeUser}
                        onBlur={handleInputChangeUser}
                        disabled={isSent}
                    />
                    <div className="phone-input-container">
                        <PhoneInput
                            country={'ua'}
                            onChange={handleCountryChange}
                            disableSearchIcon={true}
                            enableSearch={true}
                        />
                        <InputMask
                            mask={getPhoneMask(countryCode)}
                            maskChar="_"
                            autoComplete="tel"
                            value={phone}
                            className={isInputVoidPhone ? '' : !isInputValidPhone ? 'invalid' : ''}
                            placeholder={isInputVoidPhone ? t('form-placeholder-tel') : error}
                            onChange={handleInputChangePhone}
                            onBlur={handleInputChangePhone}
                            disabled={isSent}
                        />
                    </div>
                    <input
                        type="mail"
                        placeholder={isInputVoidMail ? t('form-placeholder-mail') : error}
                        className={isInputVoidMail ? '' : !isInputValidMail ? 'invalid' : ''}
                        autoComplete="email"
                        value={email}
                        onChange={handleInputChangeMail}
                        onBlur={handleInputChangeMail}
                        disabled={isSent}
                    />
                    <button
                        type="submit"
                        disabled={
                            (!isInputValidUser && !isInputValidPhone && !isInputValidMail) || isSent
                        }
                        className={
                            !isInputValidUser || !isInputValidPhone || !isInputValidMail
                                ? 'send__button-disabled'
                                : ''
                        }>
                        {t('form-button')}
                    </button>
                </form>
            ) : (
                <div className="form__send">
                    {error ? (
                        error
                    ) : (
                        <p dangerouslySetInnerHTML={{ __html: t('mail-message-success') }} />
                    )}
                </div>
            )}
        </div>
    );
};

export default Form;
