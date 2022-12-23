# 環境構築

- Figmaリンク（https://www.figma.com/file/llLN41dNIqlOmkysNhtqkM/%E4%BC%81%E7%94%BB%E3%83%BB%E8%80%83%E6%A1%88?node-id=0%3A1&t=iQFyhJCrpg9IpGk2-1）

```bash
# プロジェクト作成
yarn create next-app --typescript
```

# Cloneする場合

```
yarn install
```

# 以下同じ(パッケージインストール)

```bash
# TailwindCSSインストール
yarn add -D tailwindcss

# モーダル用ライブラリ
yarn add -D react-modal @types/react-modal

# アニメーション用ライブラリ
yarn add framer-motion

# アイコン用ライブラリ
yarn add react-bootstrap react-bootstrap-icons

# Firebaseインストール
yarn add firebase react-firebase-hooks

# emotionインストール
yarn add @emotion/react @emotion/styled

# fullcalendarインストール
$ yarn add @fullcalendar/react @fullcalendar/core @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/list

# three/fiberインストール
yarn add three @react-three/fiber @react-three/drei
yarn add -D @types/three

# three/cannonインストール
yarn add @react-three/cannon

# Node.jsとFirebaseを繋げるSDKをインストール
yarn add firebase-admin --save
```

# サーバー起動

```bash
# 開発サーバー起動
yarn dev
```

```bash
# ビルド
yarn run build

# ビルド後サーバー起動
yarn start
```
