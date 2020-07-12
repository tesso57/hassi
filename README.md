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

## 画像の大きさについて

Spriteから持ち出せる_heightと_widthはオリジナルのサイズらしいが...
0か1しか返ってこないため使えなさそう(使い方が悪いかもしれない。)

## Objectの位置について
```
hassiSprite.anchor.x = 0.5;//こうすることによって画像の真ん中で考えることができる。
hassiSprite.anchor.y = 0.5;
```