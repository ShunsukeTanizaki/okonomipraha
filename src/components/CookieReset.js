import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const CookieReset = () => {
    const { t } = useTranslation();

    return (
        <div className="cookieMessage">
            <a
                onClick={() => {
                    // Cookie設定をリセットする
                    document.cookie =
                        'gatsbyCookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                    window.location.reload();
                }}
            >
                {t('Cookie Settings')}
            </a>
        </div>
    );
};

export default CookieReset;
