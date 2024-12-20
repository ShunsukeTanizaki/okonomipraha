import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import '../styles/takeaway.scss';
import { useState } from 'react';

export default function Takeaway({ data }) {
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
            <div className="takeaway">
                <h1>{t('Delivary MENU')}</h1>
                <p>12:00-14:00 / 17:00-21:00</p>
                <div className="takeaway__gallery">
                    {categories.map((category) => (
                        <div key={category.id}>
                            <h2>--- {t(category.name)} ---</h2>
                            <span className="text-left">{category.note}</span>
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
                        <div className="modal__content">
                            <span className="modal__close" onClick={closeModal}>
                                &times;
                            </span>
                            <img
                                src={selectedItem.image.publicURL}
                                alt={selectedItem.name}
                                className="takeaway__image"
                            />
                            <h2>{t(selectedItem.name)}</h2>
                            <div className="modal__info">
                                <p className="takeaway__price">
                                    {selectedItem.price},- Kč
                                </p>
                                <p>{selectedItem.grams}</p>
                                <p className="text-left">
                                    {t(selectedItem.note)}
                                </p>
                                <p className="text-left">
                                    {t('Allergy: ')}
                                    {selectedItem.allergy}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="takeaway__others">
                    <h3>“Informane o alergenech Vám poskytne obsluha” </h3>
                    <p>One Take away package 20,- </p>
                    <h3>Set for 2 people</h3>
                    <h4>O2-1 Top hits set 750,-</h4>
                    <p>○KARAAGE ○Gyoza ○Japanese ice ○Okonomiyaki Pork</p>
                    <h4>O2-2 Vegan set 750,-</h4>
                    <p>
                        ○Tsukemono ○Gyoza ○Wakame ○Tofu Teriyaki ○Japanese rice
                        x 2
                    </p>
                    <h4>O2-3 Osaka set 780,-</h4>
                    <p>
                        ○Takoyaki ○Kushi Katsu ○Okonomiyaki Chicken Egg
                        ○Japanese rice
                    </p>
                </div>
            </div>
        </Layout>
    );
}

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
        <title>Take away|祭：お好み焼き居酒屋 プラハ</title>
        <meta
            name="description"
            content="Takeaway menu for祭：お好み焼き居酒屋 プラハ"
        />
        <link
            rel="stylesheet"
            href="https://unpkg.com/ress/dist/ress.min.css"
        />
    </>
);
