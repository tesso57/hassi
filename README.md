# hassi
Pixi JSでチンアナゴを「にゅ」っとさせる

---
#　メモ
## ファイル構造
```text
.
├── README.md
├── index.html
├── others
│   ├── README.md
│   ├── custom-hitarea.js
│   └── displacemment.js
├── package-lock.json
├── package.json
├── src
│   ├── css
│   │   └── windowfull.css
│   ├── img
│   │   ├── bg_natural_ocean.jpg
│   │   ├── bg_natural_umi.jpg
│   │   ├── bg_pattern1_aozora.png
│   │   ├── bg_pattern2_aozora.png
│   │   ├── bg_pattern3_yuyake.png
│   │   ├── bg_pattern4_yoru.png
│   │   ├── chinanago.png
│   │   ├── cloud.R.png
│   │   ├── cloud.png
│   │   ├── cloud2.png
│   │   ├── cloud_L.png
│   │   ├── displacement_map_repeat.jpg
│   │   ├── nettaigyo_chinanago2.png
│   │   └── trail.png
│   └── js
│       ├── app.js
│       └── index.js
└── webpack.config.js
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

## 画像と音源について
サーバーに問い合わせることによって、いちいち指定する必要がなくて便利になる。