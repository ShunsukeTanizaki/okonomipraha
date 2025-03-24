<h1 align="center">
  <a href="https://www.okonomipraha.cz">
    Okonomipraha
  </a>
</h1>

Environment

```
yarn version: 1.22.22
(npm  version: 10.9.2)
node version: v22.14.0
Gatsby CLI version: 5.14.0
```

Set Up

```shell
git clone git@github.com:ShunsukeTanizaki/okonomipraha.git
```

```shell
cd okonomipraha

yarn
```

ローカル開発

```shell
gatusby develop
```

ブラウザで `localhost:8000`を確認してください。

ビルド

```shell
gatusby build
```

locales ファイル
`locales/` フォルダ配下に 3 つのロケールのフォルダがあります。

```
locales/
  - cz // チェコ語の翻訳フォルダ
  - en // 英語の翻訳フォルダ
  - ja // 日本語の翻訳フォルダ
```

英語を基本に開発しているので、`en/`フォルダ配下は触る必要はありません。

ローカル開発時にビルドかデプロイをかけると、すべてのファイルが統合されて`translation.json`が生成されます。
翻訳を修正する時には`translation.json`を触らないでください。

```
locales/**/
  - main.json // ページ全般に関わる文言の翻訳
  - privacy-policy.json // プライバシーポリシーページの翻訳
  - takeaway.json // 持ち帰りページの翻訳
```
