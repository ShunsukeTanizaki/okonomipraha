/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    flags: {
        DEV_SSR: true,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/locales`,
                name: `locale`,
            },
        },
        {
            resolve: `gatsby-plugin-react-i18next`,
            options: {
                localeJsonSourceName: `locale`, // localesディレクトリ
                languages: [`cs`, `en`, `ja`], // サポートする言語
                defaultLanguage: `cs`,
                siteUrl: `https://www.okonomipraha.cz/`,
                i18nextOptions: {
                    interpolation: {
                        escapeValue: false, // Reactはエスケープを自動処理
                    },
                },
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `takeaway`,
                path: `${__dirname}/src/data/`,
            },
        },
        `gatsby-transformer-json`,
    ],
};
