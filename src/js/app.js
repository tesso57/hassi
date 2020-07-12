'use strict'

const app = new PIXI.Application({
    height: 600, //動的に変えたい
    width: 1000,//動的に変えたい
    backgroundColor: 0x888888,
});
//index.htmlのappタグと紐づけ(mainタグ)
document.getElementById('app').appendChild(app.view);
app.stage.interactive = true;
export default app;