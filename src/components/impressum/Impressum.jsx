// import { useRef, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import './style.scss';

const Impressum = () => {
    // const { t } = useTranslation();
    // const container = useRef();

    return (
        <section className="legal-page">
            <div className="legal-page__container container">
                <h1 className="legal-page__title">Impressum</h1>

                <div className="legal-page__content">
                    <p>Angaben gemäß § 5 DDG</p>

                    <p>
                        Dmytro Kiriachek
                        <br />
                        <br />
                        Collegienstr. 59A
                        <br />
                        <br />
                        06686, Lutherstadt Wittenberg
                        <br />
                        <br />
                        Deutschland
                    </p>

                    <p>E-Mail: nexonstudio24@gmail.com</p>

                    <p>
                        Verantwortlich für den Inhalt:
                        <br />
                        <br />
                        Dmytro Kiriachek
                        <br />
                        <br />
                        Collegienstr. 59A, 06686, Lutherstadt Wittenberg, Deutschland
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Impressum;
