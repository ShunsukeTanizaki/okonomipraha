import * as React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';

export default function Home() {
    const { t } = useTranslation();
    return (
        <Layout>
            <div>
                <div>{t('greeting')}</div>
            </div>
        </Layout>
    );
}

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
