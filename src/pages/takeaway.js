import * as React from 'react';
import { graphql } from 'gatsby';
// import { useTranslation } from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout';
// import { StaticImage } from 'gatsby-plugin-image';
import '../styles/takeaway.scss';

export default function Takeaway() {
    // const { t } = useTranslation();
    return (
        <Layout>
            <div className="content">
                <h1>Delivary MENU (czk)</h1>
                <p>12:00-14:00 / 17:00-21:00</p>
                <h2>=== Okonomiyaki ===</h2>
                <ul>
                    <li>
                        M-1. Osaka style plain 400g 180,- 🍀 (🐟 Tuna flake)
                    </li>
                    <li>
                        M-2. Osaka Pork grill veg. 600g 280,- 🐽 (🐟 Tuna flake)
                    </li>
                    <li>
                        M-3. Osaka Chicken Egg 600g 280,- 🐓 🍳 (🐟 Tuna flake){' '}
                    </li>
                    <li>M-4. Osaka Seafood 600g 320,- 🦐 🦑 🐟</li>
                    <div>=======</div>
                    <li>
                        M-5. Chicken Omu Rice - Soft omelet topped on fried rice
                        450g 280,- 🐓 🍳 🍄🟫
                    </li>
                </ul>
                <h2>
                    ===== BENTO take away special (with rice, Tsukemono
                    pickles,) ==={' '}
                </h2>
                <ul>
                    <li>
                        B-1. Kushi Katsu - - Panko fried pork, shiitake, onion,
                        jalapeño cheese 🐽 🥚 🍄🟫 🌶 🧀 360,-{' '}
                    </li>
                    <li>B-2. KARAAGE 5pcs 🐓 300,-</li>
                    <li>B-3. Teriyaki Tofu and Veg 🍀 (Gluten free) 260,-</li>
                    <li>
                        B-4. Fried vegetarian GYOZA 5pcs with PONZU 🍀 260,-
                    </li>
                    <h2>Side dish</h2>
                    <li>S-1. Miso Soup Tofu & Wakame 80,- 🍀</li>
                    <li>
                        S-2. ODEN Japanese fish broth pot-au-feu. 220,- 🍢 🥚 🐟
                    </li>
                    <li>S-3. Roast Edamame 100g 100,- 🍀</li>
                    <li>
                        S-4. Assort of Tsukemono Pickles and Kimchi 150g 150,-
                        🍀
                    </li>
                    <li>
                        S-5. Wakame and cucumber salad miso dressing 150 g 150,-
                        🍀
                    </li>
                    <li>
                        S- 6. Takoyaki balls 4cm x 4 pcs Octopus balls 120,- 🐙
                        🥚 (🐟 Tuna flake)
                    </li>
                </ul>
                <h2>Drinks</h2>
                <ul>
                    <li>D-1. Ramune (Japanese soda) 70,-</li>
                    <li>D-2. Kombucha Matcha 70,-</li>
                    <li>D-3. Kombucha Rooibos 70,-</li>
                    <li>D-4. Royal Crown Cola NO SUGER 70,-</li>
                    <br />
                    <li>P-1. Asahi beer 90,-</li>
                    <li>P-2. Kirin beer 90,-</li>
                    <li>P-3. Sapporo beer 90,- </li>
                </ul>
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
    }
`;
export const Head = () => (
    <>
        <title>Take away|祭：お好み焼き居酒屋 プラハ</title>
        <meta name="description" content="This is the homepage…" />
        {/* <!-- reset.css ress --> */}
        <link
            rel="stylesheet"
            href="https://unpkg.com/ress/dist/ress.min.css"
        />
    </>
);
