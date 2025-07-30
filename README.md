# 株式会社Surprise 求人サイト

Inside Stories向けの求人サイトです。React + Viteで構築されています。

## 技術スタック

- React 19.1.0
- Vite 7.0.4
- Framer Motion（アニメーション）
- React Markdown（マークダウン表示）
- React Icons（アイコンライブラリ）

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build
```

## プロジェクト構造

```
src/
├── assets/          # 画像ファイル
├── components/      # Reactコンポーネント
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Content.jsx
│   ├── Footer.jsx
│   └── PositionCard.jsx
├── data/           # コンテンツデータ
│   └── content.js
├── styles/         # CSSファイル
│   └── main.css
├── App.jsx         # メインアプリケーション
└── main.jsx        # エントリーポイント
```

## 特徴

- Inside Storiesのデザインを参考にした洗練されたUI
- スムーズなスクロールアニメーション
- レスポンシブデザイン対応
- マークダウンコンテンツのサポート
- アイコン付き募集要項セクション