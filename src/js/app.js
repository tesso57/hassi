'use strict'

const app = new PIXI.Application({
    width: 600, //動的に変えたい
    height: 1000,//動的に変えたい
    backgroundColor: 0x888888,
});
//index.htmlのappタグと紐づけ(mainタグ)
document.getElementById('app').appendChild(app.view);

export default app;