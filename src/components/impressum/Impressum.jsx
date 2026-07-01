import './style.scss';

const Impressum = () => {
    return (
        <section className="legal-page">
            <div className="legal-page__container container">
                <h1 className="legal-page__title">Impressum</h1>

                <div className="legal-page__content">
                    <p>Angaben gemäß § 5 DDG</p>

                    <p>
                        Dmytro Kiriachek
                        <br />
                        handelnd unter Nexon Digital Studio
                        <br />
                        Collegienstr. 59A
                        <br />
                        06886 Lutherstadt Wittenberg
                        <br />
                        Deutschland
                    </p>

                    <p>
                        Kontakt:
                        <br />
                        E-Mail: nexonstudio24@gmail.com
                        <br />
                        Telefon: +49 15510629166
                        <br />
                        Kontaktformular:{' '}
                        <a href="https://nexon-studio.com/#contact">
                            https://nexon-studio.com/#contact
                        </a>
                    </p>

                    <p>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</p>

                    <p>
                        Dmytro Kiriachek
                        <br />
                        Collegienstr. 59A
                        <br />
                        06886 Lutherstadt Wittenberg
                        <br />
                        Deutschland
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Impressum;
