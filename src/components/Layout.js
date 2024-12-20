import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/global.scss';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="layout">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
