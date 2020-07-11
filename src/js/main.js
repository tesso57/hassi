'use strict'
let app = new PIXI.Application({
    width: 600,
    height: 600,
    backgroundColor: 0x1099bb,
    autoDensity: true,
});

let el = document.getElementById('app');
el.appendChild(app.view);
// hassiを出現させる
let hassiTexture = new PIXI.Texture.from('./src/img/chinanago.png');
let hassiSprite = new PIXI.Sprite(hassiTexture);
hassiSprite._anchor.x = 0.5;
hassiSprite._anchor.y = 0.5;
hassiSprite.x = app.screen.width / 2;
hassiSprite.y = app.screen.height / 2;
app.stage.addChild(hassiSprite);

// フレーム更新時の処理(≒ループ処理)を追加する
app.ticker.add(animate);
let amountTime = 0;

// 処理の定義
//deltaは関数の呼び出し間隔的な感じ
function animate(delta) {
    // ぶたがはまってる円を回転する
    // hassiSprite.rotation += 0.02;

    // ぶたがはまってる円を左右に動かす(適当なのでほっとくとどんどんずれていきます)
    amountTime += delta;                    // delta(app.ticker.deltaTime) : 前のフレームから今のフレームまでの経過時間を正規化した値？
    // amountTime += app.ticker.deltaMS;    // app.ticker.deltaMS  : 前のフレームから今のフレームまでの経過時間(ms)
    hassiSprite.y += Math.cos(amountTime / 100);
}

// デフォルトのフォントでテキストを表示する
// new PIXI.Text(文字列, テキストスタイル(オブジェクト))
let text =  new PIXI.Text('チンアナゴ「学名：Heteroconger hassi」',
    {
        //   fontFamily: 'Arial',   // フォント
        fontSize: 20,
        fill : 0x000000,       // 文字色
        //   stroke: 0x000000,      // アウトラインの色
        //   strokeThickness: 3,    // アウトラインの太さ
        //   align: 'center',       // 文字揃え(複数行の場合に有効)
    });
text.x = 50;
text.y = 100;
// text.text = '0123\n456789';   // テキストの書き換え
app.stage.addChild(text);

// PIXI example
// Get the texture for rope.
const trailTexture = PIXI.Texture.from('./src/img/trail.png');
const historyX = [];
const historyY = [];
// historySize determines how long the trail will be.
const historySize = 20;
// ropeSize determines how smooth the trail will be.
const ropeSize = 100;
const points = [];

// Create history array.
for (let i = 0; i < historySize; i++) {
    historyX.push(0);
    historyY.push(0);
}
// Create rope points.
for (let i = 0; i < ropeSize; i++) {
    points.push(new PIXI.Point(0, 0));
}

// Create the rope
const rope = new PIXI.SimpleRope(trailTexture, points);

// Set the blendmode
rope.blendmode = PIXI.BLEND_MODES.ADD;

app.stage.addChild(rope);

// Listen for animate update
app.ticker.add((delta) => {
    // Read mouse points, this could be done also in mousemove/touchmove update. For simplicity it is done here for now.
    // When implementing this properly, make sure to implement touchmove as interaction plugins mouse might not update on certain devices.
    const mouseposition = app.renderer.plugins.interaction.mouse.global;

    // Update the mouse values to history
    historyX.pop();//最後をぶち抜いて
    historyX.unshift(mouseposition.x);//前に付け足す
    historyY.pop();
    historyY.unshift(mouseposition.y);
    // Update the points to correspond with history.
    for (let i = 0; i < ropeSize; i++) {
        const p = points[i];

        // Smooth the curve with cubic interpolation to prevent sharp edges.
        const ix = cubicInterpolation(historyX, i / ropeSize * historySize);
        const iy = cubicInterpolation(historyY, i / ropeSize * historySize);

        p.x = ix;
        p.y = iy;
    }
});

/**
 * Cubic interpolation based on https://github.com/osuushi/Smooth.js
 */
function clipInput(k, arr) {
    if (k < 0) k = 0;
    if (k > arr.length - 1) k = arr.length - 1;
    return arr[k];
}

function getTangent(k, factor, array) {
    return factor * (clipInput(k + 1, array) - clipInput(k - 1, array)) / 2;
}

function cubicInterpolation(array, t, tangentFactor) {
    if (tangentFactor == null) tangentFactor = 1;

    const k = Math.floor(t);
    const m = [getTangent(k, tangentFactor, array), getTangent(k + 1, tangentFactor, array)];
    const p = [clipInput(k, array), clipInput(k + 1, array)];
    t -= k;
    const t2 = t * t;
    const t3 = t * t2;
    return (2 * t3 - 3 * t2 + 1) * p[0] + (t3 - 2 * t2 + t) * m[0] + (-2 * t3 + 3 * t2) * p[1] + (t3 - t2) * m[1];
}


