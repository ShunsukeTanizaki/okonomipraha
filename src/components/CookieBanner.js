import React from 'react';
import { useTranslation, Link } from 'gatsby-plugin-react-i18next';
import CookieConsent from 'react-cookie-consent';

const CookieBanner = () => {
    const { t } = useTranslation();

    return (
        <CookieConsent
            location="bottom"
            cookieName="gatsbyCookieConsent"
            enableDeclineButton
            flipButtons
            expires={150}
        >
            {t(
                'This website uses cookies. Please refer to our policy for more details.'
            )}{' '}
            <br />
            <Link className="link" to="/privacy-policy">
                {t('Privacy Policy')}
            </Link>
        </CookieConsent>
    );
};

export default CookieBanner;
