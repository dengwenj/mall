import { request } from "./request";

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

// 面向对象封装一个对象
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;
  }
}

// 面向对象封装一个对象
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

// 面向对象封装一个对象
export class Xiangqing {
  constructor(detailInfo) {
    this.desc = detailInfo.desc;
    this.key = detailInfo.detailImage[0].key;
    this.list = detailInfo.detailImage[0].list
  }
}

// 面向对象封装一个对象
export class GoodsParam {
  constructor(info, rule) {
    //  images可能没有值（某些商品有值，某些商品没值）
    this.image = info.image ? info.image[0] : '';
    this.set = info.set;
    this.tables = rule.tables
  }
}