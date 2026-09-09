import React from 'react';
import SEO from '../components/seo/SEO';
import { buildStaticPageSchemas } from '../components/seo/schemaBuilders';

const DatenschutzPage = () => {
    const schemas = buildStaticPageSchemas({
        path: '/datenschutz/',
        seo: {
            title: 'Datenschutzerklärung | Nexon Studio',
            description: 'Datenschutzerklärung von Nexon Studio.',
        },
        breadcrumbs: [
            {
                name: 'Startseite',
                path: '/',
            },
            {
                name: 'Datenschutz',
                path: '/datenschutz/',
            },
        ],
    });

    return (
        <>
            <SEO
                title="Datenschutzerklärung | Nexon Studio"
                description="Datenschutzerklärung von Nexon Studio."
                canonicalPath="/datenschutz/"
                schemas={schemas}
            />

            <section className="legal-page">
                <div className="legal-page__container container">
                    <h1 className="legal-page__title">Datenschutzerklärung</h1>

                    <div className="legal-page__content">
                        <p>
                            <strong>Stand: Juni 2026</strong>
                        </p>

                        <h2>1. Verantwortlicher</h2>

                        <p>
                            Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser
                            Website ist:
                        </p>

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
                            E-Mail:{' '}
                            <a href="mailto:nexonstudio24@gmail.com">nexonstudio24@gmail.com</a>
                            <br />
                            Telefon: <a href="tel:+4915510629166">+49 155 10629166</a>
                        </p>

                        <h2>2. Allgemeine Hinweise zur Datenverarbeitung</h2>

                        <p>
                            Wir verarbeiten personenbezogene Daten nur, soweit dies zur
                            Bereitstellung dieser Website, zur Bearbeitung von Anfragen oder zur
                            Durchführung vorvertraglicher und vertraglicher Maßnahmen erforderlich
                            ist.
                        </p>

                        <p>
                            Personenbezogene Daten sind alle Informationen, mit denen Sie persönlich
                            identifiziert werden können. Dazu gehören zum Beispiel Ihr Name, Ihre
                            E-Mail-Adresse, Ihre Telefonnummer, Ihre Nachricht oder technische Daten
                            wie Ihre IP-Adresse.
                        </p>

                        <p>
                            Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage der
                            Datenschutz-Grundverordnung (DSGVO) und der jeweils geltenden
                            datenschutzrechtlichen Bestimmungen.
                        </p>

                        <h2>3. Hosting und Server-Logfiles</h2>

                        <p>Diese Website wird bei folgendem Hosting-Anbieter betrieben:</p>

                        <p>
                            Hetzner Online GmbH
                            <br />
                            Industriestr. 25
                            <br />
                            91710 Gunzenhausen
                            <br />
                            Deutschland
                        </p>

                        <p>
                            Beim Besuch dieser Website werden durch den Hosting-Anbieter automatisch
                            technische Daten verarbeitet. Dazu können insbesondere gehören:
                        </p>

                        <ul>
                            <li>IP-Adresse</li>
                            <li>Datum und Uhrzeit des Zugriffs</li>
                            <li>aufgerufene Seite oder Datei</li>
                            <li>Browsertyp und Browserversion</li>
                            <li>verwendetes Betriebssystem</li>
                            <li>Referrer-URL</li>
                            <li>übertragene Datenmenge</li>
                            <li>Meldung über erfolgreichen oder fehlerhaften Abruf</li>
                        </ul>

                        <p>
                            Die Verarbeitung dieser Daten erfolgt, um die Website technisch
                            bereitzustellen, die Sicherheit des Systems zu gewährleisten, Missbrauch
                            zu verhindern und Fehler analysieren zu können.
                        </p>

                        <p>
                            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes
                            Interesse liegt in der sicheren, stabilen und fehlerfreien
                            Bereitstellung dieser Website.
                        </p>

                        <p>
                            Server-Logfiles werden nur so lange gespeichert, wie dies für die
                            genannten Zwecke erforderlich ist. Eine längere Speicherung kann
                            erfolgen, wenn dies zur Aufklärung von Sicherheitsvorfällen oder zur
                            Abwehr von Angriffen erforderlich ist.
                        </p>

                        <p>
                            Mit dem Hosting-Anbieter wurde, soweit erforderlich, ein Vertrag über
                            Auftragsverarbeitung gemäß Art. 28 DSGVO geschlossen.
                        </p>

                        <h2>4. Kontaktformular</h2>

                        <p>
                            Wenn Sie uns über das Kontaktformular kontaktieren, verarbeiten wir die
                            von Ihnen eingegebenen Daten. Dazu können insbesondere gehören:
                        </p>

                        <ul>
                            <li>Name</li>
                            <li>E-Mail-Adresse</li>
                            <li>Telefonnummer</li>
                            <li>Angaben zu Ihrem Shopify-Projekt</li>
                            <li>Inhalt Ihrer Nachricht</li>
                            <li>Zeitpunkt der Anfrage</li>
                        </ul>

                        <p>
                            Diese Daten verwenden wir ausschließlich, um Ihre Anfrage zu bearbeiten,
                            Rückfragen zu stellen und Ihnen eine erste Einschätzung zu Ihrem Projekt
                            zu geben.
                        </p>

                        <p>
                            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage auf
                            vorvertragliche Maßnahmen oder einen späteren Vertrag gerichtet ist. In
                            anderen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1
                            lit. f DSGVO. Unser berechtigtes Interesse liegt in der Bearbeitung
                            eingehender Anfragen.
                        </p>

                        <p>
                            Die über das Kontaktformular übermittelten Daten werden nicht ohne Ihre
                            Einwilligung an Dritte weitergegeben, es sei denn, dies ist zur
                            Bearbeitung Ihrer Anfrage, zur Durchführung eines Vertrags oder aufgrund
                            gesetzlicher Pflichten erforderlich.
                        </p>

                        <h2>5. Kontakt per E-Mail oder Telefon</h2>

                        <p>
                            Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir die
                            von Ihnen übermittelten personenbezogenen Daten, um Ihre Anfrage zu
                            beantworten. Dazu können insbesondere gehören:
                        </p>

                        <ul>
                            <li>Name</li>
                            <li>E-Mail-Adresse</li>
                            <li>Telefonnummer</li>
                            <li>Inhalt Ihrer Nachricht</li>
                            <li>Kommunikationsverlauf</li>
                            <li>Zeitpunkt der Kontaktaufnahme</li>
                        </ul>

                        <p>
                            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage auf
                            vorvertragliche Maßnahmen oder einen späteren Vertrag gerichtet ist. In
                            anderen Fällen erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1
                            lit. f DSGVO. Unser berechtigtes Interesse liegt in der Bearbeitung und
                            Beantwortung Ihrer Anfrage.
                        </p>

                        <p>
                            Bei der Kommunikation per E-Mail können die übermittelten Daten über den
                            jeweiligen E-Mail-Dienst verarbeitet werden. Für die Datenverarbeitung
                            durch den jeweiligen E-Mail-Anbieter gelten zusätzlich dessen
                            Datenschutzbestimmungen.
                        </p>

                        <h2>6. Kontakt per WhatsApp</h2>

                        <p>
                            Wenn Sie uns über WhatsApp kontaktieren, verarbeiten wir die von Ihnen
                            übermittelten Daten, um Ihre Anfrage zu beantworten. Dazu können
                            insbesondere gehören:
                        </p>

                        <ul>
                            <li>Name</li>
                            <li>Telefonnummer</li>
                            <li>
                                Profilinformationen, soweit diese von Ihnen sichtbar gemacht werden
                            </li>
                            <li>Inhalt Ihrer Nachricht</li>
                            <li>Kommunikationsverlauf</li>
                            <li>Zeitpunkt der Kontaktaufnahme</li>
                        </ul>

                        <p>
                            Anbieter des Dienstes ist WhatsApp Ireland Limited, 4 Grand Canal
                            Square, Grand Canal Harbour, Dublin 2, Irland.
                        </p>

                        <p>
                            Bitte beachten Sie, dass bei der Nutzung von WhatsApp personenbezogene
                            Daten auch durch WhatsApp verarbeitet werden können. Auf Art und Umfang
                            dieser Verarbeitung haben wir keinen vollständigen Einfluss. Es gelten
                            zusätzlich die Datenschutzhinweise von WhatsApp.
                        </p>

                        <p>
                            Die Nutzung von WhatsApp ist freiwillig. Sie können uns alternativ
                            jederzeit per E-Mail oder über das Kontaktformular kontaktieren.
                        </p>

                        <p>
                            Rechtsgrundlage für die Verarbeitung Ihrer an uns übermittelten Daten
                            ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage auf vorvertragliche
                            Maßnahmen oder einen späteren Vertrag gerichtet ist. In anderen Fällen
                            erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                            Unser berechtigtes Interesse liegt in der einfachen und schnellen
                            Kommunikation mit Interessenten und Kunden.
                        </p>

                        <h2>7. Cookies</h2>

                        <p>Diese Website verwendet derzeit keine Cookies.</p>

                        <p>
                            Es werden keine Tracking-Cookies, Marketing-Cookies oder Analyse-Cookies
                            eingesetzt. Insbesondere verwenden wir derzeit keine Analyse-Tools wie
                            Google Analytics und keine Marketing-Pixel wie Meta Pixel, TikTok Pixel
                            oder vergleichbare Tracking-Technologien.
                        </p>

                        <p>
                            Sollten künftig technisch notwendige Cookies oder
                            einwilligungspflichtige Cookies eingesetzt werden, wird diese
                            Datenschutzerklärung entsprechend aktualisiert. Soweit gesetzlich
                            erforderlich, wird vor dem Einsatz eine Einwilligung eingeholt.
                        </p>

                        <h2>8. Analyse- und Tracking-Tools</h2>

                        <p>
                            Diese Website verwendet derzeit keine Analyse-Tools wie Google Analytics
                            und keine Marketing-Pixel wie Meta Pixel, TikTok Pixel oder
                            vergleichbare Tracking-Technologien.
                        </p>

                        <p>
                            Es findet derzeit keine Auswertung des Nutzerverhaltens zu Marketing-,
                            Werbe- oder Analysezwecken statt.
                        </p>

                        <p>
                            Falls solche Tools künftig eingesetzt werden, wird diese
                            Datenschutzerklärung entsprechend aktualisiert. Soweit gesetzlich
                            erforderlich, werden solche Tools erst nach Ihrer vorherigen
                            Einwilligung aktiviert.
                        </p>

                        <h2>9. Externe Links</h2>

                        <p>
                            Diese Website kann Links zu externen Websites enthalten, zum Beispiel zu
                            Kommunikationsdiensten, sozialen Netzwerken oder anderen externen
                            Angeboten.
                        </p>

                        <p>
                            Wenn Sie auf einen externen Link klicken, verlassen Sie unsere Website.
                            Für die Datenverarbeitung auf den externen Websites ist der jeweilige
                            Anbieter verantwortlich. Bitte beachten Sie die Datenschutzhinweise der
                            jeweiligen Anbieter.
                        </p>

                        <h2>10. Weitergabe von Daten</h2>

                        <p>
                            Eine Weitergabe personenbezogener Daten an Dritte erfolgt nur, wenn dies
                            zur Bearbeitung Ihrer Anfrage, zur Durchführung eines Vertrags, aufgrund
                            gesetzlicher Pflichten oder auf Grundlage Ihrer Einwilligung
                            erforderlich ist.
                        </p>

                        <p>Eine Weitergabe Ihrer Daten zu Werbezwecken erfolgt nicht.</p>

                        <h2>11. Speicherdauer</h2>

                        <p>
                            Wir speichern personenbezogene Daten nur so lange, wie dies für den
                            jeweiligen Zweck erforderlich ist.
                        </p>

                        <p>
                            Anfragen über das Kontaktformular, per E-Mail, Telefon oder WhatsApp
                            speichern wir so lange, wie dies für die Bearbeitung der Anfrage und
                            eine mögliche anschließende Zusammenarbeit erforderlich ist.
                        </p>

                        <p>
                            Wenn aus der Anfrage ein Vertragsverhältnis entsteht, können gesetzliche
                            Aufbewahrungspflichten gelten. In diesem Fall werden die Daten
                            entsprechend der gesetzlichen Fristen gespeichert und anschließend
                            gelöscht, sofern keine weiteren gesetzlichen Gründe für eine Speicherung
                            bestehen.
                        </p>

                        <h2>12. Ihre Rechte</h2>

                        <p>
                            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
                            das Recht auf:
                        </p>

                        <ul>
                            <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
                            <li>Berichtigung unrichtiger oder unvollständiger Daten</li>
                            <li>Löschung Ihrer Daten</li>
                            <li>Einschränkung der Verarbeitung</li>
                            <li>Datenübertragbarkeit</li>
                            <li>Widerspruch gegen die Verarbeitung</li>
                            <li>
                                Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft
                            </li>
                        </ul>

                        <p>
                            Wenn Sie eines dieser Rechte ausüben möchten, können Sie sich jederzeit
                            an uns wenden:
                        </p>

                        <p>
                            <a href="mailto:nexonstudio24@gmail.com">nexonstudio24@gmail.com</a>
                        </p>

                        <h2>13. Widerspruch gegen die Verarbeitung</h2>

                        <p>
                            Wenn wir personenbezogene Daten auf Grundlage von Art. 6 Abs. 1 lit. f
                            DSGVO verarbeiten, haben Sie das Recht, aus Gründen, die sich aus Ihrer
                            besonderen Situation ergeben, jederzeit gegen diese Verarbeitung
                            Widerspruch einzulegen.
                        </p>

                        <p>
                            Wenn Sie Widerspruch einlegen, werden wir Ihre personenbezogenen Daten
                            nicht mehr verarbeiten, es sei denn, es liegen zwingende schutzwürdige
                            Gründe für die Verarbeitung vor oder die Verarbeitung dient der
                            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                        </p>

                        <h2>14. Widerruf einer Einwilligung</h2>

                        <p>
                            Wenn eine Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese
                            Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
                        </p>

                        <p>
                            Die Rechtmäßigkeit der Verarbeitung, die bis zum Widerruf erfolgt ist,
                            bleibt vom Widerruf unberührt.
                        </p>

                        <h2>15. Beschwerderecht bei einer Aufsichtsbehörde</h2>

                        <p>
                            Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen
                            Daten gegen Datenschutzrecht verstößt, haben Sie das Recht, sich bei
                            einer Datenschutzaufsichtsbehörde zu beschweren.
                        </p>

                        <p>
                            Sie können sich insbesondere an die Datenschutzaufsichtsbehörde Ihres
                            Bundeslandes oder an jede andere zuständige Datenschutzaufsichtsbehörde
                            wenden.
                        </p>

                        <h2>16. SSL- bzw. TLS-Verschlüsselung</h2>

                        <p>
                            Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw.
                            TLS-Verschlüsselung.
                        </p>

                        <p>
                            Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
                            des Browsers mit „https://“ beginnt und ein Schloss-Symbol angezeigt
                            wird.
                        </p>

                        <p>
                            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können Daten, die
                            Sie an uns übermitteln, nicht ohne Weiteres von Dritten mitgelesen
                            werden.
                        </p>

                        <h2>17. Änderungen dieser Datenschutzerklärung</h2>

                        <p>
                            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich
                            technische, rechtliche oder organisatorische Änderungen ergeben.
                        </p>

                        <p>Es gilt die jeweils aktuelle Version dieser Datenschutzerklärung.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DatenschutzPage;
