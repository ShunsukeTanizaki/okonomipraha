import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
// import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { useState } from 'react';
// import '../styles/takeaway.scss';

const Takeaway = ({ data }) => {
    const categories = data.allTakeawayJson.nodes; // JSONデータ
    const { t } = useTranslation(); // 翻訳データ

    // モーダル表示管理
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    // モーダルを開く関数
    const openModal = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    // モーダルを閉じる関数
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    return (
        <Layout>
            <div className="top">
                <div className="top__kv">
                    <div className="top__kv--image">
                        <h1 className="top__kv--text">
                            {t('IZAKAYA')} <br />
                            {t('Veletržní 73')}
                        </h1>
                    </div>
                    <div className="top__kv--line"></div>
                </div>
            </div>

            <div className="takeaway">
                <div className="takeaway__info">
                    <h1>{t('Delivery MENU')}</h1>
                    <p>{t('One Take away package 20,-')}</p>
                    <h3 className="takeaway__info--open">
                        {t('12:00-14:00 / 17:00-21:00')}
                    </h3>
                    <h4 className="takeaway__info--allergy">
                        {t('“Informane o alergenech Vám poskytne obsluha”')}
                    </h4>
                </div>

                <div className="takeaway__gallery">
                    {categories.map((category) => (
                        <div key={category.id}>
                            <h2 className="menu-category">
                                {t(category.name)}
                            </h2>
                            <p>{category.note}</p>
                            <div className="takeaway__category">
                                {category.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="takeaway__item"
                                    >
                                        <img
                                            src={item.image.publicURL}
                                            alt={item.name}
                                            onClick={() => openModal(item)}
                                            className="takeaway__image"
                                        />
                                        <div className="takeaway-info">
                                            <h3>{t(item.name)}</h3>
                                            <p className="takeaway__price">
                                                {item.price},- Kč
                                            </p>
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
                            <img
                                src={selectedItem.image.publicURL}
                                alt={selectedItem.name}
                                className="takeaway__image modal__item--image"
                            />
                            <h2>{t(selectedItem.name)}</h2>
                            <div className="modal__info">
                                <p className="takeaway__price">
                                    {selectedItem.price},- Kč
                                </p>
                                <p>{selectedItem.grams}</p>

                                <p>{t(selectedItem.note)}</p>
                                <p>
                                    {t('Allergy: ')}
                                    {selectedItem.allergy}
                                </p>
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
                        <span>○Japanese ice</span>
                        <span>○Okonomiyaki Pork</span>
                    </p>
                    <h4>O2-2 Vegan set 750,-</h4>
                    <p>
                        <span>○Tsukemono</span>
                        <span>○Gyoza</span>
                        <span>○Wakame</span>
                        <span>○Tofu Teriyaki</span>
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

export default Takeaway;

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
    </>
);
