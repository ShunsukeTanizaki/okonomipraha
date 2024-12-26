import * as React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/top.scss';

const Home = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            <div className="top">
                <div className="top__kv">
                    <div className="top__kv--image">
                        <h1>
                            {t(
                                'Original space for parties and celebrations with Japanese street food in the form of catering'
                            )}
                        </h1>
                    </div>
                </div>
                <StaticImage alt="" src="../images/hiroki-komiya.png" />
            </div>
        </Layout>
    );
};

export default Home;

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
        <meta name="description" content="Veletržní 73  Izakaya Homepage" />
        {/* <!-- reset.css ress --> */}
        <link
            rel="stylesheet"
            href="https://unpkg.com/ress/dist/ress.min.css"
        />
    </>
);
