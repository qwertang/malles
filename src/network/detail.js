import {request} from "./request";

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getCommend(){
    return request({
        url: '/recommend'
    })
}

//创建一个Goods的对象
export class Goods {
    constructor(itemInfo,colums,services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.columns = colums;
        this.services = services;
        this.realPrice = itemInfo.realPrice;
    }
}

export class Shop {
    constructor(shopInfo) {
      this.logo = shopInfo.shopLogo
      this.name = shopInfo.name
      this.fans = shopInfo.cFans;
      this.sells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods
    }
}

export class GoodsParam {
    constructor(info,rule) {
        //有的商品没有图片 所以要写上
        this.image = info.image ? info.image[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}