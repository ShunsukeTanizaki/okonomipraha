import React from 'react';
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

const Footer = () => {
    const { languages, originalPath } = useI18next();
    const { t } = useTranslation();
    return (
        <div className="footer">
            <p>© 2024 IZAKAYA</p>
        </div>
    );
};

export default Footer;
