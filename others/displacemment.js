import app from "../src/js/app";

app.stage.interactive = true;//eventを検出できるようにする。(イベントが検出できる場所は分けたほうがよさそう)

const container = new PIXI.Container();//コンテナの定義
app.stage.addChild(container);

//Object
const flag = PIXI.Sprite.from('src/img/chinanago.png');
container.addChild(flag);
flag.x = 100;
flag.y = 100;

//filterのテクスチャを呼ぶ,filterにする。
const displacementSprite = PIXI.Sprite.from('src/img/displacement_map_repeat.jpg');
// Make sure the sprite is wrapping.
displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
displacementFilter.padding = 10;
//初期値を合わせる。
displacementSprite.position = flag.position;

app.stage.addChild(displacementSprite);

flag.filters = [displacementFilter];

displacementFilter.scale.x = 30;
displacementFilter.scale.y = 60;
//関数の短い書き方
app.ticker.add(() => {
    // Offset the sprite position to make vFilterCoord update to larger value. Repeat wrapping makes sure there's still pixels on the coordinates.
    displacementSprite.x++;
    // Reset x to 0 when it's over width to keep values from going to very huge numbers.
    if (displacementSprite.x > displacementSprite.width) { displacementSprite.x = 0; }
});