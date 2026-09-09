import SEO from '../components/seo/SEO';

import '../root/scss/notFoundPage.scss';

const NotFoundPage = () => {
    return (
        <>
            <SEO
                title="404 – Seite nicht gefunden | Nexon Digital Studio"
                description="Die angeforderte Seite wurde nicht gefunden."
                canonicalPath={null}
                noindex
            />

            <main className="not-found">
                <div className="not-found__container container">
                    <div className="not-found__content">
                        <span className="not-found__label">Fehler 404</span>

                        <h1 className="not-found__title">404</h1>

                        <h2 className="not-found__subtitle">Seite nicht gefunden</h2>

                        <p className="not-found__text">
                            Die angeforderte Seite existiert nicht oder wurde verschoben.
                        </p>

                        <a className="not-found__button" href="/">
                            Zur Startseite
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
};

export default NotFoundPage;
