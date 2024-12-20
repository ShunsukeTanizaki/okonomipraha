import React from 'react';
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

const Header = () => {
    const { languages, originalPath } = useI18next();
    const { t } = useTranslation();
    console.log();

    return (
        <div className="header">
            <div className="header__links">
                <Link to="/" className="header__links--home">
                    {t('Izakaya')}
                </Link>
                {/* <Link to="/menu">{t('Menu')}</Link> */}
                {/* <Link to="/takeaway">{t('Takeaway')}</Link> */}
                <ul className="header__links--languages">
                    {languages.map((lng) => (
                        <li key={lng}>
                            <Link to={originalPath} language={lng}>
                                {lng}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
