# hassi
Pixi JSでチンアナゴを「にゅ」っとさせる

---
#　メモ
## ファイル構造
```text
.
├── README.md
├── index.html
├── memo.md
└── src
    ├── css
    │   └── windowfull.css
    ├── img
    │   ├── chinanago.png
    │   ├── nettaigyo_chinanago2.png
    │   └── trail.png
    └── js
        └── main.js
```
js はシーン、サウンド、動かす、っていう感じで分けたほうがよさそう？？

## ウインドウについて
基本的には、htmlのmainタグのところなんだけど頑張ってFullScreanにしたい。

Applicationの上でやるんじゃなくて一つ大きなContainerを作ってその上でやっていった方がよさそう。

## 画像のファイルパスについて

レポジトリー直下から選択していく。(webpack.config.jsの場所による？？？)