# 環境構築

![スクリーンショット 2022-12-24 125557](https://user-images.githubusercontent.com/83369665/209420457-71ceed1b-c681-4e4f-8b46-ad0bb4dd29fc.png)

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
