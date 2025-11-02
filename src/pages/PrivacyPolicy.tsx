import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { memo } from 'react';

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const isFrench = i18n.language === 'fr';

  return (
    <>
      <Helmet>
        <title>
          {isFrench
            ? 'Politique de Confidentialité | Business Legend Podcast'
            : 'Privacy Policy | Business Legend Podcast'}
        </title>
        <meta
          name="description"
          content={
            isFrench
              ? 'Politique de confidentialité et protection des données personnelles de Business Legend Podcast, conforme au RGPD.'
              : 'Privacy Policy and personal data protection of Business Legend Podcast, GDPR compliant.'
          }
        />
        <link rel="canonical" href="https://businesslegend.co/privacy-policy" />
      </Helmet>

      <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto prose prose-invert prose-orange">
          {isFrench ? (
            <>
              <h1 className="text-4xl font-bold mb-8 text-foreground">
                Politique de Confidentialité
              </h1>
              
              <p className="text-muted-foreground mb-6">
                <strong>Date de dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
                <p className="text-foreground/90">
                  Business Legend, édité par <strong>NLG Consulting</strong>, s'engage à protéger
                  la vie privée de ses visiteurs et utilisateurs. Cette politique de confidentialité
                  explique comment nous collectons, utilisons et protégeons vos données personnelles
                  conformément au Règlement Général sur la Protection des Données (RGPD) et à la
                  directive ePrivacy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  2. Responsable du traitement
                </h2>
                <p className="text-foreground/90">
                  <strong>NLG Consulting</strong>
                  <br />
                  Représenté par Gregory Brenig
                  <br />
                  Email : contact@businesslegend.co
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  3. Données collectées
                </h2>
                <p className="text-foreground/90 mb-4">Nous collectons les données suivantes :</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>
                    <strong>Données de navigation :</strong> via Google Analytics 4 (adresse IP
                    anonymisée, pages visitées, durée de visite, appareil utilisé, localisation
                    approximative)
                  </li>
                  <li>
                    <strong>Données de contact :</strong> nom, prénom, adresse email, entreprise,
                    message (via formulaire de contact)
                  </li>
                  <li>
                    <strong>Cookies :</strong> cookies analytiques (Google Analytics) uniquement
                    après votre consentement explicite
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  4. Finalités du traitement
                </h2>
                <p className="text-foreground/90 mb-4">Vos données sont utilisées pour :</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>Analyser l'audience et améliorer l'expérience utilisateur</li>
                  <li>Répondre à vos demandes de contact ou de partenariat</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Base légale</h2>
                <p className="text-foreground/90">
                  Le traitement de vos données repose sur :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>
                    <strong>Votre consentement</strong> (art. 6.1.a RGPD) pour les cookies
                    analytiques
                  </li>
                  <li>
                    <strong>L'intérêt légitime</strong> (art. 6.1.f RGPD) pour l'analyse
                    d'audience anonymisée
                  </li>
                  <li>
                    <strong>L'exécution d'un contrat</strong> (art. 6.1.b RGPD) pour répondre à
                    vos demandes
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  6. Durée de conservation
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>
                    <strong>Données de navigation :</strong> 26 mois (Google Analytics)
                  </li>
                  <li>
                    <strong>Cookies de consentement :</strong> 6 mois
                  </li>
                  <li>
                    <strong>Données de contact :</strong> 3 ans maximum après le dernier contact
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  7. Destinataires des données
                </h2>
                <p className="text-foreground/90 mb-4">
                  Vos données peuvent être partagées avec :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>
                    <strong>Google Analytics :</strong> pour l'analyse statistique (sous-traitant
                    certifié)
                  </li>
                  <li>
                    <strong>Hébergeurs :</strong> pour le stockage sécurisé des données
                  </li>
                </ul>
                <p className="text-foreground/90 mt-4">
                  Nous ne vendons ni ne louons vos données à des tiers.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Vos droits</h2>
                <p className="text-foreground/90 mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>
                    <strong>Droit d'accès :</strong> obtenir une copie de vos données
                  </li>
                  <li>
                    <strong>Droit de rectification :</strong> corriger des données inexactes
                  </li>
                  <li>
                    <strong>Droit à l'effacement :</strong> demander la suppression de vos données
                  </li>
                  <li>
                    <strong>Droit d'opposition :</strong> vous opposer au traitement
                  </li>
                  <li>
                    <strong>Droit à la portabilité :</strong> recevoir vos données dans un format
                    structuré
                  </li>
                  <li>
                    <strong>Droit de retirer votre consentement</strong> à tout moment
                  </li>
                </ul>
                <p className="text-foreground/90 mt-4">
                  Pour exercer vos droits, contactez-nous à{' '}
                  <a
                    href="mailto:contact@businesslegend.co"
                    className="text-[hsl(16,100%,50%)] hover:underline"
                  >
                    contact@businesslegend.co
                  </a>
                  .
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  9. Cookies et consentement
                </h2>
                <p className="text-foreground/90">
                  Nous utilisons des cookies uniquement après votre consentement explicite. Vous
                  pouvez à tout moment modifier vos préférences via le bouton{' '}
                  <button
                    onClick={() => (window as any).openCookieSettings?.()}
                    className="text-[hsl(16,100%,50%)] hover:underline font-medium"
                  >
                    "Paramètres des cookies"
                  </button>{' '}
                  en bas de page.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  10. Sécurité des données
                </h2>
                <p className="text-foreground/90">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
                  pour protéger vos données contre tout accès non autorisé, perte ou divulgation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  11. Modifications de cette politique
                </h2>
                <p className="text-foreground/90">
                  Nous nous réservons le droit de modifier cette politique à tout moment. Toute
                  modification sera publiée sur cette page avec une nouvelle date de mise à jour.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Contact</h2>
                <p className="text-foreground/90">
                  Pour toute question relative à cette politique de confidentialité :
                  <br />
                  Email :{' '}
                  <a
                    href="mailto:contact@businesslegend.co"
                    className="text-[hsl(16,100%,50%)] hover:underline"
                  >
                    contact@businesslegend.co
                  </a>
                </p>
              </section>
            </>
          ) : (
            <>
              <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
              
              <p className="text-muted-foreground mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
                <p className="text-foreground/90">
                  Business Legend, published by <strong>NLG Consulting</strong>, is committed to
                  protecting the privacy of its visitors and users. This privacy policy explains
                  how we collect, use, and protect your personal data in accordance with the
                  General Data Protection Regulation (GDPR) and the ePrivacy Directive.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  2. Data Controller
                </h2>
                <p className="text-foreground/90">
                  <strong>NLG Consulting</strong>
                  <br />
                  Represented by Gregory Brenig
                  <br />
                  Email: contact@businesslegend.co
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  3. Data Collected
                </h2>
                <p className="text-foreground/90 mb-4">We collect the following data:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>
                    <strong>Navigation data:</strong> via Google Analytics 4 (anonymized IP
                    address, pages visited, visit duration, device used, approximate location)
                  </li>
                  <li>
                    <strong>Contact data:</strong> first name, last name, email address, company,
                    message (via contact form)
                  </li>
                  <li>
                    <strong>Cookies:</strong> analytics cookies (Google Analytics) only after your
                    explicit consent
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  4. Purpose of Processing
                </h2>
                <p className="text-foreground/90 mb-4">Your data is used to:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>Analyze audience and improve user experience</li>
                  <li>Respond to your contact or partnership requests</li>
                  <li>Comply with our legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Legal Basis</h2>
                <p className="text-foreground/90">
                  The processing of your data is based on:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>
                    <strong>Your consent</strong> (Art. 6.1.a GDPR) for analytics cookies
                  </li>
                  <li>
                    <strong>Legitimate interest</strong> (Art. 6.1.f GDPR) for anonymized audience
                    analysis
                  </li>
                  <li>
                    <strong>Contract execution</strong> (Art. 6.1.b GDPR) to respond to your
                    requests
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  6. Retention Period
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>
                    <strong>Navigation data:</strong> 26 months (Google Analytics)
                  </li>
                  <li>
                    <strong>Consent cookies:</strong> 6 months
                  </li>
                  <li>
                    <strong>Contact data:</strong> maximum 3 years after last contact
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  7. Data Recipients
                </h2>
                <p className="text-foreground/90 mb-4">Your data may be shared with:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>
                    <strong>Google Analytics:</strong> for statistical analysis (certified
                    processor)
                  </li>
                  <li>
                    <strong>Hosting providers:</strong> for secure data storage
                  </li>
                </ul>
                <p className="text-foreground/90 mt-4">
                  We do not sell or rent your data to third parties.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Your Rights</h2>
                <p className="text-foreground/90 mb-4">
                  Under GDPR, you have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>
                    <strong>Right of access:</strong> obtain a copy of your data
                  </li>
                  <li>
                    <strong>Right of rectification:</strong> correct inaccurate data
                  </li>
                  <li>
                    <strong>Right to erasure:</strong> request deletion of your data
                  </li>
                  <li>
                    <strong>Right to object:</strong> object to processing
                  </li>
                  <li>
                    <strong>Right to data portability:</strong> receive your data in a structured
                    format
                  </li>
                  <li>
                    <strong>Right to withdraw consent</strong> at any time
                  </li>
                </ul>
                <p className="text-foreground/90 mt-4">
                  To exercise your rights, contact us at{' '}
                  <a
                    href="mailto:contact@businesslegend.co"
                    className="text-[hsl(16,100%,50%)] hover:underline"
                  >
                    contact@businesslegend.co
                  </a>
                  .
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  9. Cookies and Consent
                </h2>
                <p className="text-foreground/90">
                  We use cookies only after your explicit consent. You can modify your preferences
                  at any time via the{' '}
                  <button
                    onClick={() => (window as any).openCookieSettings?.()}
                    className="text-[hsl(16,100%,50%)] hover:underline font-medium"
                  >
                    "Cookie Settings"
                  </button>{' '}
                  button at the bottom of the page.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  10. Data Security
                </h2>
                <p className="text-foreground/90">
                  We implement appropriate technical and organizational measures to protect your
                  data from unauthorized access, loss, or disclosure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">
                  11. Changes to this Policy
                </h2>
                <p className="text-foreground/90">
                  We reserve the right to modify this policy at any time. Any changes will be
                  published on this page with a new update date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Contact</h2>
                <p className="text-foreground/90">
                  For any questions regarding this privacy policy:
                  <br />
                  Email:{' '}
                  <a
                    href="mailto:contact@businesslegend.co"
                    className="text-[hsl(16,100%,50%)] hover:underline"
                  >
                    contact@businesslegend.co
                  </a>
                </p>
              </section>
            </>
          )}
        </article>
      </div>
    </>
  );
};

export default memo(PrivacyPolicy);
