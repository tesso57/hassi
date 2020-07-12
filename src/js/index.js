import app from './app';

//背景
let seaBackground = new PIXI.Sprite.from('src/img/bg_natural_ocean.jpg');
seaBackground.width = app.screen.width;//無理やり引き延ばす。
seaBackground.height = app.screen.height;//無理やり引き延ばす。
console.log(seaBackground.height,seaBackground.width);
app.stage.addChild(seaBackground);

let hassiTexture = new PIXI.Texture.from('src/img/chinanago.png');
let hassiSprite = new PIXI.Sprite(hassiTexture);
console.log(hassiSprite.height,hassiSprite._height);
hassiSprite.anchor.x = 0.5;//こうすることによって画像の真ん中で考えることができる。
hassiSprite.anchor.y = 0.5;

hassiSprite.x = app.screen.width / 2;
hassiSprite.y = app.screen.height - 100;
app.stage.addChild(hassiSprite);

//filterのテクスチャを呼ぶ,filterにする。
const displacementSprite = new PIXI.Sprite.from('src/img/displacement_map_repeat.jpg');
displacementSprite.anchor.x = 0.5;
displacementSprite.anchor.y = 0.5;
// Make sure the sprite is wrapping.
displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
displacementFilter.padding = 10;
//初期値を合わせる。
displacementSprite.position = hassiSprite.position;

app.stage.addChild(displacementSprite);

hassiSprite.filters = [displacementFilter];

displacementFilter.scale.x = 30;
displacementFilter.scale.y = 60;
//関数の短い書き方
app.ticker.add(() => {
    // Offset the sprite position to make vFilterCoord update to larger value. Repeat wrapping makes sure there's still pixels on the coordinates.
    displacementSprite.x++;
    // Reset x to 0 when it's over width to keep values from going to very huge numbers.
    if (displacementSprite.x > displacementSprite.width) { displacementSprite.x = 0; }
});