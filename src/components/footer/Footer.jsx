import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import './style.scss';
import visa from './visa.png';
import mastercard from './mastercard.png';

const Footer = () => {
    const { t } = useTranslation();

    const isDesktop = useMediaQuery({ minWidth: 992 });

    const downloadFile = (fileName) => {
        const link = document.createElement('a');
        link.href = `/${fileName}.pdf`;
        link.download = `${fileName}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDownloadOferta = () => {
        downloadFile('offer-contract');
    };

    const handleDownloadPolit = () => {
        downloadFile('privacy-policy');
    };

    const handlePhoneClick = (phoneNumber) => {
        window.open(`tel:${phoneNumber}`, '_blank');
    };

    const handleEmailClick = (email) => {
        window.open(`mailto:${email}`, '_blank');
    };

    const handleTelegramClick = () => {
        window.open(`https://t.me/dmitriy_uier`, '_blank');
    };

    const handleInstagramClick = () => {
        window.open(
            `https://www.instagram.com/dmitriy.uier?utm_source=nexon-studio-site`,
            '_blank',
        );
    };
    return (
        <div className="footer">
            <div className="container">
                {isDesktop ? (
                    <div className="footer__wrapper">
                        <div className="footer__item">
                            <div className="footer__logo">Nexon Studio</div>
                            <div className="footer__inner footer__links">
                                <button onClick={handleDownloadOferta}>{t('footer-oferta')}</button>
                                <button onClick={handleDownloadPolit}>{t('footer-polit')}</button>
                            </div>
                        </div>
                        <div className="footer__item">
                            <div className="footer__slug">{t('footer-slug')}</div>
                            <div className="footer__inner footer__payments">
                                <button className="visa">
                                    <img src={visa} alt="" />
                                </button>
                                <button className="mastercard">
                                    <img src={mastercard} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="footer__item">
                            <div className="footer__contacts">
                                <button
                                    onClick={() => handlePhoneClick(t('contacts-phone'))}
                                    className="contacts__phone">
                                    {t('contacts-phone')}
                                </button>
                                <button
                                    onClick={() => handleEmailClick(t('contacts-mail'))}
                                    className="contacts__mail">
                                    {t('contacts-mail')}
                                </button>
                            </div>
                            <div className="footer__inner">
                                <button onClick={() => handleTelegramClick()}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="36"
                                        height="36"
                                        viewBox="0 0 36 36"
                                        fill="none">
                                        <path
                                            d="M12.8299 15.9163C11.2286 16.531 9.58324 17.1626 8.07874 17.8912C7.29307 18.3969 8.33749 18.7547 9.3171 19.0903C9.47273 19.1436 9.62672 19.1964 9.77148 19.2491C9.89201 19.2816 10.0146 19.316 10.1388 19.3508C11.2282 19.6559 12.443 19.9962 13.5007 19.4843C15.2382 18.6068 16.8778 17.5923 18.5162 16.5786C19.053 16.2465 19.5896 15.9144 20.1295 15.5873C20.1548 15.5731 20.1834 15.5568 20.2146 15.539C20.6745 15.2769 21.7089 14.6874 21.3263 15.4997C20.4215 16.3697 19.4524 17.1398 18.478 17.9141C17.8213 18.4359 17.1622 18.9596 16.5188 19.5171C15.9584 19.9174 15.3765 20.7225 16.004 21.283C17.4492 22.1726 18.9171 23.0406 20.3841 23.908C20.8614 24.1903 21.3387 24.4726 21.8151 24.7555C22.6225 25.3222 23.8844 24.8638 24.0619 23.9782C24.1408 23.5708 24.22 23.1635 24.2993 22.7561C24.7373 20.5046 25.1754 18.2524 25.5625 15.9936C25.6151 15.6393 25.6747 15.285 25.7344 14.9305C25.879 14.0714 26.0238 13.2112 26.069 12.3475C25.9524 11.4855 24.7637 11.675 24.1021 11.8688C20.7018 13.0064 17.3354 14.2283 13.9824 15.4718C13.6025 15.6197 13.2175 15.7675 12.8299 15.9163Z"
                                            fill="#151515"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.3778 3.45405e-07C14.1293 -1.84274e-05 11.5683 -3.31476e-05 9.53327 0.220451C7.45122 0.446028 5.74168 0.9168 4.27647 1.98133C3.39575 2.62122 2.62122 3.39574 1.98133 4.27647C0.9168 5.74168 0.446028 7.45122 0.220451 9.53327C-3.29912e-05 11.5683 -1.82629e-05 14.1293 3.40788e-07 17.3778V18.6222C-1.82629e-05 21.8707 -3.29912e-05 24.4317 0.220451 26.4667C0.446028 28.5488 0.9168 30.2583 1.98133 31.7235C2.62122 32.6043 3.39575 33.3788 4.27647 34.0187C5.74168 35.0832 7.45122 35.554 9.53327 35.7795C11.5683 36 14.1293 36 17.3777 36H18.6222C21.8706 36 24.4317 36 26.4667 35.7795C28.5488 35.554 30.2583 35.0832 31.7235 34.0187C32.6043 33.3788 33.3788 32.6043 34.0187 31.7235C35.0832 30.2583 35.554 28.5488 35.7795 26.4667C36 24.4317 36 21.8707 36 18.6223V17.3778C36 14.1294 36 11.5683 35.7795 9.53327C35.554 7.45122 35.0832 5.74168 34.0187 4.27647C33.3788 3.39574 32.6043 2.62122 31.7235 1.98133C30.2583 0.9168 28.5488 0.446027 26.4667 0.220451C24.4317 -3.31476e-05 21.8707 -1.84274e-05 18.6222 3.45405e-07H17.3778ZM6.04852 4.42034C6.91414 3.79143 8.03246 3.41547 9.858 3.21769C11.7118 3.01685 14.1095 3.01478 17.468 3.01478H18.532C21.8905 3.01478 24.2882 3.01685 26.142 3.21769C27.9675 3.41547 29.0859 3.79143 29.9515 4.42034C30.5763 4.87428 31.1257 5.42373 31.5797 6.04852C32.2086 6.91414 32.5845 8.03246 32.7823 9.858C32.9832 11.7118 32.9852 14.1095 32.9852 17.468V18.532C32.9852 21.8905 32.9832 24.2882 32.7823 26.142C32.5845 27.9675 32.2086 29.0859 31.5797 29.9515C31.1257 30.5763 30.5763 31.1257 29.9515 31.5797C29.0859 32.2086 27.9675 32.5845 26.142 32.7823C24.2882 32.9832 21.8905 32.9852 18.532 32.9852H17.468C14.1095 32.9852 11.7118 32.9832 9.858 32.7823C8.03246 32.5845 6.91414 32.2086 6.04852 31.5797C5.42373 31.1257 4.87428 30.5763 4.42034 29.9515C3.79143 29.0859 3.41548 27.9675 3.21769 26.142C3.01685 24.2882 3.01478 21.8905 3.01478 18.532V17.468C3.01478 14.1095 3.01685 11.7118 3.21769 9.858C3.41548 8.03246 3.79143 6.91414 4.42034 6.04852C4.87428 5.42373 5.42373 4.87428 6.04852 4.42034Z"
                                            fill="#151515"
                                        />
                                    </svg>
                                </button>
                                <button onClick={() => handleInstagramClick()}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="36"
                                        height="36"
                                        viewBox="0 0 36 36"
                                        fill="none">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.3778 3.45405e-07H18.6222C21.8707 -1.84274e-05 24.4317 -3.31476e-05 26.4667 0.220451C28.5488 0.446027 30.2583 0.9168 31.7235 1.98133C32.6043 2.62122 33.3788 3.39575 34.0187 4.27647C35.0832 5.74168 35.554 7.45122 35.7795 9.53327C36 11.5683 36 14.1293 36 17.3778V18.6222C36 21.8707 36 24.4317 35.7795 26.4667C35.554 28.5488 35.0832 30.2583 34.0187 31.7235C33.3788 32.6043 32.6043 33.3788 31.7235 34.0187C30.2583 35.0832 28.5488 35.554 26.4667 35.7795C24.4317 36 21.8707 36 18.6222 36H17.3778C14.1293 36 11.5683 36 9.53327 35.7795C7.45122 35.554 5.74168 35.0832 4.27647 34.0187C3.39575 33.3788 2.62122 32.6043 1.98133 31.7235C0.9168 30.2583 0.446028 28.5488 0.220451 26.4667C-3.31476e-05 24.4317 -1.84274e-05 21.8707 3.45415e-07 18.6222V17.3778C-1.84274e-05 14.1293 -3.31476e-05 11.5683 0.220451 9.53327C0.446027 7.45122 0.9168 5.74168 1.98133 4.27647C2.62122 3.39575 3.39575 2.62122 4.27647 1.98133C5.74168 0.9168 7.45122 0.446028 9.53327 0.220451C11.5683 -3.31476e-05 14.1293 -1.84274e-05 17.3778 3.45405e-07ZM9.858 3.21769C8.03246 3.41548 6.91414 3.79143 6.04852 4.42034C5.42373 4.87428 4.87428 5.42373 4.42034 6.04852C3.79143 6.91414 3.41548 8.03246 3.21769 9.858C3.01685 11.7118 3.01478 14.1095 3.01478 17.468V18.532C3.01478 21.8905 3.01685 24.2882 3.21769 26.142C3.41548 27.9675 3.79143 29.0859 4.42034 29.9515C4.87428 30.5763 5.42373 31.1257 6.04852 31.5797C6.91414 32.2086 8.03246 32.5845 9.858 32.7823C11.7118 32.9832 14.1095 32.9852 17.468 32.9852H18.532C21.8905 32.9852 24.2882 32.9832 26.142 32.7823C27.9675 32.5845 29.0859 32.2086 29.9515 31.5797C30.5763 31.1257 31.1257 30.5763 31.5797 29.9515C32.2086 29.0859 32.5845 27.9675 32.7823 26.142C32.9832 24.2882 32.9852 21.8905 32.9852 18.532V17.468C32.9852 14.1095 32.9832 11.7118 32.7823 9.858C32.5845 8.03246 32.2086 6.91414 31.5797 6.04852C31.1257 5.42373 30.5763 4.87428 29.9515 4.42034C29.0859 3.79143 27.9675 3.41548 26.142 3.21769C24.2882 3.01685 21.8905 3.01478 18.532 3.01478H17.468C14.1095 3.01478 11.7118 3.01685 9.858 3.21769Z"
                                            fill="#151515"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M18 11.8818C14.621 11.8818 11.8818 14.621 11.8818 18C11.8818 21.379 14.621 24.1182 18 24.1182C21.379 24.1182 24.1182 21.379 24.1182 18C24.1182 14.621 21.379 11.8818 18 11.8818ZM8.86699 18C8.86699 12.956 12.956 8.867 18 8.867C23.044 8.867 27.133 12.956 27.133 18C27.133 23.044 23.044 27.133 18 27.133C12.956 27.133 8.86699 23.044 8.86699 18Z"
                                            fill="#151515"
                                        />
                                        <path
                                            d="M25.6256 8.35714C25.6256 7.21857 26.5486 6.29557 27.6872 6.29557C28.8258 6.29557 29.7488 7.21857 29.7488 8.35714C29.7488 9.49572 28.8258 10.4187 27.6872 10.4187C26.5486 10.4187 25.6256 9.49572 25.6256 8.35714Z"
                                            fill="#151515"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="footer__wrapper">
                        <div className="footer__item">
                            <div className="footer__logo">Nexon Studio</div>
                            <div className="footer__slug">{t('footer-slug')}</div>
                        </div>
                        <div className="footer__item">
                            <div className="footer__contacts">
                                <button
                                    onClick={() => handlePhoneClick(t('contacts-phone'))}
                                    className="contacts__phone">
                                    {t('contacts-phone')}
                                </button>
                                <button
                                    onClick={() => handleEmailClick(t('contacts-mail'))}
                                    className="contacts__mail">
                                    {t('contacts-mail')}
                                </button>
                            </div>
                            <div className="footer__inner footer__socials">
                                <button onClick={() => handleTelegramClick()}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="36"
                                        height="36"
                                        viewBox="0 0 36 36"
                                        fill="none">
                                        <path
                                            d="M12.8299 15.9163C11.2286 16.531 9.58324 17.1626 8.07874 17.8912C7.29307 18.3969 8.33749 18.7547 9.3171 19.0903C9.47273 19.1436 9.62672 19.1964 9.77148 19.2491C9.89201 19.2816 10.0146 19.316 10.1388 19.3508C11.2282 19.6559 12.443 19.9962 13.5007 19.4843C15.2382 18.6068 16.8778 17.5923 18.5162 16.5786C19.053 16.2465 19.5896 15.9144 20.1295 15.5873C20.1548 15.5731 20.1834 15.5568 20.2146 15.539C20.6745 15.2769 21.7089 14.6874 21.3263 15.4997C20.4215 16.3697 19.4524 17.1398 18.478 17.9141C17.8213 18.4359 17.1622 18.9596 16.5188 19.5171C15.9584 19.9174 15.3765 20.7225 16.004 21.283C17.4492 22.1726 18.9171 23.0406 20.3841 23.908C20.8614 24.1903 21.3387 24.4726 21.8151 24.7555C22.6225 25.3222 23.8844 24.8638 24.0619 23.9782C24.1408 23.5708 24.22 23.1635 24.2993 22.7561C24.7373 20.5046 25.1754 18.2524 25.5625 15.9936C25.6151 15.6393 25.6747 15.285 25.7344 14.9305C25.879 14.0714 26.0238 13.2112 26.069 12.3475C25.9524 11.4855 24.7637 11.675 24.1021 11.8688C20.7018 13.0064 17.3354 14.2283 13.9824 15.4718C13.6025 15.6197 13.2175 15.7675 12.8299 15.9163Z"
                                            fill="#151515"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.3778 3.45405e-07C14.1293 -1.84274e-05 11.5683 -3.31476e-05 9.53327 0.220451C7.45122 0.446028 5.74168 0.9168 4.27647 1.98133C3.39575 2.62122 2.62122 3.39574 1.98133 4.27647C0.9168 5.74168 0.446028 7.45122 0.220451 9.53327C-3.29912e-05 11.5683 -1.82629e-05 14.1293 3.40788e-07 17.3778V18.6222C-1.82629e-05 21.8707 -3.29912e-05 24.4317 0.220451 26.4667C0.446028 28.5488 0.9168 30.2583 1.98133 31.7235C2.62122 32.6043 3.39575 33.3788 4.27647 34.0187C5.74168 35.0832 7.45122 35.554 9.53327 35.7795C11.5683 36 14.1293 36 17.3777 36H18.6222C21.8706 36 24.4317 36 26.4667 35.7795C28.5488 35.554 30.2583 35.0832 31.7235 34.0187C32.6043 33.3788 33.3788 32.6043 34.0187 31.7235C35.0832 30.2583 35.554 28.5488 35.7795 26.4667C36 24.4317 36 21.8707 36 18.6223V17.3778C36 14.1294 36 11.5683 35.7795 9.53327C35.554 7.45122 35.0832 5.74168 34.0187 4.27647C33.3788 3.39574 32.6043 2.62122 31.7235 1.98133C30.2583 0.9168 28.5488 0.446027 26.4667 0.220451C24.4317 -3.31476e-05 21.8707 -1.84274e-05 18.6222 3.45405e-07H17.3778ZM6.04852 4.42034C6.91414 3.79143 8.03246 3.41547 9.858 3.21769C11.7118 3.01685 14.1095 3.01478 17.468 3.01478H18.532C21.8905 3.01478 24.2882 3.01685 26.142 3.21769C27.9675 3.41547 29.0859 3.79143 29.9515 4.42034C30.5763 4.87428 31.1257 5.42373 31.5797 6.04852C32.2086 6.91414 32.5845 8.03246 32.7823 9.858C32.9832 11.7118 32.9852 14.1095 32.9852 17.468V18.532C32.9852 21.8905 32.9832 24.2882 32.7823 26.142C32.5845 27.9675 32.2086 29.0859 31.5797 29.9515C31.1257 30.5763 30.5763 31.1257 29.9515 31.5797C29.0859 32.2086 27.9675 32.5845 26.142 32.7823C24.2882 32.9832 21.8905 32.9852 18.532 32.9852H17.468C14.1095 32.9852 11.7118 32.9832 9.858 32.7823C8.03246 32.5845 6.91414 32.2086 6.04852 31.5797C5.42373 31.1257 4.87428 30.5763 4.42034 29.9515C3.79143 29.0859 3.41548 27.9675 3.21769 26.142C3.01685 24.2882 3.01478 21.8905 3.01478 18.532V17.468C3.01478 14.1095 3.01685 11.7118 3.21769 9.858C3.41548 8.03246 3.79143 6.91414 4.42034 6.04852C4.87428 5.42373 5.42373 4.87428 6.04852 4.42034Z"
                                            fill="#151515"
                                        />
                                    </svg>
                                </button>
                                <button onClick={() => handleInstagramClick()}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="36"
                                        height="36"
                                        viewBox="0 0 36 36"
                                        fill="none">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.3778 3.45405e-07H18.6222C21.8707 -1.84274e-05 24.4317 -3.31476e-05 26.4667 0.220451C28.5488 0.446027 30.2583 0.9168 31.7235 1.98133C32.6043 2.62122 33.3788 3.39575 34.0187 4.27647C35.0832 5.74168 35.554 7.45122 35.7795 9.53327C36 11.5683 36 14.1293 36 17.3778V18.6222C36 21.8707 36 24.4317 35.7795 26.4667C35.554 28.5488 35.0832 30.2583 34.0187 31.7235C33.3788 32.6043 32.6043 33.3788 31.7235 34.0187C30.2583 35.0832 28.5488 35.554 26.4667 35.7795C24.4317 36 21.8707 36 18.6222 36H17.3778C14.1293 36 11.5683 36 9.53327 35.7795C7.45122 35.554 5.74168 35.0832 4.27647 34.0187C3.39575 33.3788 2.62122 32.6043 1.98133 31.7235C0.9168 30.2583 0.446028 28.5488 0.220451 26.4667C-3.31476e-05 24.4317 -1.84274e-05 21.8707 3.45415e-07 18.6222V17.3778C-1.84274e-05 14.1293 -3.31476e-05 11.5683 0.220451 9.53327C0.446027 7.45122 0.9168 5.74168 1.98133 4.27647C2.62122 3.39575 3.39575 2.62122 4.27647 1.98133C5.74168 0.9168 7.45122 0.446028 9.53327 0.220451C11.5683 -3.31476e-05 14.1293 -1.84274e-05 17.3778 3.45405e-07ZM9.858 3.21769C8.03246 3.41548 6.91414 3.79143 6.04852 4.42034C5.42373 4.87428 4.87428 5.42373 4.42034 6.04852C3.79143 6.91414 3.41548 8.03246 3.21769 9.858C3.01685 11.7118 3.01478 14.1095 3.01478 17.468V18.532C3.01478 21.8905 3.01685 24.2882 3.21769 26.142C3.41548 27.9675 3.79143 29.0859 4.42034 29.9515C4.87428 30.5763 5.42373 31.1257 6.04852 31.5797C6.91414 32.2086 8.03246 32.5845 9.858 32.7823C11.7118 32.9832 14.1095 32.9852 17.468 32.9852H18.532C21.8905 32.9852 24.2882 32.9832 26.142 32.7823C27.9675 32.5845 29.0859 32.2086 29.9515 31.5797C30.5763 31.1257 31.1257 30.5763 31.5797 29.9515C32.2086 29.0859 32.5845 27.9675 32.7823 26.142C32.9832 24.2882 32.9852 21.8905 32.9852 18.532V17.468C32.9852 14.1095 32.9832 11.7118 32.7823 9.858C32.5845 8.03246 32.2086 6.91414 31.5797 6.04852C31.1257 5.42373 30.5763 4.87428 29.9515 4.42034C29.0859 3.79143 27.9675 3.41548 26.142 3.21769C24.2882 3.01685 21.8905 3.01478 18.532 3.01478H17.468C14.1095 3.01478 11.7118 3.01685 9.858 3.21769Z"
                                            fill="#151515"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M18 11.8818C14.621 11.8818 11.8818 14.621 11.8818 18C11.8818 21.379 14.621 24.1182 18 24.1182C21.379 24.1182 24.1182 21.379 24.1182 18C24.1182 14.621 21.379 11.8818 18 11.8818ZM8.86699 18C8.86699 12.956 12.956 8.867 18 8.867C23.044 8.867 27.133 12.956 27.133 18C27.133 23.044 23.044 27.133 18 27.133C12.956 27.133 8.86699 23.044 8.86699 18Z"
                                            fill="#151515"
                                        />
                                        <path
                                            d="M25.6256 8.35714C25.6256 7.21857 26.5486 6.29557 27.6872 6.29557C28.8258 6.29557 29.7488 7.21857 29.7488 8.35714C29.7488 9.49572 28.8258 10.4187 27.6872 10.4187C26.5486 10.4187 25.6256 9.49572 25.6256 8.35714Z"
                                            fill="#151515"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="footer__item">
                            <div className="footer__inner footer__links">
                                <button onClick={handleDownloadOferta}>{t('footer-oferta')}</button>
                                <button onClick={handleDownloadPolit}>{t('footer-polit')}</button>
                            </div>
                            <div className="footer__inner footer__payments">
                                <button className="visa">
                                    <img src={visa} alt="" />
                                </button>
                                <button className="mastercard">
                                    <img src={mastercard} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Footer;