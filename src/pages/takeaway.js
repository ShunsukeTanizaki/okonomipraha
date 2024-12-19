import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/takeaway.scss';
import { useState } from 'react';

export default function Takeaway({ data }) {
    const items = data.allTakeawayJson.nodes; // JSONデータ
    const translations = data.locales.edges; // 翻訳データ

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
            <div className="takeaway-container">
                <h1>Take Away</h1>
                <div className="takeaway-gallery">
                    {items.map((item) => (
                        <div key={item.id} className="takeaway-item">
                            {/* 画像表示部分 */}
                            <img
                                src={item.image.publicURL} // publicURLを使って画像を表示
                                alt={item.name}
                                onClick={() => openModal(item)}
                                className="takeaway-image"
                            />
                            <div className="takeaway-info">
                                <h3>{item.name}</h3>
                                <p>{item.grams}</p>
                                <p>{item.price} -</p>
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
                            <h2>{selectedItem.name}</h2>
                            <img
                                src={selectedItem.image.publicURL} // こちらもpublicURLを使用
                                alt={selectedItem.name}
                                className="modal-image"
                            />
                            <p>{selectedItem.grams}</p>
                            <p>{selectedItem.price}</p>
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
