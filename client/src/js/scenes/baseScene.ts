import {Container} from "pixi.js";

abstract class BaseScene{
    protected container : Container;
    protected constructor(parent : Container) {
        this.container = new Container();
        parent.addChild(this.container);
    }
    public destroy(){
        this.container.destroy({children:true})
    }
}