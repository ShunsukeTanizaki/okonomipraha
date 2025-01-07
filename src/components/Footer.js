import React from 'react';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import CookieReset from './CookieReset';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <div className="footer--line"></div>
            <div className="footer__wrap">
                <div className="footer__inner">
                    <div className="footer__block">
                        <h3>{t('Reservation & contact')}</h3>
                        <ul className="footer__block--list">
                            <li>
                                <a href="tel:+420606786822">
                                    (+420) 606 786 822
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@okonomipraha.cz"
                                    rel="mailto:info@ibcnadoby.cz"
                                >
                                    info@okonomipraha.cz
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__block">
                        <h3>{t('Follow the latest news')}</h3>
                        <ul className="footer__block--list">
                            <li>
                                <a
                                    href="https://www.instagram.com/okonomiyakiizakaya/"
                                    target="blank"
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__inner">
                    <div className="footer__block">
                        <h3>{t('Address')}</h3>
                        <address className="footer__block--text">
                            {t('Veletržní 820/73')}
                            <br />
                            {t('170 00 Prague 7')}
                        </address>
                        <div className="footer__map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.312531171503!2d14.423827527185065!3d50.09948032147384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95ac926732d3%3A0x7967a05c77319a74!2s%22MATSURI%22%20OKONOMIYAKI%20%26%20IZAKAYA!5e0!3m2!1sja!2sjp!4v1734949535075!5m2!1sja!2sjp"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <a
                            href="https://maps.app.goo.gl/DqBJrs6ehK3W5M1HA"
                            target="blank"
                        >
                            {t('Open in Google Maps')}
                        </a>
                    </div>
                </div>

                <div className="footer__inner">
                    <div className="footer__block">
                        <h3>{t('Invoicing details')}</h3>
                        <p className="footer__block--text">
                            {t('Happy Hedge Hog Habour House s.r.o.')}
                            <br />
                            {t('Rybná 716/24')}
                            <br />
                            {t('110 00 Prague 1')}
                            <br />
                            <span className="footer__block--business-id">
                                {t('Business ID (IČ): 21474991')}
                            </span>
                        </p>
                    </div>

                    <div className="footer__block">
                        <h3>{t('Important documents')}</h3>
                        <ul className="footer__block--list">
                            <li>
                                <CookieReset />
                            </li>
                            <li>
                                <Link to="/privacy-policy">
                                    {t('Privacy Policy')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copy-light">
                <p>© 2024 IZAKAYA</p>
            </div>
        </footer>
    );
};

export default Footer;
