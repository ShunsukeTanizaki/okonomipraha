import React, { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { CookieNotice } from 'gatsby-cookie-notice';
import '../styles/cookieMessage.scss';

const Cookie = () => {
    const [isPopUpVisible, setPopUpVisible] = useState(false);
    const { t } = useTranslation();

    const togglePopUp = () => {
        setPopUpVisible(!isPopUpVisible);
    };

    return (
        <div className="cookieMessage">
            <a onClick={togglePopUp}>{t('Cookie Settings')}</a>

            {isPopUpVisible && (
                <div className="cookieMessage__popUp">
                    {/* ポップアップの中身 */}

                    <CookieNotice>
                        <h4>
                            In order for the website to work as intended, we use
                            the following cookies 🍪
                        </h4>
                        <p>
                            In order to provide you with the best browsing
                            experience on this website, we need your consent to
                            process cookies. They make it easier to find what
                            you are looking for, save you lots of clicks and
                            stop you from seeing ads for things you are not
                            interested in. <br />
                            Cookies are small files that are stored in your
                            browser and sent back to our server as you browse
                            the web. They help us to get to know you better,
                            analyse your behaviour on the site and thus allow us
                            to tailor the site to your preferences.
                            <br />
                            We respect your privacy and the fact that you may
                            refuse some cookies. However, please be aware that
                            blocking some cookies may affect the functionality
                            of this website and the services offered to you.
                        </p>
                    </CookieNotice>

                    {/* <button onClick={togglePopUp}>閉じる</button> */}
                </div>
            )}
        </div>
    );
};

export default Cookie;
