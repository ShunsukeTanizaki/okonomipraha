import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import AllergyInfoWithModal from '../components/AllergyInfo';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { useEffect, useState } from 'react';
import '../styles/index.scss';

const Top = ({ data }) => {
    // JSONデータ
    const categories = data.allTakeawayJson.nodes;
    const { t } = useTranslation(); // 翻訳データ

    // クライアントサイドの処理を管理
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // クライアントサイドでのみ実行する処理
        setIsClient(true);

        // ネオンの処理
        const signs = document.querySelectorAll('x-sign');
        const randomIn = (min, max) =>
            Math.floor(Math.random() * (max - min + 1) + min);

        const mixupInterval = (el) => {
            const ms = randomIn(2000, 4000);
            el.style.setProperty('--interval', `${ms}ms`);
        };

        signs.forEach((el) => {
            mixupInterval(el);
            el.addEventListener('webkitAnimationIteration', () => {
                mixupInterval(el);
            });
        });
    }, []);

    // モーダル表示管理
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    // モーダルを開く関数
    const openModal = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
        if (isClient) {
            document.body.classList.add('modal-open');
        }
    };

    // モーダルを閉じる関数
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
        if (isClient) {
            document.body.classList.remove('modal-open');
        }
    };

    return (
        <Layout>
            <div className="top">
                <div className="top__kv">
                    <div className="top__kv--image">
                        <x-sign className="top__kv--text">
                            {t('IZAKAYA')} <br />
                            {t('Veletržní 73')}
                        </x-sign>
                    </div>
                    <div className="top__kv--line"></div>
                </div>
            </div>

            <div className="takeaway">
                <div className="takeaway__info">
                    <h1>{t('TAKE AWAY MENU')}</h1>
                    <p>{t('One Take away package 20,-')}</p>
                    <h3 className="takeaway__info--open">
                        {t('12:00-14:00 / 17:00-21:00')}
                    </h3>
                    <AllergyInfoWithModal />
                </div>

                <div className="takeaway__gallery">
                    {categories.map((category) => (
                        <div key={category.id}>
                            <h2 className="menu-category">
                                {t(category.name)}
                            </h2>
                            <p className="takeaway__gallery--note">
                                {category.note}
                            </p>
                            <div className="takeaway__category">
                                {category.items
                                    .filter((item) => item.display) // display: true のものだけを残す
                                    .map((item) => (
                                        <div
                                            key={item.id}
                                            className="takeaway__item"
                                            onClick={() => openModal(item)}
                                        >
                                            <div className="takeaway__item--content">
                                                <img
                                                    src={item.image.publicURL}
                                                    alt={item.name}
                                                    className="takeaway__item--image"
                                                />
                                                <div className="takeaway__item--info">
                                                    <h3>{t(item.name)}</h3>
                                                    <p className="takeaway__item--price">
                                                        {item.price},- Kč
                                                    </p>
                                                </div>
                                                {item.stock === 0 && (
                                                    <div className="takeaway__item--status-label sold-out">
                                                        <span>
                                                            {t('Waiting list')}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
                {/* モーダル */}
                {isModalOpen && selectedItem && (
                    <div className="modal">
                        <div className="modal__item">
                            <span className="modal__close" onClick={closeModal}>
                                &times;
                            </span>
                            <div className="modal__item--content">
                                <img
                                    src={selectedItem.image.publicURL}
                                    alt={selectedItem.name}
                                    className="takeaway__item--image modal__item--image"
                                />
                                <h2>{t(selectedItem.name)}</h2>
                                <div className="modal__info">
                                    <p className="takeaway__item--price">
                                        {selectedItem.price},- Kč
                                    </p>
                                    <p>{selectedItem.grams}</p>

                                    <p className="takeaway__item--note">
                                        {t(selectedItem.note)}
                                    </p>
                                    <p>
                                        {t('Allergy: ')}
                                        {selectedItem.allergy}
                                    </p>
                                </div>
                                {selectedItem.stock === 0 && (
                                    <div className="takeaway__item--status-label modal__item--status-label sold-out">
                                        <span>{t('Waiting list')}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="takeaway__others">
                    <h2 className="menu-category">{t('Recommendation')}</h2>
                    <h3>Share for 2</h3>
                    <h4>O2-1 Top hits set 750,-</h4>
                    <p>
                        <span>○KARAAGE</span>
                        <span>○Gyoza</span>
                        <span>○Japanese rice</span>
                        <span>○Okonomiyaki Pork</span>
                    </p>
                    <h4>O2-2 Vegan set 750,-</h4>
                    <p>
                        <span>○Tsukemono</span>
                        <span>○Gyoza x 2</span>
                        <span>○Wakame</span>
                        <span>○Japanese rice x 2</span>
                    </p>
                    <h4>O2-3 Osaka set 780,-</h4>
                    <p>
                        <span>○Takoyaki</span>
                        <span>○Kushi Katsu</span>
                        <span>○Okonomiyaki Chicken Egg</span>
                        <span>○Japanese rice</span>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Top;

export const query = graphql`
    query ($language: String!) {
        locales: allLocale(filter: { language: { eq: $language } }) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
        allTakeawayJson {
            nodes {
                id
                name
                note
                items {
                    id
                    display
                    stock
                    name
                    grams
                    price
                    image {
                        publicURL
                    }
                    allergy
                    note
                }
            }
        }
    }
`;

export const Head = () => (
    <>
        <title>IZAKAYA</title>
        <meta name="description" content="Veletržní 73  Izakaya Homepage" />
        <link
            rel="stylesheet"
            href="https://unpkg.com/ress/dist/ress.min.css"
        />
        {/* <link rel="stylesheet" href="../styles/index.scss" /> */}
    </>
);
