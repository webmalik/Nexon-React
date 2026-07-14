import React, { useState } from 'react';

import 'react-phone-input-2/lib/style.css';

import InputMask from 'react-input-mask';
import PhoneInput from 'react-phone-input-2';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import axios from 'axios';

import './style.scss';

import getPhoneMask from './getPhoneMask';

import { defaultData } from '../../../data/homeData';

const TELEGRAM_BOT_TOKEN = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;

const TELEGRAM_CHAT_IDS = ['1605354843', '5922657292'];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Form = () => {
    const { form, mail } = defaultData;

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

    const [countryCode, setCountryCode] = useState('DE');

    const isValidPhoneNumber = (phoneNumber, code) => {
        const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber, code);

        return parsedPhoneNumber && parsedPhoneNumber.isValid();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const trimmedUser = user.trim();
        const trimmedPhone = phone.trim();
        const trimmedEmail = email.trim();

        if (!trimmedUser || trimmedUser.length <= 2) {
            setError(form.messages.userError);
            return;
        }

        if (!trimmedPhone || !isValidPhoneNumber(trimmedPhone, countryCode)) {
            setError(form.messages.phoneError);
            return;
        }

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
                    text: `<b>На сайті нове заповнення форми зворотнього зв'язку.\n\n<i>Ім'я:</i> ${trimmedUser}\n<i>Телефон:</i> <a href="tel:${trimmedPhone}">${trimmedPhone}</a>\n<i>E-Mail:</i></b> <a href="mailto:${trimmedEmail}">${trimmedEmail}</a>`,
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

    const handleInputChangeUser = (e) => {
        const value = e.target.value;

        setUser(value);
        setIsInputVoidUser(!value.trim());
        setIsInputValidUser(value.trim().length > 2);
        setError(null);
    };

    const handleInputChangePhone = (e) => {
        const value = e.target.value;

        setPhone(value);
        setIsInputVoidPhone(!value.trim());
        setIsInputValidPhone(value.trim().length > 2 && isValidPhoneNumber(value, countryCode));
        setError(null);
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
        setError(null);
    };

    const isFormDisabled = !isInputValidUser || !isInputValidPhone || !isInputValidMail || isSent;

    return (
        <div className="form">
            {!isSent ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder={isInputVoidUser ? form.placeholders.name : error}
                        className={isInputVoidUser ? '' : !isInputValidUser ? 'invalid' : ''}
                        autoComplete="name"
                        value={user}
                        onChange={handleInputChangeUser}
                        onBlur={handleInputChangeUser}
                        disabled={isSent}
                    />

                    <div className="phone-input-container">
                        <PhoneInput
                            country="de"
                            onChange={handleCountryChange}
                            disableSearchIcon
                            enableSearch
                        />

                        <InputMask
                            mask={getPhoneMask(countryCode)}
                            maskChar="_"
                            autoComplete="tel"
                            value={phone}
                            className={isInputVoidPhone ? '' : !isInputValidPhone ? 'invalid' : ''}
                            placeholder={isInputVoidPhone ? form.placeholders.phone : error}
                            onChange={handleInputChangePhone}
                            onBlur={handleInputChangePhone}
                            disabled={isSent}
                        />
                    </div>

                    <input
                        type="email"
                        placeholder={isInputVoidMail ? form.placeholders.email : error}
                        className={isInputVoidMail ? '' : !isInputValidMail ? 'invalid' : ''}
                        autoComplete="email"
                        value={email}
                        onChange={handleInputChangeMail}
                        onBlur={handleInputChangeMail}
                        disabled={isSent}
                    />

                    <button
                        type="submit"
                        disabled={isFormDisabled}
                        className={isFormDisabled ? 'send__button-disabled' : ''}>
                        {form.button}
                    </button>
                </form>
            ) : (
                <div className="form__send">{error ? error : <p>{mail.messages.success}</p>}</div>
            )}

            <div className="form__info">{form.privacyText}</div>
        </div>
    );
};

export default Form;
