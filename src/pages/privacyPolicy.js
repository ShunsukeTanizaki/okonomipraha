import * as React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';
// import { StaticImage } from 'gatsby-plugin-image';

const privacyPolicy = () => {
    const { t } = useTranslation();
    return (
        <Layout>
            <h1>{t('Privacy Policy')}</h1>
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
        <title>Privacy Policy|Izakaya</title>
        <meta name="description" content="This is the homepage…" />
        {/* <!-- reset.css ress --> */}
        <link
            rel="stylesheet"
            href="https://unpkg.com/ress/dist/ress.min.css"
        />
    </>
);
