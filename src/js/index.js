import app from './app';
let hassiTexture = new PIXI.Texture.from('src/img/chinanago.png');
let hassiSprite = new PIXI.Sprite(hassiTexture);

hassiSprite._anchor.x = 0.5;
hassiSprite._anchor.y = 0.5;

hassiSprite.x = app.screen.width /2;
hassiSprite.y = app.screen.height /2;

app.stage.addChild(hassiSprite);