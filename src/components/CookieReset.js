import React, { useEffect, useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const CookieReset = () => {
    const { t } = useTranslation();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // クライアントサイドでのみ実行
        setIsClient(true);
    }, []);

    const handleCookieReset = () => {
        if (isClient) {
            // Cookie設定をリセットする
            document.cookie =
                'gatsbyCookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            window.location.reload();
        }
    };

    return (
        <div className="cookieMessage">
            {isClient && (
                <a onClick={handleCookieReset}>{t('Cookie Settings')}</a>
            )}
        </div>
    );
};

export default CookieReset;
