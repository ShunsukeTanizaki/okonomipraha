import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import '../styles/index.scss';
import CookieBanner from '../components/CookieBanner';

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
