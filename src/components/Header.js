import React from 'react';
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
// import queryString from 'query-string';
import { useLocation } from '@reach/router';

const Header = () => {
    const { languages, originalPath } = useI18next();
    const { t } = useTranslation();
    const location = useLocation();

    const checkLang = (lng) => {
        let url = location.pathname.substring(1, 3);

        switch (url) {
            case 'ja':
                break;
            case 'en':
                break;
            default:
                url = 'cs';
        }

        const result = lng == url ? true : false;
        return result;
    };

    return (
        <div className="header">
            <div className="header__links">
                <Link to="/" className="header__links--home">
                    {t('IZAKAYA')}
                </Link>
                {/* <Link to="/menu">{t('Menu')}</Link> */}
                {/* <Link to="/takeaway">{t('Takeaway')}</Link> */}
            </div>
            <ul className="header__languages">
                {languages.map((lng) => (
                    <li key={lng}>
                        {!checkLang(lng) ? (
                            <Link to={originalPath} language={lng}>
                                {lng}
                            </Link>
                        ) : null}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Header;
