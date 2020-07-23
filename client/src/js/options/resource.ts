import {Resource} from "./resourceProp";

const BGMPackage: Resource.BGM = {}

const SEPackage: Resource.SE = {}

const UIPackage: Resource.UI = {}

const BackGroundPackage: Resource.BG = {}

export const resourceAlias = {
    ...BGMPackage,
    ...BackGroundPackage,
    ...SEPackage,
    ...UIPackage
}