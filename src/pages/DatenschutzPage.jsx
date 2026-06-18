import React from 'react';
import SEO from '../components/seo/SEO';

const DatenschutzPage = () => {
    return (
        <>
            <SEO
                title="Datenschutzerklärung | Nexon Studio"
                description="Datenschutzerklärung von Nexon Studio."
            />

            <section className="legal-page">
                <div className="legal-page__container">
                    <h1 className="legal-page__title">Datenschutzerklärung</h1>

                    <div className="legal-page__content">
                        <p>Hier kommt dein Datenschutz-Text rein.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DatenschutzPage;
