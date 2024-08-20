# release-reminder-worker

* リリース担当者にDailyでメンションするbotです
  - 土日祝と、その前日には通知を行いません
* Cloudflare WorkersのCron Triggersで動作します

## 開発

* `npm run dev` で `localhost:8787` に開発サーバーが起動します
* `.dev.vars` にSLACK_WEBHOOK_URLを設定すると、 `curl "http://localhost:8787/__scheduled?cron=*+*+*+*+*"` で指定したチャンネルに通知が飛びます
  - `*+*+*+*+*` の部分には任意のcron scheduleを指定することができます。そのまま使っても大丈夫です

## デプロイ

### 環境変数の設定

#### MEMBER_SLACK_IDS

* `wrangler.toml` 内の `[vars]` に `ラベル:SlackID` の形式で改行付きで記述してください。
  - または、Workerの初回デプロイ後に、Cloudflareのダッシュボードにて指定しても構いません。
    この値については `wrangler.toml` に記述してcommitした上で管理することをおすすめします。

#### SLACK_WEBHOOK_URL

* Workerの初回デプロイ後に、Cloudflareのダッシュボードにて指定してください。

### デプロイコマンド

* `npm run deploy` でデプロイできます
  - デプロイ前に、 `npx wrangler login` でアカウントへのログインが必要です
  - 誤ったアカウントにデプロイしないようにするため、 `wrangler.toml` に `account_id` を設定することを推奨します
