import * as React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/top.scss';

const Top = () => {
    const { t } = useTranslation();
    return (
        <Layout>
            {/* <div> */}
            <div className="top">
                <div className="top__image">
                    <h1>{t('greeting')}</h1>
                </div>
                <StaticImage alt="" src="../images/hiroki-komiya.png" />
            </div>
            {/* </div> */}
        </Layout>
    );
};

export default Top;

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
        <title>Izakaya</title>
        <meta name="description" content="This is the homepage…" />
        {/* <!-- reset.css ress --> */}
        <link
            rel="stylesheet"
            href="https://unpkg.com/ress/dist/ress.min.css"
        />
    </>
);
