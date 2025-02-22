import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';

const privacyPolicy = () => {
    const { t } = useTranslation();
    return (
        <Layout>
            <div className="privacy-policy">
                <h1>{t('Privacy Policy')}</h1>
                <p>
                    {t(
                        'Our restaurant is committed to protecting the privacy of our customers in the Czech Republic. This policy explains how we collect, use, store, and share your personal information.'
                    )}
                </p>
                <h2>{t('Information We Collect')}</h2>
                <ul>
                    <li>{t('Name')}</li>
                    <li>{t('Email address')}</li>
                    <li>{t('Phone number')}</li>
                    <li>{t('Reservation details')}</li>
                </ul>
                <h2>{t('Cookies')}</h2>
                <p>
                    {t(
                        'Our website uses cookies to enhance user experience. This includes traffic analysis through Google Analytics and Facebook Pixel.'
                    )}
                </p>
                <h2>{t('Third-Party Services')}</h2>
                <p>{t('We use the following third-party services:')}</p>
                <ul>
                    <li>
                        {t(
                            'Google Analytics: Traffic analysis of site visitors'
                        )}
                    </li>
                    <li>{t('Facebook Pixel: Marketing purposes')}</li>
                </ul>
                <h2>{t('Contact')}</h2>
                <p>{t('For inquiries, please contact us at:')}</p>
                <p>
                    {t('Email')}:{t(' ')}
                    <span>okonomiyakiizakaya@gmail.com</span>
                </p>
                <p>
                    {t('Address')}
                    <span>{t('Rybná 716/24 110 00 Praha 1')}</span>
                </p>

                <div className="link">
                    <Link to={t('/')}>{t('To Top')}</Link>
                </div>
            </div>
        </Layout>
    );
};

export default privacyPolicy;

export const query = graphql`
    query ($language: String!) {
        locales: allLocale(filter: { language: { eq: $language } }) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`;
export const Head = () => (
    <>
        <title>Privacy Policy | Izakaya</title>
        <meta
            name="description"
            content="Privacy-policy and Official information"
        />
        {/* <!-- reset.css ress --> */}
        <link
            rel="stylesheet"
            href="https://unpkg.com/ress/dist/ress.min.css"
        />
    </>
);
