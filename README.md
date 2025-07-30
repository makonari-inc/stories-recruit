# 株式会社Surprise 求人サイト

Inside Stories向けの求人サイトです。React + Viteで構築されています!

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

# GitHub Pagesにデプロイ（gh-pagesパッケージを使用）
npm run deploy
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

## GitHub Pagesへのデプロイ

### 方法1: GitHub Actionsを使用（推奨）
1. コードをmainブランチにプッシュすると自動的にデプロイされます
2. GitHub Actionsのワークフローが自動的にビルドとデプロイを実行します

### 方法2: 手動デプロイ
```bash
# 依存関係をインストール（gh-pagesを含む）
npm install

# GitHub Pagesにデプロイ
npm run deploy
```

### 注意事項
- デプロイ先URL: https://[username].github.io/stories-recruit/
- `vite.config.js`の`base`オプションがリポジトリ名と一致している必要があります
- GitHub Pagesの設定で「Source」を「GitHub Actions」に設定してください