import app from "./managers/app";
import {resourceAlias} from "./options/resource"

for (const [key,value] of Object.entries(resourceAlias)){
    PIXI.Loader.shared.add({
        name: key,
        url: value
    })
}

document.body.appendChild(app.view)
PIXI.Loader.shared.load(()=>{

})