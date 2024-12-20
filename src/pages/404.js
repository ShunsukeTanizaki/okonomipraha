import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import '../styles/404.scss';
// import SEO from '../components/seo';

const NotFound = () => {
    return (
        <Layout>
            {/* <SEO title="404 Not Found" description="Page not found" /> */}
            <div className="not-found">
                <h1>404 Not Found</h1>
                <Link to="/">To Top Page</Link>
            </div>
        </Layout>
    );
};

export default NotFound;

export const Head = () => (
    <>
        <title>404|Izakaya</title>
        <meta name="description" content="Page not found…" />
        <link
            rel="stylesheet"
            href="https://unpkg.com/ress/dist/ress.min.css"
        />
    </>
);
