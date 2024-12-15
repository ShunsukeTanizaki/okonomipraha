import React from 'react';
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

const Footer = () => {
    const { languages, originalPath } = useI18next();
    const { t } = useTranslation();
    return (
        <div className="footer">
            <p>Footer</p>
            <div className="footer__links">
                <Link to="/">{t('Home')}</Link>
                <p>{t('Contact')}</p>
                <p>{t('Address')}</p>
                {/* <ul className="footer__links--languages">
                    {languages.map((lng) => (
                        <li key={lng}>
                            <Link to={originalPath} language={lng}>
                                {lng}
                            </Link>
                        </li>
                    ))}
                </ul> */}
            </div>
        </div>
    );
};

export default Footer;
