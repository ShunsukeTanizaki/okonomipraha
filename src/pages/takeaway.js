import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import '../styles/takeaway.scss';
import { useState } from 'react';

export default function Takeaway({ data }) {
    // console.log(data.allTakeawayJson.nodes);
    const categories = data.allTakeawayJson.nodes; // JSONデータ
    // const t = data.locales.edges; // 翻訳データ
    const { t } = useTranslation(); // 翻訳データ
    // console.log(t);

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
                {/* <h1>Take Away</h1> */}
                <h1>{t('Delivary MENU (czk)')}</h1>
                <p>12:00-14:00 / 17:00-21:00</p>
                <div className="takeaway__gallery">
                    {categories.map((category) => (
                        <div key={category.id}>
                            <h2>--- {category.name} ---</h2>
                            <div className="takeaway__category">
                                {category.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="takeaway__item"
                                    >
                                        {console.log(item)}
                                        <img
                                            src={item.image.publicURL} // publicURLを使って画像を表示
                                            alt={item.name}
                                            onClick={() => openModal(item)}
                                            className="takeaway__image"
                                        />
                                        <div className="takeaway-info">
                                            <h3>{item.name}</h3>
                                            {/* <p>{item.grams}</p> */}
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
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}>
                                &times;
                            </span>
                            <img
                                src={selectedItem.image.publicURL} // こちらもpublicURLを使用
                                alt={selectedItem.name}
                                className="modal-image"
                            />
                            <h2>{selectedItem.name}</h2>
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
