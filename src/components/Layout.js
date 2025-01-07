import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="layout">
                {children}
                <CookieBanner />
            </div>
            <Footer />
        </>
    );
};

export default Layout;
