import React from 'react';
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

const Header = () => {
    const { languages, originalPath } = useI18next();
    const { t } = useTranslation();
    return (
        <div className="header">
            <ul className="languages">
                {languages.map((lng) => (
                    <li key={lng}>
                        <Link to={originalPath} language={lng}>
                            {lng}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Header;
