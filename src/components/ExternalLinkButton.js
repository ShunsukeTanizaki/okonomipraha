import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const ExternalLinkButton = ({ textKey, link, color, size = 'M' }) => {
    const { t } = useTranslation();

    return (
        <div
            className={`external-link-button external-link-button--${size.toLowerCase()}`}
        >
            <a
                href={link}
                className="external-link-button__content"
                style={{ '--line-color': color }}
                target="_blank"
                rel="noopener noreferrer"
            >
                {t(textKey)}
            </a>
        </div>
    );
};

export default ExternalLinkButton;
