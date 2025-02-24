# Next.js をつかったサンプルサービス

Next.js 15 の試験用に作成したサンプル。

# ローカル環境

ソースを取得します。

```
git clone https://github.com/ajisaba/next-todo.git
```

サンプルサービスを起動する場合、next-app ディレクトリに移動します。

```
cd next-app
```

必要なモジュールをインストールします。

```
npm ci
```

インストールが成功したら以下を実行して起動します。

```
npm run dev
```

ブラウザで以下にアクセスするとサービス画面が表示されます。

[http://localhost:3000/](http://localhost:3000/)

# デプロイ

cdk による AWS へのデプロイを予定。
今はまだ実装していません。

# テスト

## E2E テスト

E2E テストでは Playwright を使用します。

### 準備

E2E テスト用ディレクトリに移動します。

```
cd next-app/tests/playwright/
```

必要なモジュールをインストールします。

```
npm ci
```

### 実行

E2E テスト用ディレクトリで以下を実行します。

```
npm run test

または

nxp playwright text
```

失敗した場合、自動で結果ページが開かれます。
成功した場合、手動で結果ページを開く必要があります。

```
npm run report

または

npx playwright show-report
```
