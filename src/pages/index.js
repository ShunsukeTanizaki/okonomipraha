import * as React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/index.scss';

export default function Home() {
    const { t } = useTranslation();
    return (
        <Layout>
            <div>
                <div className="top">
                    <h1>{t('greeting')}</h1>
                    <StaticImage
                        alt="猫かわいい！"
                        src="../images/hiroki-komiya.png"
                    />
                </div>
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
export const Head = () => (
    <>
        <title>祭：お好み焼き居酒屋 プラハ</title>
        <meta name="description" content="This is the homepage…" />
        {/* <!-- reset.css ress --> */}
        <link
            rel="stylesheet"
            href="https://unpkg.com/ress/dist/ress.min.css"
        />
    </>
);
