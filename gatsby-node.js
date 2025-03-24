const fs = require('fs');
const path = require('path');

exports.onPreBootstrap = ({ reporter }) => {
    const localesPath = path.join(__dirname, 'locales');
    if (!fs.existsSync(localesPath)) {
        reporter.warn('Locales folder does not exist.');
        return;
    }

    const languages = fs.readdirSync(localesPath);
    languages.forEach((lang) => {
        const langPath = path.join(localesPath, lang);
        if (!fs.lstatSync(langPath).isDirectory()) return;

        const mergedData = {};

        // 各 JSON ファイルをマージ
        fs.readdirSync(langPath).forEach((file) => {
            if (file.endsWith('.json')) {
                const filePath = path.join(langPath, file);
                const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                Object.assign(mergedData, jsonData);
            }
        });

        // 統合された JSON を `translation.json` に出力
        fs.writeFileSync(
            path.join(langPath, 'translation.json'),
            JSON.stringify(mergedData, null, 2)
        );

        reporter.info(`Merged JSON files for ${lang}`);
    });
};
