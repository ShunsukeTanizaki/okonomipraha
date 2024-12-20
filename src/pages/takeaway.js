import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import '../styles/takeaway.scss';
import { useState } from 'react';

export default function Takeaway({ data }) {
    console.log(data);
    const items = data.allTakeawayJson.nodes; // JSONデータ
    // const t = data.locales.edges; // 翻訳データ
    const { t } = useTranslation(); // 翻訳データ
    console.log(t);

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
                <h1>{t('Takeaway')}</h1>
                <div className="takeaway__gallery">
                    {items.map((item) => (
                        <div key={item.id} className="takeaway__item">
                            {/* 画像表示部分 */}
                            <img
                                src={item.image.publicURL} // publicURLを使って画像を表示
                                alt={item.name}
                                onClick={() => openModal(item)}
                                className="takeaway__image"
                            />
                            <div className="takeaway-info">
                                <h3>{t(item.name)}</h3>
                                <p>
                                    {item.emoji} {item.note}
                                </p>
                                <p>{item.grams}</p>
                                <p className="takeaway__price">
                                    {item.price} -
                                </p>
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
                            <p>
                                {selectedItem.emoji} {selectedItem.note}
                            </p>
                            <p>{selectedItem.grams}</p>
                            <p className="takeaway__price">
                                {selectedItem.price} -
                            </p>
                        </div>
                    </div>
                )}
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
                grams
                price
                image {
                    publicURL
                }
                emoji
                note
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
