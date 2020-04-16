/*
 Navicat Premium Data Transfer

 Source Server         : MongoDB
 Source Server Type    : MongoDB
 Source Server Version : 40009
 Source Host           : localhost:27017
 Source Schema         : node-vue-moba

 Target Server Type    : MongoDB
 Target Server Version : 40009
 File Encoding         : 65001

 Date: 16/04/2020 20:57:15
*/


// ----------------------------
// Collection structure for adminusers
// ----------------------------
db.getCollection("adminusers").drop();
db.createCollection("adminusers");

// ----------------------------
// Documents of adminusers
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("node-vue-moba");
db.getCollection("adminusers").insert([ {
    _id: ObjectId("5e496bb9a6ec75977f88e73a"),
    username: "admin",
    password: "$2b$10$oXWip7M9V5uXl8DJhzAg.OoZuy73qqm8za1TNJbSqEFpwmpqDDSWe",
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for ads
// ----------------------------
db.getCollection("ads").drop();
db.createCollection("ads");

// ----------------------------
// Documents of ads
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("node-vue-moba");
db.getCollection("ads").insert([ {
    _id: ObjectId("5e9194adc2a9dd999112fc95"),
    name: "首页幻灯片广告",
    items: [ ],
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for articles
// ----------------------------
db.getCollection("articles").drop();
db.createCollection("articles");

// ----------------------------
// Documents of articles
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("node-vue-moba");
db.getCollection("articles").insert([ {
    _id: ObjectId("5e967baddcfff90aadd41be9"),
    categories: [
        ObjectId("5e95bf8de250e0cb95ae8bed"),
        ObjectId("5e95bf51e250e0cb95ae8bea")
    ],
    title: "王者荣耀 皮肤团2020年春季招新公告",
    __v: NumberInt("0"),
    createdAt: ISODate("2020-04-15T03:12:45.625Z"),
    updatedAt: ISODate("2020-04-15T14:25:44.858Z"),
    body: "<p>亲爱的召唤师：</p><p>\t我们计划在<strong style=\"color: rgb(255, 0, 0);\">2020年4月14日&nbsp;8:30-9:30</strong><span style=\"color: rgb(255, 0, 0);\">&nbsp;</span>对全服进行不停机更新。</p><p>【更新时间】<strong style=\"color: rgb(255, 0, 0);\">4月14日&nbsp;8:30-9:30</strong></p><p>【更新方式】<strong style=\"color: rgb(255, 0, 0);\">不停机更新</strong></p><p>由于此次为不停机更新，维护完毕后即可正常进入<strong>【维护期间会有短暂入口维护的情况】</strong>；</p><p>维护时已经登入游戏的玩家不受任何影响。</p><p>【更新范围】<strong style=\"color: rgb(255, 0, 0);\">全服</strong></p><h2>本次更新大小<strong style=\"color: rgb(255, 0, 0);\">安卓约43M</strong>，<strong style=\"color: rgb(255, 0, 0);\">iOS约64M</strong>，</h2><h2><br></h2><h2>建议您在wifi环境下进行更新操作。</h2>"
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("5e967baddcfff90aadd41bea"),
    categories: [
        ObjectId("5e95bf5de250e0cb95ae8bec"),
        ObjectId("5e95bf51e250e0cb95ae8bea")
    ],
    title: "吕布-天魔缭乱翻新曝光，霸气风范，魔王归来！",
    __v: NumberInt("0"),
    createdAt: ISODate("2020-04-15T03:12:45.626Z"),
    updatedAt: ISODate("2020-04-15T14:16:25.077Z"),
    body: "<p>美好的周六，妲己宝宝要做些什么呢？</p><p>&nbsp;</p><p>没错~本宝宝又跑去美术大大的办公室，为大家打探情报啦！<span style=\"color: rgb(175, 176, 222);\">吕布-天魔缭乱优化完成，并将限时返场，召唤师们快来抢先围观天魔的霸气风范叭</span>~</p><p>&nbsp;</p><p><strong>——吕布-天魔缭乱优化返场——</strong></p><p>&nbsp;</p><p><span style=\"color: rgb(175, 176, 222);\">品级：传说限定</span></p><p>&nbsp;</p><p><span style=\"color: rgb(175, 176, 222);\">皮肤优化上线时间：</span>2020年4月14日版本更新后</p><p>&nbsp;<img src=\"http://localhost:3001/uploads/1edd0e90e90190b4356456f9fa8df5bc\"></p><p>&nbsp;</p><p>伴随本次天魔缭乱的品质翻新，为了回馈玩家，我们将限时返场这款皮肤。</p><p>&nbsp;</p><p>本次直售返场后，吕布-天魔缭乱将不会再通过直售的方式返场，同时也不会再进入后续周年庆限定皮肤返场投票池，未来召唤师仍有机会在一些重要节点的限时活动中通过抽奖的方式获得。</p><p>&nbsp;</p><p><span style=\"color: rgb(175, 176, 222);\">返场时间：</span>4月14日更新后-4月19日23:59</p><p>&nbsp;</p><p><span style=\"color: rgb(175, 176, 222);\">皮肤价格：</span>1788点券</p>"
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("5e967baddcfff90aadd41beb"),
    categories: [
        ObjectId("5e95bf51e250e0cb95ae8bea"),
        ObjectId("5e95bf58e250e0cb95ae8beb")
    ],
    title: "体验服爆料丨廉颇未老，尚能战斗！老将廉颇重返巅峰",
    __v: NumberInt("0"),
    createdAt: ISODate("2020-04-15T03:12:45.626Z"),
    updatedAt: ISODate("2020-04-15T03:12:45.626Z")
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("5e967baddcfff90aadd41bec"),
    categories: [
        ObjectId("5e95bf51e250e0cb95ae8bea"),
        ObjectId("5e95bf58e250e0cb95ae8beb")
    ],
    title: "新皮肤爆料丨拔刀斩恶魂！橘右京新装登场~",
    __v: NumberInt("0"),
    createdAt: ISODate("2020-04-15T03:12:45.626Z"),
    updatedAt: ISODate("2020-04-15T03:12:45.626Z")
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("5e967baddcfff90aadd41bed"),
    categories: [
        ObjectId("5e95bf51e250e0cb95ae8bea"),
        ObjectId("5e95bf58e250e0cb95ae8beb")
    ],
    title: "豪横！王者荣耀英雄主打歌完整歌单霸气登陆酷狗！",
    __v: NumberInt("0"),
    createdAt: ISODate("2020-04-15T03:12:45.626Z"),
    updatedAt: ISODate("2020-04-15T03:12:45.626Z")
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("5e967baddcfff90aadd41bee"),
    categories: [
        ObjectId("5e95bf5de250e0cb95ae8bec"),
        ObjectId("5e95bf58e250e0cb95ae8beb")
    ],
    title: "4月5日开服及奖励通知",
    __v: NumberInt("0"),
    createdAt: ISODate("2020-04-15T03:12:45.627Z"),
    updatedAt: ISODate("2020-04-15T03:12:45.627Z")
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("5e967baddcfff90aadd41bef"),
    categories: [
        ObjectId("5e95bf8de250e0cb95ae8bed"),
        ObjectId("5e95bf5de250e0cb95ae8bec")
    ],
    title: "4月14日体验服停机更新公告",
    __v: NumberInt("0"),
    createdAt: ISODate("2020-04-15T03:12:45.627Z"),
    updatedAt: ISODate("2020-04-15T03:12:45.627Z")
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("5e967baddcfff90aadd41bf0"),
    categories: [
        ObjectId("5e95bf51e250e0cb95ae8bea"),
        ObjectId("5e95bf8de250e0cb95ae8bed")
    ],
    title: "4月14日全服不停机更新公告",
    __v: NumberInt("0"),
    createdAt: ISODate("2020-04-15T03:12:45.627Z"),
    updatedAt: ISODate("2020-04-15T03:12:45.627Z")
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("5e967baddcfff90aadd41bf1"),
    categories: [
        ObjectId("5e95bf8de250e0cb95ae8bed"),
        ObjectId("5e95bf5de250e0cb95ae8bec")
    ],
    title: "4月13日体验服不停机更新公告",
    __v: NumberInt("0"),
    createdAt: ISODate("2020-04-15T03:12:45.627Z"),
    updatedAt: ISODate("2020-04-15T03:12:45.627Z")
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("5e967baddcfff90aadd41bf2"),
    categories: [
        ObjectId("5e95bf51e250e0cb95ae8bea"),
        ObjectId("5e95bf58e250e0cb95ae8beb")
    ],
    title: "4月11日体验服停机更新公告",
    __v: NumberInt("0"),
    createdAt: ISODate("2020-04-15T03:12:45.627Z"),
    updatedAt: ISODate("2020-04-15T03:12:45.627Z")
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("5e967baddcfff90aadd41bf3"),
    categories: [
        ObjectId("5e95bf8de250e0cb95ae8bed"),
        ObjectId("5e95bf5de250e0cb95ae8bec")
    ],
    title: "天魔缭乱限时返场 多重好礼等你来领",
    __v: NumberInt("0"),
    createdAt: ISODate("2020-04-15T03:12:45.627Z"),
    updatedAt: ISODate("2020-04-15T03:12:45.627Z")
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("5e967baddcfff90aadd41bf4"),
    categories: [
        ObjectId("5e95bf51e250e0cb95ae8bea"),
        ObjectId("5e95bf8de250e0cb95ae8bed")
    ],
    title: "橘右京全新史诗皮肤上架 SNK皮肤齐聚峡谷福利大放送",
    __v: NumberInt("0"),
    createdAt: ISODate("2020-04-15T03:12:45.627Z"),
    updatedAt: ISODate("2020-04-15T03:12:45.627Z")
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("5e967baddcfff90aadd41bf5"),
    categories: [
        ObjectId("5e95bf8de250e0cb95ae8bed"),
        ObjectId("5e95bf5de250e0cb95ae8bec")
    ],
    title: "【预告】荣耀中国节·轻风戏纸鸢，参与必得纸鸢回城特效（永久）",
    __v: NumberInt("0"),
    createdAt: ISODate("2020-04-15T03:12:45.627Z"),
    updatedAt: ISODate("2020-04-15T03:12:45.627Z")
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("5e967baddcfff90aadd41bf6"),
    categories: [
        ObjectId("5e95bf8de250e0cb95ae8bed"),
        ObjectId("5e95bf5de250e0cb95ae8bec")
    ],
    title: "参与“S19战令集结号”，赢80级直升经验大礼",
    __v: NumberInt("0"),
    createdAt: ISODate("2020-04-15T03:12:45.627Z"),
    updatedAt: ISODate("2020-04-15T03:12:45.627Z")
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("5e967baddcfff90aadd41bf7"),
    categories: [
        ObjectId("5e95bf51e250e0cb95ae8bea"),
        ObjectId("5e95bf58e250e0cb95ae8beb")
    ],
    title: "【镜界诞生 见证觉醒】活动公告",
    __v: NumberInt("0"),
    createdAt: ISODate("2020-04-15T03:12:45.627Z"),
    updatedAt: ISODate("2020-04-15T03:12:45.627Z")
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("5e967baddcfff90aadd41bf8"),
    categories: [
        ObjectId("5e95bf5de250e0cb95ae8bec"),
        ObjectId("5e95bf8de250e0cb95ae8bed")
    ],
    title: "关于责成TS俱乐部就欠薪问题进行说明的通知",
    __v: NumberInt("0"),
    createdAt: ISODate("2020-04-15T03:12:45.628Z"),
    updatedAt: ISODate("2020-04-15T03:12:45.628Z")
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("5e967baddcfff90aadd41bf9"),
    categories: [
        ObjectId("5e95bf5de250e0cb95ae8bec"),
        ObjectId("5e95bf8de250e0cb95ae8bed")
    ],
    title: "《一招即浪》第二期：逆天牛魔王最浪打法，城市赛教你一招制敌",
    __v: NumberInt("0"),
    createdAt: ISODate("2020-04-15T03:12:45.628Z"),
    updatedAt: ISODate("2020-04-15T03:12:45.628Z")
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("5e967baddcfff90aadd41bfa"),
    categories: [
        ObjectId("5e95bf5de250e0cb95ae8bec"),
        ObjectId("5e95bf8de250e0cb95ae8bed")
    ],
    title: "为战队争夺荣誉！城市联赛战队赛通道报名开启！",
    __v: NumberInt("0"),
    createdAt: ISODate("2020-04-15T03:12:45.628Z"),
    updatedAt: ISODate("2020-04-15T03:12:45.628Z")
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("5e967baddcfff90aadd41bfb"),
    categories: [
        ObjectId("5e95bf8de250e0cb95ae8bed"),
        ObjectId("5e95bf5de250e0cb95ae8bec")
    ],
    title: "高校联赛分站赛即将打响 今年又有多少好玩的活动值得期待？",
    __v: NumberInt("0"),
    createdAt: ISODate("2020-04-15T03:12:45.628Z"),
    updatedAt: ISODate("2020-04-15T03:12:45.628Z")
} ]);
db.getCollection("articles").insert([ {
    _id: ObjectId("5e967baddcfff90aadd41bfc"),
    categories: [
        ObjectId("5e95bf51e250e0cb95ae8bea"),
        ObjectId("5e95bf8de250e0cb95ae8bed")
    ],
    title: "《一招即浪》第一期：白起强势归来，教你如何化身“边路杀神”",
    __v: NumberInt("0"),
    createdAt: ISODate("2020-04-15T03:12:45.628Z"),
    updatedAt: ISODate("2020-04-15T03:12:45.628Z")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for categories
// ----------------------------
db.getCollection("categories").drop();
db.createCollection("categories");

// ----------------------------
// Documents of categories
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("node-vue-moba");
db.getCollection("categories").insert([ {
    _id: ObjectId("5e4178826ef515418a456aa3"),
    name: "新闻分类",
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("5e422a023fc2ca44ecd9c680"),
    name: "英雄分类",
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("5e42e896e7cad7509d856f66"),
    name: "视频",
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("5e42e8aae7cad7509d856f67"),
    parent: ObjectId("5e42e896e7cad7509d856f66"),
    name: "视频1",
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("5e439a2f12386f639ff0e29e"),
    parent: ObjectId("5e422a023fc2ca44ecd9c680"),
    name: "战士",
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("5e439a4312386f639ff0e29f"),
    parent: ObjectId("5e422a023fc2ca44ecd9c680"),
    name: "射手",
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("5e95bf51e250e0cb95ae8bea"),
    parent: ObjectId("5e4178826ef515418a456aa3"),
    name: "新闻",
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("5e95bf58e250e0cb95ae8beb"),
    parent: ObjectId("5e4178826ef515418a456aa3"),
    name: "公告",
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("5e95bf5de250e0cb95ae8bec"),
    parent: ObjectId("5e4178826ef515418a456aa3"),
    name: "赛事",
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("5e95bf8de250e0cb95ae8bed"),
    parent: ObjectId("5e4178826ef515418a456aa3"),
    name: "活动",
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("5e96d4e746c1eb1d5508d585"),
    parent: ObjectId("5e422a023fc2ca44ecd9c680"),
    name: "法师",
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("5e96d4f046c1eb1d5508d586"),
    parent: ObjectId("5e422a023fc2ca44ecd9c680"),
    name: "辅助",
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("5e96d4fd46c1eb1d5508d587"),
    parent: ObjectId("5e422a023fc2ca44ecd9c680"),
    name: "坦克",
    __v: NumberInt("0")
} ]);
db.getCollection("categories").insert([ {
    _id: ObjectId("5e96d52146c1eb1d5508d588"),
    parent: ObjectId("5e422a023fc2ca44ecd9c680"),
    name: "刺客",
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for heroes
// ----------------------------
db.getCollection("heroes").drop();
db.createCollection("heroes");

// ----------------------------
// Documents of heroes
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("node-vue-moba");
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d56e"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "赵云",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d56f"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "钟无艳",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d570"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "吕布",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d571"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "曹操",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d572"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "典韦",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d573"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "宫本武藏",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d574"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "达摩",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d575"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "老夫子",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d576"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "关羽",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d577"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "露娜",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d578"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "花木兰",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d579"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "亚瑟",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d57a"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "孙悟空",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d57b"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "刘备",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d57c"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "杨戬",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d57d"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "雅典娜",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d57e"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "哪吒",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d57f"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "铠",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d580"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "狂铁",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d581"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "李信",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d582"),
    categories: [
        ObjectId("5e439a2f12386f639ff0e29e")
    ],
    items1: [ ],
    items2: [ ],
    name: "盘古",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d583"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "小乔",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d584"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "墨子",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d585"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "妲己",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d586"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "嬴政",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/110/110.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d587"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "高渐离",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/115/115.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d588"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "扁鹊",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d589"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "芈月",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d58a"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "周瑜",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/124/124.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d58b"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "甄姬",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d58c"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "武则天",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d58d"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "貂蝉",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d58e"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "安琪拉",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d58f"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "姜子牙",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d590"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "王昭君",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d591"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "张良",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d592"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "不知火舞",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d593"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "钟馗",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d594"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "诸葛亮",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d595"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "干将莫邪",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d596"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "女娲",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d597"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "杨玉环",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d598"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "弈星",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d599"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "米莱狄",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d59a"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "沈梦溪",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d59b"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "上官婉儿",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d59c"),
    categories: [
        ObjectId("5e96d4e746c1eb1d5508d585")
    ],
    items1: [ ],
    items2: [ ],
    name: "嫦娥",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d59d"),
    categories: [
        ObjectId("5e96d4fd46c1eb1d5508d587")
    ],
    items1: [ ],
    items2: [ ],
    name: "廉颇",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d59e"),
    categories: [
        ObjectId("5e96d4fd46c1eb1d5508d587")
    ],
    items1: [ ],
    items2: [ ],
    name: "刘禅",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d59f"),
    categories: [
        ObjectId("5e96d4fd46c1eb1d5508d587")
    ],
    items1: [ ],
    items2: [ ],
    name: "白起",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5a0"),
    categories: [
        ObjectId("5e96d4fd46c1eb1d5508d587")
    ],
    items1: [ ],
    items2: [ ],
    name: "夏侯惇",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5a1"),
    categories: [
        ObjectId("5e96d4fd46c1eb1d5508d587")
    ],
    items1: [ ],
    items2: [ ],
    name: "项羽",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5a2"),
    categories: [
        ObjectId("5e96d4fd46c1eb1d5508d587")
    ],
    items1: [ ],
    items2: [ ],
    name: "程咬金",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5a3"),
    categories: [
        ObjectId("5e96d4fd46c1eb1d5508d587")
    ],
    items1: [ ],
    items2: [ ],
    name: "刘邦",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5a4"),
    categories: [
        ObjectId("5e96d4fd46c1eb1d5508d587")
    ],
    items1: [ ],
    items2: [ ],
    name: "牛魔",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5a5"),
    categories: [
        ObjectId("5e96d4fd46c1eb1d5508d587")
    ],
    items1: [ ],
    items2: [ ],
    name: "张飞",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5a6"),
    categories: [
        ObjectId("5e96d4fd46c1eb1d5508d587")
    ],
    items1: [ ],
    items2: [ ],
    name: "东皇太一",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5a7"),
    categories: [
        ObjectId("5e96d4fd46c1eb1d5508d587")
    ],
    items1: [ ],
    items2: [ ],
    name: "苏烈",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5a8"),
    categories: [
        ObjectId("5e96d4fd46c1eb1d5508d587")
    ],
    items1: [ ],
    items2: [ ],
    name: "梦奇",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5a9"),
    categories: [
        ObjectId("5e96d4fd46c1eb1d5508d587")
    ],
    items1: [ ],
    items2: [ ],
    name: "孙策",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5aa"),
    categories: [
        ObjectId("5e96d4fd46c1eb1d5508d587")
    ],
    items1: [ ],
    items2: [ ],
    name: "猪八戒",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5ab"),
    categories: [
        ObjectId("5e96d52146c1eb1d5508d588")
    ],
    items1: [ ],
    items2: [ ],
    name: "阿轲",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5ac"),
    categories: [
        ObjectId("5e96d52146c1eb1d5508d588")
    ],
    items1: [ ],
    items2: [ ],
    name: "李白",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5ad"),
    categories: [
        ObjectId("5e96d52146c1eb1d5508d588")
    ],
    items1: [ ],
    items2: [ ],
    name: "韩信",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5ae"),
    categories: [
        ObjectId("5e96d52146c1eb1d5508d588")
    ],
    items1: [ ],
    items2: [ ],
    name: "兰陵王",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5af"),
    categories: [
        ObjectId("5e96d52146c1eb1d5508d588")
    ],
    items1: [ ],
    items2: [ ],
    name: "娜可露露",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/162/162.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5b0"),
    categories: [
        ObjectId("5e96d52146c1eb1d5508d588")
    ],
    items1: [ ],
    items2: [ ],
    name: "橘右京",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5b1"),
    categories: [
        ObjectId("5e96d52146c1eb1d5508d588")
    ],
    items1: [ ],
    items2: [ ],
    name: "百里玄策",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5b2"),
    categories: [
        ObjectId("5e96d52146c1eb1d5508d588")
    ],
    items1: [ ],
    items2: [ ],
    name: "裴擒虎",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5b3"),
    categories: [
        ObjectId("5e96d52146c1eb1d5508d588")
    ],
    items1: [ ],
    items2: [ ],
    name: "元歌",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5b4"),
    categories: [
        ObjectId("5e96d52146c1eb1d5508d588")
    ],
    items1: [ ],
    items2: [ ],
    name: "司马懿",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5b5"),
    categories: [
        ObjectId("5e96d52146c1eb1d5508d588")
    ],
    items1: [ ],
    items2: [ ],
    name: "云中君",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5b6"),
    categories: [
        ObjectId("5e439a4312386f639ff0e29f")
    ],
    items1: [ ],
    items2: [ ],
    name: "孙尚香",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5b7"),
    categories: [
        ObjectId("5e439a4312386f639ff0e29f")
    ],
    items1: [ ],
    items2: [ ],
    name: "鲁班七号",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5b8"),
    categories: [
        ObjectId("5e439a4312386f639ff0e29f")
    ],
    items1: [ ],
    items2: [ ],
    name: "马可波罗",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5b9"),
    categories: [
        ObjectId("5e439a4312386f639ff0e29f")
    ],
    items1: [ ],
    items2: [ ],
    name: "狄仁杰",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5ba"),
    categories: [
        ObjectId("5e439a4312386f639ff0e29f")
    ],
    items1: [ ],
    items2: [ ],
    name: "后羿",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5bb"),
    categories: [
        ObjectId("5e439a4312386f639ff0e29f")
    ],
    items1: [ ],
    items2: [ ],
    name: "李元芳",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5bc"),
    categories: [
        ObjectId("5e439a4312386f639ff0e29f")
    ],
    items1: [ ],
    items2: [ ],
    name: "虞姬",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5bd"),
    categories: [
        ObjectId("5e439a4312386f639ff0e29f")
    ],
    items1: [ ],
    items2: [ ],
    name: "成吉思汗",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5be"),
    categories: [
        ObjectId("5e439a4312386f639ff0e29f")
    ],
    items1: [ ],
    items2: [ ],
    name: "黄忠",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5bf"),
    categories: [
        ObjectId("5e439a4312386f639ff0e29f")
    ],
    items1: [ ],
    items2: [ ],
    name: "百里守约",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5c0"),
    categories: [
        ObjectId("5e439a4312386f639ff0e29f")
    ],
    items1: [ ],
    items2: [ ],
    name: "公孙离",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/199/199.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5c1"),
    categories: [
        ObjectId("5e439a4312386f639ff0e29f")
    ],
    items1: [ ],
    items2: [ ],
    name: "伽罗",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5c2"),
    categories: [
        ObjectId("5e96d4f046c1eb1d5508d586")
    ],
    items1: [ ],
    items2: [ ],
    name: "庄周",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5c3"),
    categories: [
        ObjectId("5e96d4f046c1eb1d5508d586")
    ],
    items1: [ ],
    items2: [ ],
    name: "孙膑",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5c4"),
    categories: [
        ObjectId("5e96d4f046c1eb1d5508d586")
    ],
    items1: [ ],
    items2: [ ],
    name: "蔡文姬",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/184/184.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5c5"),
    categories: [
        ObjectId("5e96d4f046c1eb1d5508d586")
    ],
    items1: [ ],
    items2: [ ],
    name: "太乙真人",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5c6"),
    categories: [
        ObjectId("5e96d4f046c1eb1d5508d586")
    ],
    items1: [ ],
    items2: [ ],
    name: "大乔",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5c7"),
    categories: [
        ObjectId("5e96d4f046c1eb1d5508d586")
    ],
    items1: [ ],
    items2: [ ],
    name: "鬼谷子",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5c8"),
    categories: [
        ObjectId("5e96d4f046c1eb1d5508d586")
    ],
    items1: [ ],
    items2: [ ],
    name: "明世隐",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5c9"),
    categories: [
        ObjectId("5e96d4f046c1eb1d5508d586")
    ],
    items1: [ ],
    items2: [ ],
    name: "盾山",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
db.getCollection("heroes").insert([ {
    _id: ObjectId("5e96dc2c5aba8e1fcce4d5ca"),
    categories: [
        ObjectId("5e96d4f046c1eb1d5508d586")
    ],
    items1: [ ],
    items2: [ ],
    name: "瑶",
    avatar: "https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg",
    skills: [ ],
    partners: [ ],
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for items
// ----------------------------
db.getCollection("items").drop();
db.createCollection("items");

// ----------------------------
// Documents of items
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("node-vue-moba");
db.getCollection("items").insert([ {
    _id: ObjectId("5e42ee3ec686b2526dfba539"),
    name: "极速战靴",
    icon: "http://localhost:3001/uploads/9925ae417a49b3899505d0c280fd5767",
    __v: NumberInt("0")
} ]);
db.getCollection("items").insert([ {
    _id: ObjectId("5e434e3d9e1e065883ce46ed"),
    icon: "http://localhost:3001/uploads/399651953f35dd917ce05e1cb22bdab5",
    name: "饮血剑",
    __v: NumberInt("0")
} ]);
db.getCollection("items").insert([ {
    _id: ObjectId("5e435b689e1e065883ce46ee"),
    name: "亚索",
    icon: "http://localhost:3001/uploads/33835cc77a45e3a96e805fbe2cb31f29",
    __v: NumberInt("0")
} ]);
db.getCollection("items").insert([ {
    _id: ObjectId("5e4364cb6a49215cc28e1e00"),
    name: "无尽",
    icon: "http://localhost:3001/uploads/4a36a739e5754bdc5e46cc6e07dec02c",
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();
