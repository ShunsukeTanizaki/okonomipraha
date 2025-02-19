import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const NotFound = () => {
    return (
        <Layout>
            <div className="not-found">
                <div>
                    <h1>404 Not Found</h1>
                    <Link to="/">To Top Page</Link>
                </div>
            </div>
        </Layout>
    );
};

export default NotFound;

export const Head = () => (
    <>
        <title>404 | Izakaya</title>
        <meta name="description" content="Page not found…" />
        <link
            rel="stylesheet"
            href="https://unpkg.com/ress/dist/ress.min.css"
        />
        <link rel="stylesheet" href="../styles/index.scss" />
    </>
);
